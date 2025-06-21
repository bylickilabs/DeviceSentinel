function logDevice(device, riskLevel, context) {
  let log = JSON.parse(localStorage.getItem("deviceLog") || "[]");
  const entry = {
    timestamp: new Date().toISOString(),
    vendorId: device.vendorId,
    productId: device.productId,
    manufacturer: device.manufacturerName || "Unbekannt",
    product: device.productName || "Unbekannt",
    risk: riskLevel,
    context: context
  };
  log.push(entry);
  localStorage.setItem("deviceLog", JSON.stringify(log));
}


function logBluetoothDevice(device) {
  let log = JSON.parse(localStorage.getItem("deviceLog") || "[]");
  const entry = {
    timestamp: new Date().toISOString(),
    bluetooth: true,
    name: device.name || "Unbekannt",
    id: device.id
  };
  log.push(entry);
  localStorage.setItem("deviceLog", JSON.stringify(log));
}
