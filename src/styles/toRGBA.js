const hex = "00796b";
const r = parseInt(hex.slice(0, 2), 16);
const g = parseInt(hex.slice(2, 4), 16);
const b = parseInt(hex.slice(4, 6), 16);
const rgba = `rgba(${r}, ${g}, ${b}, ${1})`;
console.log(rgba);
