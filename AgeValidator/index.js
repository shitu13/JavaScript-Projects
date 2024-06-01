const button = document.getElementById("sub-btn");
const text = document.getElementById("age-txt");
const result = document.getElementById("my-p");
let age;

button.onclick = () => {
  age = text.value;
  age = Number(age);

  if (age == 0) {
    result.textContent = `You are 0 years old`;
  } else if (age >= 100) {
    result.textContent = `You are too old years old`;
  } else if (age == 18) {
    result.textContent = `You are 18 years old`;
  } else result.textContent = `You can not enter the website`;
};
