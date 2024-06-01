const randomButton = document.getElementById("roll-btn");
const label = document.getElementById("label");

const min = 1;
const max = 6;
let rand1;
let rand2;
let rand3;

randomButton.onclick = function () {
  rand1 = Math.floor(Math.random() * max) + min;
  rand2 = Math.floor(Math.random() * max) + min;
  rand3 = Math.floor(Math.random() * max) + min;

  label1.textContent = rand1;
  label2.textContent = rand2;
  label3.textContent = rand3;
};
