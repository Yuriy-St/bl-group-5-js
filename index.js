//TODO:==============================================
/*
Завдання 1
Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)
*/

const buttonEl1 = document.querySelector(`#alertButton`);
const inputEl1 = document.querySelector(`#alertInput`);

buttonEl1.addEventListener(`click`, () => alert(inputEl1.value));

//TODO:==============================================
/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/

const buttonEl2 = document.querySelector(`#swapButton`);
const leftInput = document.querySelector(`#leftSwapInput`);
const rightInput = document.querySelector(`#rightSwapInput`);

buttonEl2.addEventListener(`click`, () => {
  let inputLeftText = leftInput.value;
  leftInput.value = rightInput.value;
  rightInput.value = inputLeftText;
});

//TODO:==============================================
/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/

const buttonEl3 = document.querySelector(`#passwordButton`);
const inputEl3 = document.querySelector(`#passwordInput`);

buttonEl3.addEventListener(`click`, () => {
  if (buttonEl3.textContent === "Hide") {
    inputEl3.setAttribute(`type`, `password`);
    buttonEl3.textContent = "Show";
  } else {
    inputEl3.setAttribute(`type`, `text`);
    buttonEl3.textContent = "Hide";
  }
});

//TODO:==============================================
/*
Завдання 4
Кнопка "Зменшити" робить квадрат менше на 10 пікселів, допопка "Збільшити" - більше на 10 пікселів.
*/
const buttonElDecr4 = document.querySelector(`#decrease`);
const buttonElIncr4 = document.querySelector(`#increase`);
const boxEl = document.querySelector(`#box`);

buttonElDecr4.addEventListener("click", () => {
  const currentWidth = boxEl.offsetWidth;
  const currentHeight = boxEl.offsetHeight;

  boxEl.style.width = `${currentWidth - 10}px`;
  boxEl.style.height = `${currentHeight - 10}px`;
});

buttonElIncr4.addEventListener("click", () => {
  const currentWidth = boxEl.offsetWidth;
  const currentHeight = boxEl.offsetHeight;

  boxEl.style.width = `${currentWidth + 10}px`;
  boxEl.style.height = `${currentHeight + 10}px`;
});

//TODO:==============================================
/*
Завдання 5
Додайде слухач кліку і визначте, коли клік відбувається
всередині елемента з id "place" і коли клік припадає поза зоною елемента
https://developer.mozilla.org/en-US/docs/Web/API/Node/contains
*/

const divEl = document.querySelector("#place");

document.body.addEventListener("click", (evt) => {
  if (evt.target === divEl) {
    console.log("Натиснули на дів!");
  } else {
    console.log("Не дів!");
  }
});

//TODO:==============================================
/*
Завдання 6
Натиснувши кнопку "Подвоювати", збільшити значення
у кожному елементі списку у 2 рази
*/

//TODO:==============================================
/*
Завдання 7
При натисканні на коло він повинен слідувати за курсором.
При повторному натисканні він стає в початкове положення.
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY
*/

//TODO:==============================================
/*
Завдання 8
При натисканні на кожну з кнопок підсумовуються значення з data-атрибутів.
За натисканням на кнопку "Вивести результат" виводиться сума значення, а також статистика з
інформацією про те, яка кнопка була натиснута скільки разів.
*/

//TODO:==============================================
/*
Завдання 9
Видалити зі списку елементи, які позначені.
*/

//TODO:==============================================
/*
Завдання 10
Наведено список студентів. Зробіть можливість сортування списку на ім'я та на прізвище.
*/

//TODO:==============================================
/*
Завдання 11
Наведено список персонажів. Зробіть фільтр на ім'я/прізвище.
*/

//TODO:==============================================
/*
Завдання 12
Клік по кнопці замінює символ першого поля введення
символ з другого поля введення в усьому тексті.
Якщо одне з полів порожнє, викликай alert із проханням заповнити їх.
*/

//TODO:==============================================
/*
Завдання 13
Коло має зникати при наведенні на нього.
При цьому позиція сусідніх кіл має залишатися незмінною.
*/
