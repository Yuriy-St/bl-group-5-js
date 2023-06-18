// Реалізуйте функціонал отримання даних з API по кліку на кнопку "BUTTON" і виведення їх
// на сторінку при кожному кліку по кнопці. Кожен факт має мати свій порядковий номер.
// https://catfact.ninja/

const fechButton = document.querySelector(".request-button");
const factsList = document.querySelector(".facts-list");
let counter = 1;

fechButton.addEventListener("click", onClickButton);

function onClickButton() {
  fechFact().then(drawMurkup).catch(console.log);
}

function fechFact() {
  return fetch("https://catfact.ninja/fact")
    .then((response) => {
      return response.json();
    })
    .then((data) => data.fact)
    .catch(console.log);
}

function drawMurkup(string) {
  factsList.insertAdjacentHTML("beforeend", `<li>${counter++}. ${string}</li>`);
}
