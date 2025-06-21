const fs = require('fs');
const { exec } = require('child_process');

const results = [];

exec('arp -a', (error, stdout, stderr) => {
  if (error) {
    console.error(`Fehler beim Ausführen von arp: ${error.message}`);
    return;
  }

  const lines = stdout.split('\n');
  lines.forEach(line => {
    const match = line.match(/(\d+\.\d+\.\d+\.\d+)\s+([-\w]+)\s+([\w-]+)/);
    if (match) {
      results.push({
        timestamp: new Date().toISOString(),
        ip: match[1],
        mac: match[2],
        type: "arp"
      });
    }
  });

  fs.writeFileSync('device_log.json', JSON.stringify(results, null, 2));
  console.log('ARP-Scan abgeschlossen. Ergebnisse gespeichert in device_log.json');
});
