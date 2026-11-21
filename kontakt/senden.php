<?php
/*
 * Kontaktformular – Ambulanter Pflegedienst Funk GmbH
 * Nimmt das Formular „Rückruf oder Beratung anfragen“ (auf allen Seiten) entgegen
 * und sendet die Anfrage per E-Mail an info@pflegedienst-funk.de. Antwort als JSON.
 */

const EMPFAENGER = 'info@pflegedienst-funk.de';
const ABSENDER   = 'info@pflegedienst-funk.de';

header('Content-Type: application/json; charset=utf-8');
header('X-Robots-Tag: noindex');

function antwort(bool $ok, string $fehler = '', int $status = 200): void {
  http_response_code($status);
  echo json_encode(['ok' => $ok, 'error' => $fehler], JSON_UNESCAPED_UNICODE);
  exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') antwort(false, 'Methode nicht erlaubt', 405);

// Spamschutz: Honeypot leer und nicht schneller als 3 Sekunden ausgefüllt
if (!empty($_POST['website'])) antwort(true);
$ts = (int) ($_POST['ts'] ?? 0);
if ($ts > 0 && (time() * 1000 - $ts) < 3000) antwort(false, 'Bitte versuchen Sie es erneut.', 429);

$feld = fn(string $k, int $max = 200): string => trim(mb_substr(str_replace(["\r", "\n"], ' ', (string) ($_POST[$k] ?? '')), 0, $max));
$anliegen = $feld('anliegen', 60) ?: 'Anfrage';
$name     = $feld('name');
$telefon  = $feld('telefon', 60);
$email    = $feld('email');
$nachricht = trim(mb_substr((string) ($_POST['nachricht'] ?? ''), 0, 4000));

if (mb_strlen($name) < 2) antwort(false, 'Bitte geben Sie Ihren Namen an.', 422);
if (strlen(preg_replace('/\D/', '', $telefon)) < 6) antwort(false, 'Bitte geben Sie eine Telefonnummer an.', 422);
if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) antwort(false, 'Bitte prüfen Sie Ihre E-Mail-Adresse.', 422);
if (empty($_POST['datenschutz'])) antwort(false, 'Bitte stimmen Sie der Datenschutzerklärung zu.', 422);

$seite = $feld('seite', 200);
$text = "Neue Anfrage über pflegedienst-funk.de\n\n"
  . "Anliegen:  $anliegen\n"
  . "Name:      $name\n"
  . "Telefon:   $telefon\n"
  . "E-Mail:    " . ($email ?: '–') . "\n"
  . "Seite:     " . ($seite ?: '–') . "\n\n"
  . "Nachricht:\n" . ($nachricht ?: '–') . "\n\n"
  . "Datenschutz-Einwilligung: erteilt am " . date('d.m.Y H:i') . " Uhr\n";

$betreff = '=?UTF-8?B?' . base64_encode("$anliegen – $name") . '?=';
$kopf = [
  'From: =?UTF-8?B?' . base64_encode('Website Pflegedienst Funk') . '?= <' . ABSENDER . '>',
  'MIME-Version: 1.0',
  'Content-Type: text/plain; charset=UTF-8',
  'Content-Transfer-Encoding: 8bit',
];
if ($email !== '') $kopf[] = 'Reply-To: ' . $email;

if (!mail(EMPFAENGER, $betreff, $text, implode("\r\n", $kopf), '-f' . ABSENDER)) antwort(false, 'Versand fehlgeschlagen.', 500);

antwort(true);
