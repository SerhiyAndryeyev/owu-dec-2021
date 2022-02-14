// ----------------- homework-5 --------------------

// Всі функції повинні бути описані стрілочним типом!!!!

// 1)- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
console.log(' ----- Task-1 ------');
document.write('<div class="task"><em> ----- Task-1:</em></div>');

const rectSquare = (a, b) => a * b;

console.log(rectSquare(3, 4));
document.write(`<div>Площа прямокутника = ${rectSquare(3, 4)}</div>`);

// 2)- створити функцію яка обчислює та повертає площу кола з радіусом r(S= πR**2)
console.log(' ----- Task-2 ------');
document.write('<div class="task"><em> ----- Task-2:</em></div>');

const circleSquare = r => Math.PI * (r ** 2);

console.log(circleSquare(5));
document.write(`<div>Площа кола = ${circleSquare(5)}</div>`);

// 3)- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r(S= 2πRh)
console.log(' ----- Task-3 ------');
document.write('<div class="task"><em> ----- Task-3:</em></div>');

const cilindrSquare = (r, h) => 2 * Math.PI * r * h;

console.log(cilindrSquare(2, 7));
document.write(`<div>Площа циліндра = ${cilindrSquare(2, 7)}</div>`);

// 4)- створити функцію яка приймає масив та виводить кожен його елемент
console.log(' ----- Task-4 ------');
document.write('<div class="task"><em> ----- Task-4:</em></div>');

const arr4 = [25, 'j', 'l', false, 'Hello guys!!!', 5, 'a', 'b', true, '7'];

const showArr = arr => {
  for (const i of arr) {
    document.write(`<div>${i}</div>`);
    console.log(i);
  }
};
showArr(arr4);

// 5)- створити функцію яка створює параграф з текстом.Текст задати через аргумент
console.log(' ----- Task-5 ------');
document.write('<div class="task"><em> ----- Task-5:</em></div>');

let par5 = ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam pariatur optio consequuntur molestias quas.';

const createP = text => document.write(`<p>${text}</p>`);

createP(par5);

// 6)- створити функцію яка створює ul з трьома елементами li.Текст li задати через аргумент всім однаковий
console.log(' ----- Task-6 ------');
document.write('<div class="task"><em> ----- Task-6:</em></div>');

const createLi = text => {
  document.write(`<ul>`);
  document.write(`<li>${text}</li><li>${text}</li><li>${text}</li>`);
  document.write(`</ul>`);
};

createLi('text for li');

// 7)- створити функцію яка створює ul з трьома елементами li.Текст li задати через аргумент всім однаковий.Кількість li визначається другим аргументом, який є числовим(тут використовувати цикл)
console.log(' ----- Task-7 ------');
document.write('<div class="task"><em> ----- Task-7:</em></div>');

// const createLi2 = (text, num) => {
//   document.write(`<ul>`);
//   for (let i = 1; i <= num; i++) {
//     document.write(`<li>${text}</li>`);
//   }
//   document.write(`</ul>`);
// };

// createLi2('text for li', 5);

((text, num) => {
  document.write(`<ul>`);
  for (let i = 1; i <= num; i++) {
    document.write(`<li>${text}</li>`);
  }
  document.write(`</ul>`);
})('text for li', 5);

// 8)- створити функцію яка приймає масив примітивних елементів(числа, стрінги, булеві), та будує для них список
console.log(' ----- Task-8 ------');
document.write('<div class="task"><em> ----- Task-8:</em></div>');

const createList = arr => {
  document.write(`<ul>`);
  for (const i of arr) {
    document.write(`<li>${i}</li>`);
  }
  document.write(`</ul>`);
};

createList(arr4);

// 9)- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.;
console.log(' ----- Task-9 ------');
document.write('<div class="task"><em> ----- Task-9:</em></div>');

let users22 = [
  { id: 1, name: 'Serhiy', age: 46 },
  { id: 2, name: 'Vasya', age: 35 },
  { id: 3, name: 'Volodya', age: 50 },
  { id: 4, name: 'Petya', age: 33 },
  { id: 5, name: 'Katya', age: 25 },
  { id: 6, name: 'Olya', age: 28 },
  { id: 7, name: 'Tetyana', age: 58 },
  { id: 8, name: 'Max', age: 30 },
  { id: 9, name: 'Anya', age: 21 },
  { id: 10, name: 'Oleg', age: 28 },
  { id: 11, name: 'Andriy', age: 49 },
  { id: 12, name: 'Masha', age: 38 },
  { id: 13, name: 'Olya', age: 57 },
  { id: 14, name: 'Mihey', age: 61 },
  { id: 15, name: 'Marichka', age: 41 }
];

const createListOfObj = arr => {
  for (const obj of arr) {
    document.write(`<div>`);
    document.write(`User ${obj.name} with ID# ${obj.id} is ${obj.age} years old.`);
    document.write(`</div>`);
  }
};

createListOfObj(users22);

console.log(' ----- END ------');
document.write('<div class="task"><em> ----- THE END ----- </em></div>');

