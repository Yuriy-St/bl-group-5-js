// Функція startTimer повинна логувати кожен елемент масиву один раз на секунду.
// Коли черга дійде до останнього елемента масиву, продовжити логувати у зворотному порядку
// поки не дійде до першого елемента, потім зупинити процес.

const array = ["a", "b", "c", "d", "e", "f"];

function startTimer(array) {
  let i = 0;
  let isForward = true;
  const maxIndex = array.length - 1;
  const interval = setInterval(() => {
    console.log(array[i]);

    if (isForward) {
      i += 1;
    } else {
      i -= 1;
    }

    if (!isForward && i < 0) {
      clearInterval(interval);
      return;
    }

    if (maxIndex === i) {
      isForward = false;
    }
  }, 1000);
}

startTimer(array);
