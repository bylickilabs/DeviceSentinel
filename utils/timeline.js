function showTimeline() {
  const data = getValidDeviceLog();
  const sorted = [...data].sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

  const container = document.getElementById("device-list");
  container.innerHTML = "<h2>🕒 Zeitverlauf</h2>";

  sorted.forEach((entry, index) => {
    if (!entry.timestamp || entry.mac === 'ff-ff-ff-ff-ff-ff' || entry.ip?.startsWith("224.")) return;
    const div = document.createElement("div");
    div.innerHTML = `
      <strong>#${index + 1}</strong> – <span>${entry.timestamp}</span><br/>
      IP: ${entry.ip || "-"}, MAC: ${entry.mac || "-"}, Typ: ${entry.type || "-"}<br/>
      Risiko: ${entry.risk || "-"}, Quelle: ${entry.context || "-"}
    `;
    div.style.marginBottom = "1rem";
    div.style.padding = "0.5rem";
    div.style.borderLeft = "4px solid #00ffe7";
    container.appendChild(div);
  });
}
