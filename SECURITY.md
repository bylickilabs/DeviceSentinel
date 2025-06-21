# 🔐 Security Policy

## 🧩 Supported Versions

| Version           | Status       |
|-------------------|--------------|
| v23+ (Live-Modus) | ✅ Supported |
| < v23             | ⚠️ Legacy Support Only |

---

## 📢 Reporting a Vulnerability

Wenn du eine Sicherheitslücke in **Device Sentinel** gefunden hast, melde diese bitte **verantwortungsbewusst und vertraulich**.

Bitte sende eine detaillierte Beschreibung an:

📧 **security@bylickilabs.de**

Deine Meldung sollte enthalten:
- Beschreibung der Schwachstelle
- Reproduktionsschritte
- Betroffene Komponenten / Dateien
- Optional: Proof-of-Concept oder Screenshots

Wir verpflichten uns zu folgendem Ablauf:

1. **Antwort innerhalb von 3 Werktagen**
2. **Bewertung des Sicherheitsrisikos**
3. **Zeitnahe Behebung (abhängig von Schwere & Aufwand)**
4. **Veröffentlichung eines Changelogs mit CVE (falls relevant)**

---

## 📦 Scope / Geltungsbereich

Dieses Sicherheitskonzept umfasst:
- `netScan.js` (lokaler Node-Scanner)
- `index.html`, `utils/*.js` (Frontend)
- Speicherung in `localStorage` (kein Server)
- Whitelist-Mechanismen

Ausgenommen sind:
- Benutzerdefinierte Anpassungen
- Eigenständige Node.js-Modifikationen außerhalb dieses Repos

---

## 🔒 Sicherheitsempfehlungen

- Führe die Anwendung **nur lokal** aus
- Verwende **aktuelle Browser** mit WebUSB-Unterstützung
- **Importiere keine Logs oder Whitelists aus unsicheren Quellen**
- Prüfe `.json`-Dateien vor Import manuell auf Manipulation

---

## 🧠 Weitere Informationen

Das Projekt Device Sentinel folgt dem Prinzip:

> „Vertrauenswürdige Daten, lokale Verarbeitung, minimale Angriffsfläche.“

Für externe Sicherheitsprüfungen oder Penetrationstests kontaktiere uns bitte vorab.

---

© BylickiLabs — Maintained by Thorsten Bylicki
