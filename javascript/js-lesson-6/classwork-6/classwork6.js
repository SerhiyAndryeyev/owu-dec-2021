// ----------------- classwork-6 --------------------

// 1)- Дано список імен:
// Написати функцію, яка приймає не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

console.log(' ----- Task-1 ------');

let n1 = 'Harry..Potter';
let n2 = 'Ron---Whisley';
let n3 = 'Hermione__Granger';

function clearName(str, smb) {
  let newArr = [];
  str.split(smb).map(el => el ? newArr.push(el) : el);
  return newArr.join(' ');
}

console.log(`${n2} ==> ${clearName(n2, '-')}`);

// 2)- створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

console.log(' ----- Task-2 ------');

function createRandomArr(length, num) {
  return Array.from({ length: length }, () => Math.floor(Math.random() * num));
}

console.log(`${createRandomArr(10, 100)}`);

// 3)- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

console.log(' ----- Task-3 ------');

let arr3 = createRandomArr(12, 20);

console.log(`sorted array ==> ${arr3.sort((a, b) => a - b)}`);


// 4)- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

console.log(' ----- Task-4 ------');

let arr4 = createRandomArr(15, 30);

console.log(`${arr4} ==> ${arr4.filter(el => !(el % 2))} `);

// 5)- створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

console.log(' ----- Task-5 ------');

let arr5 = createRandomArr(10, 10);

console.log(`${arr5} ==> ${arr5.map(el => el.toString())} `);

// 6)- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

console.log(' ----- Task-6 ------');

let nums = [11, 21, 3];

function sortNums(arr, direction) {
  if (direction === 'ascending') arr.sort((a, b) => a - b);
  if (direction === 'descending') arr.sort((a, b) => b - a);
  return arr;
}
console.log(`${nums} ==> ${sortNums(nums, 'descending')}`);

// 7)- є масив
//  -- відсортувати його за спаданням за monthDuration

console.log(' ----- Task-7 ------');

let coursesAndDurationArray = [
  { title: 'JavaScript Complex', monthDuration: 5 },
  { title: 'Java Complex', monthDuration: 6 },
  { title: 'Python Complex', monthDuration: 6 },
  { title: 'QA Complex', monthDuration: 4 },
  { title: 'FullStack', monthDuration: 7 },
  { title: 'Frontend', monthDuration: 4 }
];

coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);

console.log(coursesAndDurationArray);

// 8)-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

console.log(' ----- Task-8 ------');

let coursesArray2 = coursesAndDurationArray.filter(el => el.monthDuration > 5);

console.log(coursesArray2);

console.log(' ----- END ------');