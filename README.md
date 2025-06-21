|🛡️ Device Sentinel|[![🔎 Device Sentinel CI](https://github.com/bylickilabs/DeviceSentinel/actions/workflows/main.yml/badge.svg)](https://github.com/bylickilabs/DeviceSentinel/actions/workflows/main.yml)|
|---|---|

|![DS1](https://github.com/user-attachments/assets/a1251900-a2f5-4414-815d-f8598fa94b77)|
|---|

**Device Sentinel** ist ein browserbasiertes Sicherheits-Dashboard zur Anzeige und Überwachung von Netzwerk- und USB-Geräten in Echtzeit – vollständig offline, lokal ausführbar und ohne Server.

<br>

---

<br>

> 🚀 Funktionen

| Kategorie              | Details                                                                 |
|------------------------|-------------------------------------------------------------------------|
| 🔌 **USB-Erkennung**    | Scan über WebUSB, Anzeige von Hersteller + Risikobewertung              |
| 🌐 **Netzwerkscan**     | ARP-basiert über separate Node.js-Anwendung (`netScan.js`)              |
| 📂 **Import**           | Geräteprotokoll (`device_log.json`) importierbar                        |
| 📤 **Export**           | CSV- und PDF-Export des Logs                                            |
| 🛡️ **Whitelist**        | Import & Export von bekannten Geräten mit Statusanzeige                 |
| 🧠 **Filter & Analyse** | Nur neue Geräte anzeigen, Timeline-Darstellung                          |
| 📡 **Live-Modus**       | Echtzeitanzeige aller Geräte aus dem Log (alle 5 Sekunden aktualisiert) |

<br>

---

<br>

> 📦 Projektstruktur

```yarn
DeviceSentinel/
├── app.js
├── import.html
├── index.html
├── netScan.js
├── style.css
├── utils/
│   ├── bluetoothHandler.js
│   ├── deviceHandler.js
│   ├── exporter.js
│   ├── live.js
│   ├── networkScanner.js
│   ├── themeHandler.js
│   ├── timeline.js
│   ├── vendors.js
│   └── vendors.js
├── README.md
```

<br>

---

<br>

> 🖥️ Voraussetzungen
- ✅ Aktueller Chromium-basierter Browser (z. B. Chrome, Edge)
- ✅ Für WebUSB: Nutzung über localhost oder HTTPS empfohlen
- ✅ Für Netzwerkscan (optional):
  - Node.js
  - Datei: netScan.js ausführen via node netScan.js

<br>

---

<br>

> ⚙️ Verwendung
  - 📥 Entpacken

> 📂 Öffne index.html im Browser
  - 📡 Nutze die Buttons im linken Panel:
  - „USB-Geräte scannen“
  - „Netzwerkgeräte importieren“
  - „Nur neue Geräte anzeigen“

📤 Exportiere Ergebnisse als .csv oder .pdf

<br>

---

<br>

> 🧩 Whitelist-Funktion
- Datei whitelist.json kann importiert/exportiert werden
- Geräte in der Whitelist erscheinen in grün
- Neue/unbekannte Geräte erscheinen in rot

> Format-Beispiel:

```yarn
[
  {
    "ip": "192.168.2.1",
    "mac": "04-70-56-b9-ff-fc",
    "label": "Router"
  }
]
```

<br>

---

<br>

> 📡 Live-Überwachung
   - Wird beim Laden automatisch gestartet
   - Aktualisiert die Anzeige alle 5 Sekunden mit:
   - IP, MAC, Typ, Zeitstempel, Risiko

> Status: „Bekannt“ / „Neu“

<br>

---

<br>

> 📥 Optionaler Netzwerkscanner (Node.js)
  - Öffne Terminal im Verzeichnis mit netScan.js

> Ausführen:

```yarn
node netScan.js
```

- [x] Ergebnis: device_log.json erzeugt
- [x] Importiere Datei über die Import-Schaltfläche in der UI

<br>

---

<br>

> 📃 Lizenz
  - MIT License – [LICENSE](LICENSE)
