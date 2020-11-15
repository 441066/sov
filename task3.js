let chess = "";
let size = 8;
for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    (j + i) % 2 == 0 ? (chess += " ") : (chess += "#");
  }
  chess += "\n";
}
console.log(chess);
