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
# Version aus apktool.yml lesen → Ausgabename z. B. apk/Lesen-und-Verstehen-v5.0.apk
VERSION="$(sed -n "s/^  versionName: '\(.*\)'/\1/p" android/apktool.yml)"
OUT="${OUT:-apk/Lesen-und-Verstehen-v${VERSION}.apk}"
# Optional: AAPT2=/pfad/zu/aapt2 (wird an Apktool übergeben)
AAPT_OPT=()
if [ -n "${AAPT2:-}" ]; then AAPT_OPT=(--aapt "$AAPT2"); fi

rm -rf android/assets
cp -r app android/assets

mkdir -p "$(dirname "$OUT")"
java -jar "$APKTOOL" b android -f "${AAPT_OPT[@]}" -o unsigned.apk
cp unsigned.apk "$OUT"
jarsigner -sigalg SHA256withRSA -digestalg SHA-256 \
  -keystore "$KEYSTORE" -storepass "$STOREPASS" \
  "$OUT" lesen
rm -f unsigned.apk
rm -rf android/assets
echo "Fertig: $OUT"
