// ----------------- additional-6 --------------------

// 1)- Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

console.log(' ----- Task-1 ------');

function cutString(str, n) {
  let arr = [];
  for (let i = 0; i < str.length; i += n) {
    arr.push(str.slice(i, n + i));
  }
  return arr;
};

console.log('наслаждение' + ' ==> ', cutString('наслаждение', 3));

// 2)- Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.

console.log(' ----- Task-2 ------');

let email1 = 'someemail@gmail.com';
let email2 = 'someeMAIL@gmail.com';
let email3 = 'someeMAIL@i.ua';
let email4 = 'some.email@gmail.com';

function emailValidator(email) {
  let newEmail = email.trim().toLowerCase(); // забираємо верхній регістр, якщо є
  let at = newEmail.indexOf('@'); // визначаємо індекс равликаб якщо він є
  if (at === 0) return false; // відстність даних до равлика
  if (at === -1) return false; // відсутність равлика
  let dot = newEmail.indexOf('.', at); // визначаємо індекс крапки після равлика, якщо є
  if ((at + 2) >= dot) return false; // чи крапка є, та, якщо є чи не далі ніж на два символи від равлика
  return true;
}

console.log(`is ${email3} valid? ==> ${emailValidator(email3)}`);

// 3)- є масив
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

console.log(' ----- Task-3 ------');

let coursesArray = [
  {
    title: 'JavaScript Complex',
    monthDuration: 5,
    hourDuration: 909,
    modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
  },
  {
    title: 'Java Complex',
    monthDuration: 6,
    hourDuration: 909,
    modules: ['html',
      'css',
      'js',
      'mysql',
      'mongodb',
      'angular',
      'aws',
      'docker',
      'git',
      'java core',
      'java advanced']
  },
  {
    title: 'Python Complex',
    monthDuration: 6,
    hourDuration: 909,
    modules: ['html',
      'css',
      'js',
      'mysql',
      'mongodb',
      'angular',
      'aws',
      'docker',
      'python core',
      'python advanced']
  },
  {
    title: 'QA Complex',
    monthDuration: 4,
    hourDuration: 909,
    modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
  },
  {
    title: 'FullStack',
    monthDuration: 7,
    hourDuration: 909,
    modules: ['html',
      'css',
      'js',
      'mysql',
      'mongodb',
      'react',
      'angular',
      'aws',
      'docker',
      'git',
      'node.js',
      'python',
      'java']
  },
  {
    title: 'Frontend',
    monthDuration: 4,
    hourDuration: 909,
    modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
  }
];

coursesArray.sort((a, b) => b.modules.length - a.modules.length);

console.log(coursesArray);

// 4)- Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.

console.log(' ----- Task-4 ------');

let symb4 = "о", str4 = "Астрономия это наука о небесных объектах";

function count(str, stringsearch) {
  let count = 0;
  let length = str.length;
  for (let i = 0; i < length; i++) {
    let newI = str.indexOf(stringsearch, i);
    if (newI === -1) return `'${stringsearch}' in '${str}' is found ${count} times`;
    count++;
    i = newI;
  }
  return `'${stringsearch}' in '${str}' is found ${count} times`;
};

console.log(count(str4, symb4)); // 5

// 5)- Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
// 'Сила тяжести приложена к центру'

console.log(' ----- Task-5 ------');

let str5 = "Сила тяжести приложена к центру масс тела";

function cutString(str, n) {
  return str.split(" ", n).join(" ");
}

console.log(cutString(str5, 5));

console.log(' ----- END ------');