
function startLiveUpdates(interval = 5000) {
  setInterval(() => {
    const raw = localStorage.getItem("deviceLog") || "[]";
    let devices = [];
    try {
      const parsed = JSON.parse(raw);
      devices = Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      return;
    }

    const list = document.getElementById("device-list");
    list.innerHTML = '';
    devices.forEach(device => {
      if (device.mac === 'ff-ff-ff-ff-ff-ff' || device.ip?.startsWith("224.")) return;

      const div = document.createElement("div");
      div.innerHTML = `
        <strong>${device.ip || 'USB'}</strong><br/>
        MAC: ${device.mac || '-'}<br/>
        Typ: ${device.type || '-'}<br/>
        Risiko: ${device.risk || '-'}<br/>
        <small>${device.timestamp}</small>
      `;
      div.style.borderLeft = isWhitelisted(device) ? "4px solid #00ff99" : "4px solid red";
      div.style.marginBottom = "1rem";
      div.style.padding = "0.5rem";
      list.appendChild(div);
    });
  }, interval);
}
