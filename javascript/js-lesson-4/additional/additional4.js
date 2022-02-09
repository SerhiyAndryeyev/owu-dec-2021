// ----------------- additional-4 --------------------

// 1. Створити пустий масив та:
// a.заповнити його 50 рандомними парними числами за допомоги циклу.

console.log(' ----- Task-1.a. ------');
document.write('<div class="task"><em> ----- Task-1.a.:</em></div>');

function filArr() {
  let arr4 = [];

  for (let i = 0; i < 50; i++) {
    arr4[i] = 2 * (Math.floor(Math.random() * 10));
  }
  return arr4;
}
console.log(filArr());
document.write(`<div>Масив парних чисел: ${filArr()}</div>`);

// b.заповнити його 50 непарними числами за допомоги циклу.

console.log(' ----- Task-1.b. ------');
document.write('<div class="task"><em> ----- Task-1.b.:</em></div>');

function filArr2() {
  let arr4 = [];

  for (let i = 0; i < 50; i++) {
    arr4[i] = (i % 2) ? i : i + 1;
  }
  return arr4;
}
console.log(filArr2());
document.write(`<div>Масив НЕпарних чисел: ${filArr2()}</div>`);

// c.Заповнити масив 20ма рандомними числами. (Google: Generate random number JS);

console.log(' ----- Task-1.c. ------');
document.write('<div class="task"><em> ----- Task-1.c.:</em></div>');

function filArr3() {
  let arr4 = [];

  for (let i = 0; i < 20; i++) {
    arr4[i] = Math.floor(Math.random() * 50);
  }
  return arr4;
}
console.log(filArr3());
document.write(`<div>Масив на 20 рандомних чисел: ${filArr3()}</div>`);

// d.Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732(Google: Generate random number JS);

console.log(' ----- Task-1.d. ------');
document.write('<div class="task"><em> ----- Task-1.d.:</em></div>');

function filArr4() {
  let arr4 = [];

  for (let i = 0; i < 20; i++) {
    arr4[i] = (Math.floor(Math.random() * 724) + 8);
  }
  return arr4;
}
console.log(filArr4());
document.write(`<div>Масив на 20 рандомних чисел(від 8 до 732): ${filArr4()}</div>`);

// 2. Вивести за допомогою console.log кожен третій елемен;

console.log(' ----- Task-2 ------');

let arr42 = filArr3();

console.log('Масив: ', arr42);

function show3(arr) {
  for (let i = 2; i < arr.length; i += 3) {
    console.log(arr[i]);
  }
}
show3(arr42);

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

console.log(' ----- Task-3 ------');

console.log('Масив: ', arr42);

function show32(arr) {
  for (let i = 2; i < arr.length; i += 3) {
    if (arr[i] % 2 === 0) console.log(arr[i]);
  }
}
show32(arr42);

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив;

console.log(' ----- Task-4 ------');

console.log('Масив: ', arr42);

function show32b(arr) {
  let newArr = [];
  for (let i = 2; i < arr.length; i += 3) {
    if (arr[i] % 2 === 0) {
      console.log(arr[i]);
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

document.write(`<div>Новий масив третіх парних чисел: ${show32b(arr42)}</div>`);

// 5. Вивести кожен елемент масиву, сусід справа якого є парним;
// EXAMPLE: [1, 2, 3, 5, 7, 9, 56, 8, 67] -> Має бути виведено 1, 9, 56;

console.log(' ----- Task-5 ------');
document.write('<div class="task"><em> ----- Task-5:</em></div>');

console.log('Масив: ', arr42);

function show33(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] % 2 === 0) console.log(arr[i]);
  }
}
show33(arr42);

// 6. Є масив з числами[100, 250, 50, 168, 120, 345, 188], Які характеризують вартість окремої покупки.Обрахувати середній чек.

console.log(' ----- Task-6 ------');
document.write('<div class="task"><em> ----- Task-6:</em></div>');

const arr6 = [100, 250, 50, 168, 120, 345, 188];

function findAvrg(arr) {
  let avr = 0;

  for (let i = 0; i < arr.length; i++) {
    avr += arr[i];
  }
  return Math.round(avr / arr.length);
}
console.log(findAvrg(arr6));
document.write(`<div>Середній чек: ${findAvrg(arr6)}</div>`);

//  7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

console.log(' ----- Task-7 ------');
document.write('<div class="task"><em> ----- Task-7:</em></div>');

let arr43 = filArr3();
console.log('Масив: ', arr43);

function create5Arr(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * 5;
    newArr[i] = arr[i];
  }
  // або простіший варіант вкінці просто newArr = [...arr];
  return newArr;
}
console.log(create5Arr(arr43));
document.write(`<div>Новий масив: ${create5Arr(arr43)}</div>`);

//  8. Створити масив з будь якими значеннями(стрінги, числа, і тд...).пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

console.log(' ----- Task-8 ------');
document.write('<div class="task"><em> ----- Task-8:</em></div>');

const arr44 = [25, 'j', 'l', false, 'Hello guys!!!', 5, 'a', 'b', true, '7', 1];

function findNumber(arr) {
  let arr4 = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') arr4.push(arr[i]);
  }
  return arr4;
}
console.log(findNumber(arr44));
document.write(`<div>Новий масив з числами: ${findNumber(arr44)}</div>`);

//  9.
// - Дано 2 масиви з рівною кількістю об'єктів.;
// Масиви:

let usersWithId = [
  { id: 1, name: 'vasya', age: 31, status: false },
  { id: 2, name: 'petya', age: 30, status: true },
  { id: 3, name: 'kolya', age: 29, status: true },
  { id: 4, name: 'olya', age: 28, status: false }
];

let citiesWithId = [
  { user_id: 3, country: 'USA', city: 'Portland' },
  { user_id: 1, country: 'Ukraine', city: 'Ternopil' },
  { user_id: 2, country: 'Poland', city: 'Krakow' },
  { user_id: 4, country: 'USA', city: 'Miami' }
];


// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id".
// Записати цей об'єкт в новий масив;
// Example:
// let usersWithCities = [
//   {
//     id: 1, // <===
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {
//       user_id: 1, // <===
//       country: 'Ukraine',
//       city: 'Ternopil'
//     }
//   },
// ]
//

console.log(' ----- Task-9 ------');
document.write('<div class="task"><em> ----- Task-9:</em></div>');



function linkObj(arr1, arr2) {
  let usersWithCities = [];

  for (const i of arr1) {
    for (const j of arr2) {
      if (i.id === j.user_id) {
        // usersWithCities.push(Object.assign(i, j));
        usersWithCities.push({ ...i, ...j }); // або ось так ще краще
      }
    }
  }

  return usersWithCities;
}
console.log(linkObj(usersWithId, citiesWithId));
document.write(`<div>Новий масив з об'єднаними об'єктами в консолі => </div>`);

console.log(' ----- END ------');
document.write('<div class="task"><em> ----- THE END ----- </em></div>');
