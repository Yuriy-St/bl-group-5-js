//Напиши функцію findSmallerNumber(numbers), яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив

const numbers = [2, 5, 35, 56, 12, 24, 7, 1, 80, 3];

function findSmallerNumber(numbers) {
    if (Array.isArray(numbers)) {
        console.log("Ok")
    } else {
        return console.log("No");
    }
    let minVal = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        if (minVal >= numbers[i]) {
            minVal = numbers[i];
        } 
    }
    return minVal;
};
console.log(findSmallerNumber(numbers))


function findSmallerNumber2(numbers) {
    console.log(Math.min(...numbers));
};

const minValue = findSmallerNumber2(numbers);