// Наступна функція повертає true, якщо параметр age більше 18.
// В іншому випадку вона запитує підтвердження через confirm і повертає його результат:

const age = prompt('Enter your age')

function isAdult() {
    if (age >= 18) {
        return true;
    } else {
        const ageAccept = confirm('Підтвердіть свій вік')
        return ageAccept;
    }
}

console.log(isAdult());