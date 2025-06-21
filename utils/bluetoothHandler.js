async function scanBluetooth() {
  if (!navigator.bluetooth) {
    alert("WebBluetooth wird von Ihrem Browser nicht unterstützt.");
    return;
  }

  try {
    const device = await navigator.bluetooth.requestDevice({
      acceptAllDevices: true,
      optionalServices: []
    });
    addBluetoothDeviceToList(device);
  } catch (error) {
    console.error("Bluetooth-Scan-Fehler:", error);
  }
}

function addBluetoothDeviceToList(device) {
  const list = document.getElementById("device-list");
  const div = document.createElement("div");
  div.innerHTML = `
    <strong>Bluetooth-Gerät:</strong> ${device.name || "Unbekannt"}<br/>
    <span>ID: ${device.id}</span> – 
    <span class="risk neutral">Typ: Bluetooth</span>
  `;
  list.appendChild(div);
  logBluetoothDevice(device);
}
