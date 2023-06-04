// Використовуй prompt та повертай значення звідти.
// Створи функцію, усередині якої буде проміс.
// Якщо значення не є числом, відхиляй проміс та повертай "error".
// Якщо значення парне, вирішуй проміс та повертай "even" через 1 секунду.
// Якщо значення не парне, вирішуй проміс та повертай "odd" через 2 секунди.

const value = prompt('Введіть Ваше значення');

function checkValue(value) {
	return new Promise((resolve, reject) => {
		if (isNaN(value)) {
			reject('error');
		}

		if (value % 2 === 0) {
			setTimeout(() => {
				resolve('even')
			}, 1000);
		}

		setTimeout(() => {
			resolve('odd');
		}, 2000)
	})
}

checkValue(value)
	.then(res => {
		console.log(res);
	})
	.catch(e => {
		console.error(e);
})
