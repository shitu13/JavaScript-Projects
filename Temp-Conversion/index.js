const textBox = document.getElementById("temp");
const toCel = document.getElementById("to-c");
const toFer = document.getElementById("to-f");
const result = document.getElementById("res");
const btn = document.getElementById("btn-submit");
let temp;

btn.onclick = function convert() {
  if (toFer.checked) {
    temp = Number(textBox.value);
    temp = (temp * 9) / 5 + 32;
    result.textContent = temp + "°F";
  } else if (toCel.checked) {
    temp = Number(textBox.value);
    temp = (temp - 32) * (5 / 9);
    result.textContent = temp + "°C";
  } else {
    result.textContent = "Select a unit";
  }
};
