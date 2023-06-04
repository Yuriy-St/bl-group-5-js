//Напишіть функцію, яка виводитиме числа від min до max із затримкою в 1 секунду між кожним значенням
function printNumbers(min, max) {
    let currentNumber = min;
    const intervalId = setInterval(() => {

        console.log(currentNumber);
        if (currentNumber === max) {
            clearInterval(intervalId)
        }
        currentNumber++;
    }, 1000)
}
printNumbers(1, 10);