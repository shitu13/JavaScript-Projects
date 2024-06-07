const URL = "https://cat-fact.herokuapp.com/facts";
const factPera = document.querySelector("#pera");
const mybtn = document.querySelector("#btn");

const getFacts = async () => {
  let response = await fetch(URL);
  console.log(response);
  let data = await response.json();

  factPera.innerHTML = data[0].text;
};

mybtn.addEventListener("click", getFacts);
