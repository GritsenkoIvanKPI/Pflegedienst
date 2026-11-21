<?php
/*
 * Online-Bewerbung – Ambulanter Pflegedienst Funk GmbH
 * Nimmt das Formular von /karriere/bewerbung/ entgegen, prüft alle Angaben und Dateien
 * und sendet die Bewerbung mit allen Anhängen per E-Mail. Antwort als JSON für das Formular.
 *
 * Vor dem Start prüfen: EMPFAENGER und ABSENDER (Absender-Adresse muss zur Domain gehören,
 * sonst landen die Mails im Spam). Der Server muss PHP-mail() unterstützen.
 */

const EMPFAENGER = 'info@pflegedienst-funk.de';
const ABSENDER   = 'info@pflegedienst-funk.de';
const MAX_DATEI  = 5 * 1024 * 1024;    // 5 MB je Datei
const MAX_GESAMT = 20 * 1024 * 1024;   // 20 MB insgesamt
const ERLAUBT    = [
  'pdf'  => ['application/pdf'],
  'doc'  => ['application/msword', 'application/octet-stream'],
  'docx' => ['application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/zip', 'application/octet-stream'],
  'jpg'  => ['image/jpeg'],
  'jpeg' => ['image/jpeg'],
  'png'  => ['image/png'],
];

header('Content-Type: application/json; charset=utf-8');
header('X-Robots-Tag: noindex');

function antwort(bool $ok, string $fehler = '', int $status = 200): void {
  http_response_code($status);
  echo json_encode(['ok' => $ok, 'error' => $fehler], JSON_UNESCAPED_UNICODE);
  exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') antwort(false, 'Methode nicht erlaubt', 405);

// Spamschutz: Honeypot leer und Formular nicht schneller als 4 Sekunden ausgefüllt
if (!empty($_POST['website'])) antwort(true);
$ts = (int) ($_POST['ts'] ?? 0);
if ($ts > 0 && (time() * 1000 - $ts) < 4000) antwort(false, 'Bitte versuchen Sie es erneut.', 429);

$feld = fn(string $k, int $max = 200): string => trim(mb_substr(str_replace(["\r", "\n"], ' ', (string) ($_POST[$k] ?? '')), 0, $max));
$vorname  = $feld('vorname');
$nachname = $feld('nachname');
$email    = $feld('email');
$telefon  = $feld('telefon', 60);
$stelle   = $feld('stelle');
$quelle   = $feld('quelle');
$nachricht = trim(mb_substr((string) ($_POST['nachricht'] ?? ''), 0, 4000));

if (mb_strlen($vorname) < 2 || mb_strlen($nachname) < 2) antwort(false, 'Bitte geben Sie Ihren Namen an.', 422);
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) antwort(false, 'Bitte geben Sie eine gültige E-Mail-Adresse an.', 422);
if (strlen(preg_replace('/\D/', '', $telefon)) < 6) antwort(false, 'Bitte geben Sie eine Telefonnummer an.', 422);
if ($stelle === '') antwort(false, 'Bitte wählen Sie eine Stelle aus.', 422);
if (($_POST['datenschutz'] ?? '') !== 'ja') antwort(false, 'Bitte stimmen Sie der Datenschutzerklärung zu.', 422);

// Dateien einsammeln und prüfen
$anhaenge = [];
$gesamt = 0;
$finfo = new finfo(FILEINFO_MIME_TYPE);

function dateien(string $name): array {
  if (empty($_FILES[$name])) return [];
  $f = $_FILES[$name];
  if (!is_array($f['name'])) return [$f];
  $liste = [];
  foreach ($f['name'] as $i => $n) {
    $liste[] = ['name' => $n, 'type' => $f['type'][$i], 'tmp_name' => $f['tmp_name'][$i], 'error' => $f['error'][$i], 'size' => $f['size'][$i]];
  }
  return $liste;
}

$gruppen = [
  'lebenslauf'  => ['Lebenslauf', true],
  'anschreiben' => ['Anschreiben', true],
  'zeugnisse'   => ['Zeugnis', false],
];
foreach ($gruppen as $feldname => [$titel, $pflicht]) {
  $liste = array_filter(dateien($feldname), fn($d) => ($d['error'] ?? UPLOAD_ERR_NO_FILE) !== UPLOAD_ERR_NO_FILE);
  if ($pflicht && !$liste) antwort(false, "Bitte laden Sie Ihr $titel hoch.", 422);
  $nr = 0;
  foreach ($liste as $d) {
    if ($d['error'] !== UPLOAD_ERR_OK || !is_uploaded_file($d['tmp_name'])) antwort(false, 'Eine Datei konnte nicht hochgeladen werden.', 422);
    if ($d['size'] > MAX_DATEI) antwort(false, 'Eine Datei ist größer als 5 MB.', 422);
    $ext = strtolower(pathinfo($d['name'], PATHINFO_EXTENSION));
    $mime = $finfo->file($d['tmp_name']);
    if (!isset(ERLAUBT[$ext]) || !in_array($mime, ERLAUBT[$ext], true)) antwort(false, 'Erlaubt sind nur PDF, Word und Bilder.', 422);
    $gesamt += $d['size'];
    if ($gesamt > MAX_GESAMT) antwort(false, 'Die Unterlagen sind zusammen größer als 20 MB.', 422);
    $nr++;
    $sauber = preg_replace('/[^A-Za-z0-9._-]+/', '_', pathinfo($d['name'], PATHINFO_FILENAME));
    $anhaenge[] = [
      'name' => $titel . ($pflicht ? '' : "_$nr") . '_' . $sauber . '.' . $ext,
      'mime' => $mime,
      'data' => file_get_contents($d['tmp_name']),
    ];
  }
}

// E-Mail zusammenstellen (Text + Anhänge)
$text = "Neue Online-Bewerbung über pflegedienst-funk.de\n\n"
  . "Stelle:    $stelle\n"
  . "Name:      $vorname $nachname\n"
  . "E-Mail:    $email\n"
  . "Telefon:   $telefon\n"
  . "Quelle:    " . ($quelle ?: '–') . "\n\n"
  . "Nachricht:\n" . ($nachricht ?: '–') . "\n\n"
  . "Anhänge: " . implode(', ', array_column($anhaenge, 'name')) . "\n\n"
  . "Datenschutz-Einwilligung: erteilt am " . date('d.m.Y H:i') . " Uhr\n"
  . "Bewerber-Pool (bis zu 2 Jahre): " . ((($_POST['talentpool'] ?? '') === 'ja') ? 'JA – Einwilligung erteilt am ' . date('d.m.Y H:i') . ' Uhr' : 'nein – Unterlagen 6 Monate nach Abschluss des Verfahrens löschen') . "\n";

$grenze = 'funk_' . bin2hex(random_bytes(12));
$betreff = '=?UTF-8?B?' . base64_encode("Bewerbung: $stelle – $vorname $nachname") . '?=';
$kopf = implode("\r\n", [
  'From: =?UTF-8?B?' . base64_encode('Website Pflegedienst Funk') . '?= <' . ABSENDER . '>',
  'Reply-To: ' . $email,
  'MIME-Version: 1.0',
  "Content-Type: multipart/mixed; boundary=\"$grenze\"",
]);
$inhalt = "--$grenze\r\nContent-Type: text/plain; charset=UTF-8\r\nContent-Transfer-Encoding: 8bit\r\n\r\n$text\r\n";
foreach ($anhaenge as $a) {
  $inhalt .= "--$grenze\r\n"
    . "Content-Type: {$a['mime']}; name=\"{$a['name']}\"\r\n"
    . "Content-Transfer-Encoding: base64\r\n"
    . "Content-Disposition: attachment; filename=\"{$a['name']}\"\r\n\r\n"
    . chunk_split(base64_encode($a['data'])) . "\r\n";
}
$inhalt .= "--$grenze--";

if (!mail(EMPFAENGER, $betreff, $inhalt, $kopf, '-f' . ABSENDER)) antwort(false, 'Versand fehlgeschlagen.', 500);

antwort(true);
