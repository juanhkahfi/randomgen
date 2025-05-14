const fs = require("fs"); //modul fs
function anjaymabar() {
  const puki = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let hasilanjaymabar = "";

  hasilanjaymabar += "FREE";
  for (let i = 0; i < 8; i++) {
    const iniacak = Math.floor(Math.random() * puki.length);

    hasilanjaymabar += puki[iniacak];
  }

  return hasilanjaymabar;
}

// Generate 3 kode dan simpan ke dalam array
let result = "";
for (let i = 0; i < 3; i++) {
  result += anjaymabar() + "\n"; // Setiap kode dipisah dengan baris baru
}

// Menyimpan hasil ke dalam file "hasil_kode.txt"
fs.writeFileSync("hasil_kode.txt", result);

console.log('Kode acak berhasil disimpan di "hasil_kode.txt"');
