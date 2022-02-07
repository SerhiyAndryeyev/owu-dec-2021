// створити масив з:
// 1)  з 5 числових значень

const arr1 = [1, 1, 1, 1, 1];

// 2)  з 5 стічкових значень

const arr2 = ['a', 'a', 'a', 'a', 'a'];

// 3)  з 5 значень стрічкового, числового та булевого типу

const arr3 = [5, 'a', 'b', true, '7'];

// та вивести його в консоль;

console.log('Task-3 -----------');
console.log(arr3);

// 4) -Створити пустий масив.Наповнити його будь - якими значеннями звертаючись до конкретного індексу.Вивести в консоль

arr4 = [];

for (let i = 0; i < arr3.length; i++) {
  arr4[i] = arr3[i];
}
console.log('Task-4 -----------');
console.log(arr4);

// 5)  За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

document.write('<div class="task"><em> ----- Task-5:<em></div>');

for (let i = 0; i < 10; i++) {
  document.write(`<div>what is ${i + 10}</div>`);
}

// 6)  За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

document.write('<div class="task"><em> ----- Task-6:<em></div>');

for (let i = 0; i < 10; i++) {
  document.write(`<div>index is ${i}</div>`);
}

//  7) За допомогою циклу while вивести в документ 20 блоків h2 c довільним текстом всередині.

document.write('<div class="task"><em> ----- Task-7:<em></div>');

let i = 1;
while (i <= 20) {
  document.write(`<h2>header h2 #${i}</h2>`);
  i++;
}

// 8)  - За допомогою циклу while вивести в документ 20 блоків h2 c довільним текстом і індексом всередині.

document.write('<div class="task"><em> ----- Task-8:<em></div>');

i = 1;
while (i <= 20) {
  document.write(`<h2>header h2 #${i} with index ${i}</h2>`);
  i++;
}

// 9) - Створити масив з 10 числових елементів.Вивести в консоль всі його елементи в циклі.

const arr9 = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10));

console.log('Task-9 -----------');
for (let i = 0; i < arr9.length; i++) {
  console.log(arr9[i]);
}

// 10) - Створити масив з 10 строкрових елементів.Вивести в консоль всі його елементи в циклі.

console.log('Task-10 -----------');

const letters = 'abcdefghijklmnopqrstuvwxyz';
const arr10 = letters.split('', 10);
console.log(arr10);


for (let i = 0; i < arr10.length; i++) {
  console.log(arr10[i]);
}

// 11) - Створити масив з 10 елементів будь - якого типу.Вивести в консоль всі його елементи в циклі

console.log('Task-11 -----------');

const arr11 = [25, 'j', 'l', false, 'Hello guys!!!', 5, 'a', 'b', true, '7'];
console.log(arr11);

for (let i = 0; i < arr11.length; i++) {
  console.log(arr11[i]);
}

// 12) - Створити масив з 10 елементів числового, стірчкового і булевого типу.За допомогою if та typeof вивести тільки булеві елементи

console.log('Task-12 -----------');

const arr12 = [...arr11];
console.log(arr12);

for (let i = 0; i < arr12.length; i++) {
  if (typeof arr12[i] === 'boolean') console.log(arr12[i]);
}

//   13) - Створити масив з 10 елементів числового, стірчкового і булевого типу.За допомогою if та typeof вивести тільки числові елементи

console.log('Task-13 -----------');

const arr13 = [...arr11];
console.log(arr13);

for (let i = 0; i < arr13.length; i++) {
  if (typeof arr13[i] === 'number') console.log(arr13[i]);
}


//   14) - Створити масив з 10 елементів числового, стрічкового і булевого типу.За допомогою if та typeof вивести тільки рядкові елементи

console.log('Task-14 -----------');

const arr14 = [...arr11];
console.log(arr14);

for (let i = 0; i < arr14.length; i++) {
  if (typeof arr14[i] === 'string') console.log(arr14[i]);
}

//    15) - Створити порожній масив.Наповнити його 10 елементами(різними за типами) через звернення до конкретних індексів.Вивести в консоль всі його елементи в циклі.

console.log('Task-15 -----------');

const arr15 = [];

for (let i = 0; i < 10; i++) {
  arr15[i] = arr11[i];
}
console.log(arr15);
for (let i = 0; i < arr15.length; i++) {
  console.log(arr15[i]);
}

// 16) - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

document.write('<div class="task"><em> ----- Task-16:<em></div>');
console.log('Task-16 -----------');

for (let i = 1; i <= 10; i++) {
  document.write(`<div>step # ${i}</div>`);
  console.log(i);
}

// 17) - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

document.write('<div class="task"><em> ----- Task-17:<em></div>');
console.log('Task-17 -----------');

for (let i = 1; i <= 20; i++) { // поставив 20 замість 100 бо вішається браузер
  document.write(`<div>step # ${i}</div>`);
  console.log(i);
}

//  18)  - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

document.write('<div class="task"><em> ----- Task-18:<em></div>');
console.log('Task-18 -----------');

for (let i = 1; i <= 100; i + 2) {
  document.write(`<div>index # ${i}</div>`);
  console.log(i);
}

//  19)  - Створити цикл for на 100 ітерацій.Вивести тільки парні кроки.через console.log + document.write

document.write('<div class="task"><em> ----- Task-19:<em></div>');
console.log('Task-19 -----------');

for (let i = 0; i <= 100; i + 2) {
  document.write(`<div>index # ${i}</div>`);
  console.log(i);
}

//  20) - Створити цикл for на 100 ітерацій.Вивести тільки непарні кроки.через console.log + document.write;

document.write('<div class="task"><em> ----- Task-20:<em></div>');
console.log('Task-20 -----------');

for (let i = 1; i <= 100; i + 2) {
  document.write(`<div>index # ${i}</div>`);
  console.log(i);
}