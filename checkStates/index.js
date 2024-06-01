const subs = document.getElementById("check-box1");
const visa = document.getElementById("visa-btn");
const master = document.getElementById("master-btn");
const paypal = document.getElementById("pay-btn");
const submit = document.getElementById("btn");
const res1 = document.getElementById("sub-res");
const res2 = document.getElementById("pay-res");

submit.onclick = function () {
  if (subs.checked) {
    res1.textContent = "You are subscribed!";
  } else res1.textContent = "You are not subscribed!";

  if (visa.checked) {
    res2.textContent = "You are paying with VISA";
  } else if (master.checked) {
    res2.textContent = "You are paying with Master Card";
  } else {
    res2.textContent = "You are paying with PayPal";
  }
};
