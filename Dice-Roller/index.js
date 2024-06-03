function rollDice() {
  const numOfDice = document.getElementById("numberOfDice").value;
  const diceResult = document.getElementById("dice-result");
  const diceImages = document.getElementById("dice-images");

  const values = [];
  const images = [];

  for (let i = 0; i < numOfDice; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);

    images.push(`<img src="images/${value}.png">`);
  }

  diceResult.textContent = `dice: ${values.join(", ")}`;
  diceImages.innerHTML = images.join("");
}
