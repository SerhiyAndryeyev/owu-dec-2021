// ----------------- homework-6 --------------------

// 1) - Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'

console.log(' ----- Task-1 ------');

let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';

console.log(`length of '${str1}' is: ${str1.length}`);
console.log(`length of '${str2}' is: ${str2.length}`);
console.log(`length of '${str3}' is: ${str3.length}`);

// 2) - Перевести до великого регістру наступні стрінгові значення;
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log(' ----- Task-2 ------');

console.log(`'${str1}' ==> ${str1.toUpperCase()}`);
console.log(`'${str2}' ==> ${str2.toUpperCase()}`);
console.log(`'${str3}' ==> ${str3.toUpperCase()}`);

//  3) - Перевести до нижнього регістру настипні стрінгові значення;
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

console.log(' ----- Task-3 ------');

let str1b = str1.toUpperCase();
let str2b = str2.toUpperCase();
let str3b = str3.toUpperCase();

console.log(`'${str1b}' ==> ${str1b.toLowerCase()}`);
console.log(`'${str2b}' ==> ${str2b.toLowerCase()}`);
console.log(`'${str3b}' ==> ${str3b.toLowerCase()}`);

// 4) - Є "брудна" стрінга let str = ' dirty string   '.Почистити її від зайвих пробілів.
console.log(' ----- Task-4 ------');

let str4 = ' dirty string   ';
console.log(`'${str4}' ==> '${str4.trim()}'`);

// 5) - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.;
// ['Каждый', 'охотник', 'желает', 'знать']
console.log(' ----- Task-5 ------');

let str5 = 'Каждый охотник желает знать';
let arr5 = stringToarray(str5);

function stringToarray(str) {
  return str.split(" ");
};

console.log(`${str5}' ==> ${arr5}`);

// 6) - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.;
// document.writeln(delete_characters(str, 7)); // Каждый
console.log(' ----- Task-6 ------');

let str6 = 'Каждый охотник желает знать';

const delete_characters = (str, length) => str.substr(0, length);

console.log(`'${str6}' ==> '${delete_characters(str6, 7)}'`);

// 7) - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире(-) між словами.При цьому всі символи рядка необхідно перевести у верхній регістр.;
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
console.log(' ----- Task-7 ------');

let str7 = "HTML JavaScript PHP";

function insert_dash(str) {
  return (str.toUpperCase()
    .split(' ')
    .join('-'));
}
console.log(`'${str7}' ==> '${insert_dash(str7)}'`);

// 8) - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
console.log(' ----- Task-8 ------');

let str8 = 'каждый охотник желает знать';

const firstLetter = str => str[0].toUpperCase() + str.slice(1);

console.log(`'${str8}' ==> '${firstLetter(str8)}'`);

// 9) - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
console.log(' ----- Task-9 ------');

function capitalize(str) {
  return str.split(' ').map(el => firstLetter(el)).join(" ");
}

console.log(`'${str8}' ==> '${capitalize(str8)}'`);

console.log(' ----- END ------');