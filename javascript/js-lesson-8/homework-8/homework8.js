// ----------------- homework-8 --------------------

// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
// - Напишіть код,  котрий :
// 1)-- отримує текст з параграфа з id "content"
console.log(' ----- Task-1 ------');

const pContent = document.getElementById('content');
console.log(pContent.textContent);

// 2)-- отримує текст з блоку з id "rules"
console.log(' ----- Task-2 ------');

const divRules = document.getElementById('rules');
console.log(divRules.textContent);

// 3)-- замініть текст параграфа з id 'content' на будь-який інший
console.log(' ----- Task-3 ------');

console.log(pContent.textContent = 'ЦЕ БУДЬ ЯКИЙ ІНШИЙ ТЕКСТ');

// 4)-- замініть текст параграфа з id 'rules' на будь-який інший
console.log(' ----- Task-4 ------');

console.log(divRules.textContent = 'ЦЕ ЩЕ ЯКИЙСЬ ІНШИЙ ТЕКСТ');

// 5)-- змініть кожному елементу колір фону на червоний
console.log(' ----- Task-5 ------');

pContent.classList.add('red');
divRules.classList.add('red');

// 6)-- змініть кожному елементу колір тексту на синій
console.log(' ----- Task-6 ------');

pContent.classList.add('blue');
divRules.classList.add('blue');

// 7)-- отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(' ----- Task-7 ------');

console.log(divRules.classList);

// 8)-- поміняти колір тексту у всіх елементів fc_rules на червоний
console.log(' ----- Task-8 ------');

const fcRules = document.getElementsByClassName('fc_rules');

Array.from(fcRules).forEach(el => el.classList.add('red-text'));

console.log(' ----- END ------');
