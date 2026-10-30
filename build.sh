#!/usr/bin/env bash
# Lesen & Verstehen – Build-Skript (Apktool + jarsigner) · @ Joschy
# Benötigt Umgebungsvariablen:
#   APKTOOL   – Pfad zu apktool.jar (getestet mit 2.11.1)
#   KEYSTORE  – Pfad zum Signaturschlüssel (liegt NICHT im Repo)
#   STOREPASS – Passwort des Keystores (NIE ins Repo schreiben)
set -euo pipefail
cd "$(dirname "$0")"
: "${APKTOOL:?APKTOOL nicht gesetzt (Pfad zu apktool.jar)}"
: "${KEYSTORE:?KEYSTORE nicht gesetzt (Pfad zum .keystore)}"
: "${STOREPASS:?STOREPASS nicht gesetzt}"
OUT="${OUT:-Lesen-und-Verstehen.apk}"

rm -rf android/assets
cp -r app android/assets

java -jar "$APKTOOL" b android -o unsigned.apk
cp unsigned.apk "$OUT"
jarsigner -sigalg SHA256withRSA -digestalg SHA-256 \
  -keystore "$KEYSTORE" -storepass "$STOREPASS" \
  "$OUT" lesen
rm -f unsigned.apk
echo "Fertig: $OUT"
