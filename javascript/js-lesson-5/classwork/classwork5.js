// ----------------- classwork-4 --------------------

// Всі функції повинні бути описані стрілочним типом!!!!

// 1) - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
console.log(' ----- Task-1 ------');
document.write('<div class="task"><em> ----- Task-1:</em></div>');

const findMin = (...args) => {
  let arguments = [...args];
  let min = arguments[0];
  for (const argument of arguments) {
    if (argument < min) min = argument;
  }
  return min;
};

console.log(findMin(5, 7, 2));
document.write(`<div>Найменше число це: ${findMin(5, 7, 2)}</div>`);

// 2) - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
console.log(' ----- Task-2 ------');
document.write('<div class="task"><em> ----- Task-2:</em></div>');

const findMax = (...args) => {
  let arguments = [...args];
  let max = arguments[0];
  for (const argument of arguments) {
    if (argument > max) max = argument;
  }
  return max;
};

console.log(findMax(7, 1, 12));
document.write(`<div>Найбільше число:  ${findMax(7, 1, 12)}</div>`);

// 3) - створити функцію яка повертає найбільше число з масиву
console.log(' ----- Task-3 ------');
document.write('<div class="task"><em> ----- Task-3:</em></div>');

const arr41 = [9, 11, 1, 15, -3, 27, 764, -14];

const findMaxInArray = arr => {
  let max = arr[0];
  for (const i of arr) {
    if (i > max) max = i;
  }
  return max;
};

console.log(findMaxInArray(arr41));
document.write(`<div>Найбільше число:  ${findMaxInArray(arr41)}</div>`);

// 4) - створити функцію яка повертає найменьше число з масиву
console.log(' ----- Task-4 ------');
document.write('<div class="task"><em> ----- Task-4:</em></div>');

const findMinInArray = arr => {
  let min = arr[0];
  for (const i of arr) {
    if (i < min) min = i;
  }
  return min;
};
console.log(findMinInArray(arr41));
document.write(`<div>Найменше число:  ${findMinInArray(arr41)}</div>`);

// 5) - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад[1, 2, 10] -> 13
console.log(' ----- Task-5 ------');
document.write('<div class="task"><em> ----- Task-5:</em></div>');

const findSumInArray = arr => {
  let sum = 0;
  for (const i of arr) {
    sum += i;
  }
  return sum;
};

console.log(findSumInArray(arr41));
document.write(`<div>Cума елементів масиву:  ${findSumInArray(arr41)}</div>`);

// 6) - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
console.log(' ----- Task-6 ------');
document.write('<div class="task"><em> ----- Task-6:</em></div>');

const findAverageInArray = arr => {
  let avr = 0;
  for (const i of arr) {
    avr += i;
  }
  return avr / arr.length;
};

console.log(findAverageInArray(arr41));
document.write(`<div>Середнє арифметичне: ${findAverageInArray(arr41)}</div>`);

// 7) - створити функцію яка приймає будь - яку кількість чисел, повертає найменьше, а виводить
//найбільше(Math використовувати заборонено);
console.log(' ----- Task-7 ------');
document.write('<div class="task"><em> ----- Task-7:</em></div>');

const findMinAndMax = (...numbers) => {
  let min = Infinity;
  let max = -Infinity;
  for (const i of numbers) {
    if (i > max) max = i;
  }
  for (const i of numbers) {
    if (i < min) min = i;
  }
  document.write(`<div>Найбільше число: ${max}</div>`);
  return min;
};

document.write(`<div>Найменше число: ${findMinAndMax(3, 5, 9, 7, 90, 56)}</div>`);

// 8) - створити функцію яка заповнює масив рандомними числами (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
console.log(' ----- Task-8 ------');
document.write('<div class="task"><em> ----- Task-8:</em></div>');

const filArray = num => {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr[i] = Math.round(Math.random() * 100);
  }
  return arr;
};

console.log(filArray(5));
document.write(`<div>Заповнений масив: ${filArray(5)}</div>`);

// 9)- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.limit - аргумент, який характеризує кінцеве значення діапазону.
console.log(' ----- Task-9 ------');
document.write('<div class="task"><em> ----- Task-9:</em></div>');

const filArray2 = (num, limit) => {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr[i] = Math.round(Math.random() * limit);
  }
  return arr;
};

console.log(filArray2(8, 20));
document.write(`<div>Заповнений масив з limit: ${filArray2(8, 20)}</div>`);

// 10)- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
console.log(' ----- Task-10 ------');
document.write('<div class="task"><em> ----- Task-10:</em></div>');

const reverseArray = arr => {
  let newArr = [];
  for (let i = arr.length - 1, j = 0; i >= 0; i--, j++) {
    newArr[j] = arr[i];
  }
  return newArr;
};

document.write(`<div>Вхідний масив: ${arr41}</div>`);
document.write(`<div>Зворотній масив: ${reverseArray(arr41)}</div>`);


console.log(' ----- END ------');
document.write('<div class="task"><em> ----- THE END ----- </em></div>');


