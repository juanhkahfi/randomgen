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

console.log(anjaymabar());
