let whitelist = [
  { ip: "192.168.2.1", mac: "04-70-56-b9-ff-fc", label: "Router" },
  { ip: "192.168.2.33", mac: "f0-a6-54-ae-0c-f7", label: "Torstens PC" }
];

const storedWL = localStorage.getItem("whitelistData");
if (storedWL) {
  try {
    const parsed = JSON.parse(storedWL);
    if (Array.isArray(parsed)) whitelist = parsed;
  } catch (e) {}
}

function isWhitelisted(device) {
  return whitelist.some(entry =>
    entry.ip === device.ip && entry.mac?.toLowerCase() === device.mac?.toLowerCase()
  );
}

function getLabel(device) {
  const match = whitelist.find(entry =>
    entry.ip === device.ip && entry.mac?.toLowerCase() === device.mac?.toLowerCase()
  );
  return match ? match.label : null;
}


function exportWhitelist() {
  const blob = new Blob([JSON.stringify(whitelist, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "whitelist.json";
  a.click();
  URL.revokeObjectURL(url);
}

function importWhitelist(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    try {
      const imported = JSON.parse(e.target.result);
      if (Array.isArray(imported)) {
        localStorage.setItem("whitelistData", JSON.stringify(imported));
        alert("Whitelist importiert.");
        location.reload();
      }
    } catch (e) {
      alert("Fehler beim Importieren der Whitelist.");
    }
  };
  reader.readAsText(file);
}


function showNewDevices() {
  const data = getValidDeviceLog();
  const list = document.getElementById("device-list");
  list.innerHTML = "<h2>📌 Nur neue Geräte</h2>";

  const filtered = data.filter(device => !isWhitelisted(device));
  filtered.forEach(device => {
    const div = document.createElement("div");
    div.innerHTML = `
      <strong>NEU:</strong> ${device.ip || '-'}<br/>
      MAC: ${device.mac || '-'}<br/>
      Typ: ${device.type || '-'}<br/>
      Zeit: ${device.timestamp || '-'}
    `;
    div.style.borderLeft = "4px solid red";
    div.style.marginBottom = "1rem";
    div.style.padding = "0.5rem";
    list.appendChild(div);
  });
}
