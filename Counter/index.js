const dec = document.getElementById("btn-dec");
const rst = document.getElementById("btn-rst");
const inc = document.getElementById("btn-inc");

const cntLabel = document.getElementById("cnt-label");

let cnt = 0;

inc.onclick = function () {
  cnt++;
  cntLabel.textContent = cnt;
};

dec.onclick = function () {
  cnt--;
  cntLabel.textContent = cnt;
};

rst.onclick = function () {
  cnt = 0;
  cntLabel.textContent = cnt;
};
