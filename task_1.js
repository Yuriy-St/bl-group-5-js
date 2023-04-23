// Напиши функцію, яка перебирає масив логінів і перевіряє
// чи є ім'я введене в інпут у цьому масиві і у разі, якщо є - виводить повідомлення "Доступ дозволено"

const names = ["Harry", "Ron", "Hermione"];

const res = prompt("Enter the name");
function isNameHere() {
  for (let name of names) {
    if (res === name) {
      console.log("Доступ дозволено");
      return;
    }
  }
}
isNameHere();
