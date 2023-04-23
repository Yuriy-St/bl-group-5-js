// Додати метод getinfo в об'єкт user, який повертатиме інфу про користувача у форматі
// Name: Peter. Surname: Parker. Age: 22. Position: spider-man.

const user = {
  name: 'Peter',
  surname: 'Parker',
  age: 22,
  position: 'spider-man',
  getinfo: function () {
    return `Name: ${ this.name }. Surname: ${ this.surname }. Age: ${ this.age }. Position: ${this.position}.`
  }
}

console.log(user.getinfo());

const user2 = {
  name: "Batman",
  surname: "Hz",
  age: 36,
  position: "batman",


};