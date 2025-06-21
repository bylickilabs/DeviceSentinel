const knownVendors = {
  0x046d: { name: "Logitech", risk: "Vertraut" },
  0x05ac: { name: "Apple", risk: "Vertraut" },
  0x0781: { name: "SanDisk", risk: "Vertraut" },
  0x0bda: { name: "Realtek", risk: "Neutral" },
  0x1234: { name: "Unbekanntes Gerät", risk: "Unsicher" } // Beispiel
};

function evaluateVendor(vendorId) {
  const entry = knownVendors[vendorId];
  if (!entry) {
    return { name: "Unbekannt", risk: "Unbekannt" };
  }
  return entry;
}
