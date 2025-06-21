const { jsPDF } = window.jspdf;

function getValidDeviceLog() {
  let data = [];
  try {
    const raw = localStorage.getItem("deviceLog") || "[]";
    const parsed = JSON.parse(raw);
    data = Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    console.warn("Gerätelog konnte nicht gelesen werden.");
  }
  return data;
}

function exportDevicesCSV() {
  const data = getValidDeviceLog();

  const filtered = data.filter(d =>
    d.ip && !["ff-ff-ff-ff-ff-ff", "01-00-5e", "224.", "239.", "255."].some(val =>
      d.ip.startsWith(val) || d.mac?.startsWith(val))
  );

  let csv = "IP,MAC,Typ,Zeitstempel\n";
  filtered.forEach(d => {
    csv += `${d.ip},${d.mac || "-"},${d.type || "-"},${d.timestamp}\n`;
  });

  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "device_log.csv";
  a.click();
  URL.revokeObjectURL(url);
}

function exportDevicesPDF() {
  const data = getValidDeviceLog();

  const filtered = data.filter(d =>
    d.ip && !["ff-ff-ff-ff-ff-ff", "01-00-5e", "224.", "239.", "255."].some(val =>
      d.ip.startsWith(val) || d.mac?.startsWith(val))
  );

  const doc = new jsPDF();
  doc.setFontSize(12);
  doc.text("Geräteprotokoll", 10, 10);

  let y = 20;
  filtered.forEach(d => {
    doc.text(`IP: ${d.ip}`, 10, y);
    doc.text(`MAC: ${d.mac || "-"}`, 10, y + 6);
    doc.text(`Typ: ${d.type || "-"}`, 10, y + 12);
    doc.text(`Zeit: ${d.timestamp}`, 10, y + 18);
    y += 30;
    if (y > 270) {
      doc.addPage();
      y = 20;
    }
  });

  doc.save("device_log.pdf");
}
