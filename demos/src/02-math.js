function sum(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b === 0) return null;

  return a / b;
}
// reto
function secondsConverter(sec) {
  if (typeof sec !== "number") return null;
  const hr = Math.floor(sec / 3600);
  const minutes = Math.floor((sec % 3600) / 60);
  const residue = (sec % 3600) % 60;
  return `${hr}:${minutes}:${residue}`;
}
module.exports = { sum, multiply, divide, secondsConverter };
