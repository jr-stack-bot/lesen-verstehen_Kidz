# Lesen & Verstehen

Lese-App für die 4. Klasse (Android, Web-App in einer WebView). Links steht der Text, rechts die Fragen dazu.

- **102 Texte, 675 Fragen** in **3 Stufen** – alle Texte selbst geschrieben
- **Münzen** für richtige Antworten, **Held-Shop** mit 84 Teilen zum Gestalten der eigenen Figur
- **Pokale** und **Feuerwerk** bei einem perfekten Durchgang

## Screenshots

| | |
|---|---|
| ![Startseite](screenshots/01-start.png)<br>Startseite mit Stufen, Text-Kacheln und Sternen | ![Lesen](screenshots/02-lesen.png)<br>Richtige Antwort – die Textstelle wird grün markiert |
| ![Hilfe](screenshots/03-hilfe.png)<br>Falsche Antwort – gelbe Hilfe-Markierung im Text | ![Antippen](screenshots/04-antippen.png)<br>Fragetyp „Wort im Text antippen“ |
| ![Perfekt](screenshots/05-perfekt.png)<br>Feuerwerk und tanzender Held bei einem perfekten Text | ![Mein Held](screenshots/06-held.png)<br>„Mein Held“ – Kleidung anprobieren und kaufen |

## Eckdaten

| | |
|---|---|
| Zielgerät | Samsung Galaxy Tab S5e, Querformat |
| Paketname | `de.vishwa.lesen` |
| Version | 2.0 (versionCode 2) |

## Installation

APK aus `apk/` aufs Tablet kopieren und installieren (Installation aus unbekannten Quellen erlauben).
`Lesen-und-Verstehen-v2.apk` ist die aktuelle Version, `Lesen-und-Verstehen.apk` die erste.

**Wichtig:** Updates lassen sich nur über eine installierte Version spielen, wenn sie mit **demselben Signaturschlüssel** signiert sind. Der Schlüssel liegt bewusst **nicht** im Repo.

Der Fortschritt (Münzen, Pokale, Figur) liegt im `localStorage` auf dem Tablet unter dem Schlüssel `vishwa-lesen-v1`. Deinstallieren löscht ihn, ein Update mit gleichem Schlüssel behält ihn.

## Aufbau

- `app/` – Web-App (index.html, Texte in content*.js, Figur/Shop in avatar.js, Schriften)
- `android/` – Apktool-Projekt (Manifest, smali, res)
- `apk/` – fertige APKs
- `build.sh` – Build-Skript

## Selbst bauen

Voraussetzungen: Java (inkl. `jarsigner`), [Apktool](https://apktool.org) 2.11.1, der Keystore.

```bash
export APKTOOL=/pfad/zu/apktool.jar
export KEYSTORE=/pfad/zu/lesen.keystore
export STOREPASS='…'
./build.sh
```

Das Skript kopiert `app/` nach `android/assets`, baut mit Apktool und signiert mit dem Alias `lesen`.

---
@ Joschy
