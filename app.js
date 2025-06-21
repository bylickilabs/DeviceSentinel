navigator.usb.addEventListener("connect", event => {
  addDeviceToList(event.device, "Verbunden");
});

navigator.usb.addEventListener("disconnect", event => {
  addDeviceToList(event.device, "Getrennt");
});

async function scanUSB() {
  if (!navigator.usb) {
    alert("WebUSB wird von Ihrem Browser nicht unterstützt.");
    return;
  }

  try {
    const device = await navigator.usb.requestDevice({ filters: [] });
    addDeviceToList(device, "Manueller Scan");
  } catch (error) {
    if (error.name === "NotFoundError") {
      alert("⚠️ Kein Gerät ausgewählt.");
    } else {
      console.error("Fehler beim Abrufen des Geräts:", error);
    }
  }
}

function addDeviceToList(device, context = "Unbekannt") {
  const list = document.getElementById("device-list");
  const div = document.createElement("div");
  const vendorInfo = evaluateVendor(device.vendorId);
  div.innerHTML = `
    <strong>${vendorInfo.name}</strong> | 
    Produkt: ${device.productName || "Unbekannt"}<br/>
    <span>Vendor ID: 0x${device.vendorId.toString(16)}</span> – 
    <span class="risk ${vendorInfo.risk.toLowerCase()}">Risiko: ${vendorInfo.risk}</span><br/>
    <em>Quelle: ${context}</em>
  `;
  list.appendChild(div);
  logDevice(device, vendorInfo.risk, context);
}

function exportLog() {
  const log = localStorage.getItem("deviceLog") || "[]";
  const blob = new Blob([log], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "device_log.json";
  a.click();
  URL.revokeObjectURL(url);
}
