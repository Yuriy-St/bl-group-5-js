import users from "./data.js";

//1
// Отримати масив імен всіх користувачів (поле name).
// console.log(getUserNames(usersData)) - [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

//2
// Отримати масив об'єктів користувачів за кольором очей (поле eyeColor).
// console.log(getUsersWithEyeColor(users, 'blue')); - // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]

//3
// Отримати загальну суму балансу (поле balance) всіх користувачів.
// console.log(calculateTotalBalance(users)); // 20916

// function getUserNames(usersData) {
//   return usersData.map((user) => user.name);
// }

// console.log(getUserNames(users));

// function getUsersWithEyeColor(users, color) {
//   return users.filter((user) => color === user.eyeColor);
// }

// console.log(getUsersWithEyeColor(users, "blue"));

// function calculateTotalBalance(users) {
//   return users.reduce((acc, user) => {
//     return user.balance + acc;
//   }, 0);
// }

// console.log(calculateTotalBalance(users));
