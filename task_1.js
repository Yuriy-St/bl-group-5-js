//1. Використовуючи конструкцію if... else,
//напишіть код, який буде запитувати:
//"Яке офіційне ім'я JavaScript?"
//Якщо користувач вводить "ECMAScript",
//то показати через сповіщення: "Вірно!"
//у протилежному випадку показати:"Не знаєте? ECMAScript!"

const res = prompt("Яке офіційне ім'я JavaScript?");

if (res.toLowerCase() === "ECMAScript".toLowerCase()) {
  alert("Вірно");
} else {
  alert("Не знаєте? ECMAScript!");
}
