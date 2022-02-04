// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = Math.floor(Math.random() * 60);
console.log(time);
if (time >= 0 && time <= 15) {
  console.log('it is first quarter');
}
if (time > 15 && time <= 30) {
  console.log('it is second quarter');
}
if (time > 30 && time <= 45) {
  console.log('it is third quarter');
}
if (time > 45 && time < 60) {
  console.log('it is fourth quarter');
}

//  - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = Math.ceil(Math.random() * 31);
console.log(day);
if (day >= 1 && day <= 10) {
  console.log('it is first decade');
}
if (day > 10 && day <= 20) {
  console.log('it is second decade');
}
if (day > 20 && day <= 31) {
  console.log('it is third decade');
}

// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
// Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

const test = true; //false
if (test) {
  console.log('Вірно');
} else {
  console.log('Неправильно');
}

test ? console.log('Вірно') : console.log('Неправильно');

// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let a = -3; // 1, 0,-3

a ? console.log('Вірно') : console.log('Невірно');

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.

let weekDay = prompt('what day of week?');

switch (+weekDay) {
  case 1:
    document.write('<div>' + "Your scheduele for Monday" + '</div>');
    break;
  case 2:
    document.write('<div>' + "Your scheduele for Tuesday" + '</div>');
    break;
  case 3:
    document.write('<div>' + "Your scheduele for Wensday" + '</div>');
    break;
  case 4:
    document.write('<div>' + "Your scheduele for Thusday" + '</div>');
    break;
  case 5:
    document.write('<div>' + "Your scheduele for Friday" + '</div>');
    break;
  case 6:
    document.write('<div>' + "Your scheduele for Saturday" + '</div>');
    break;
  case 7:
    document.write('<div>' + "Your scheduele for Sunday" + '</div>');
    break;

  default:
    document.write('<div>' + "Please insert correct information" + '</div>');
}

// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

let whatYear = +prompt('What year?');

whatYear % 4 ? document.write('<div>' + "Високосний" + '</div>') : document.write('<div>' + "ні" + '</div>');

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

let jsName = prompt('Яка «офіційна» назва JavaScript?');

jsName === 'ECMAScript' ? document.write('<div>' + "Правильно!" + '</div>') : document.write('<div>' + "Не знаєте? ECMAScript!" + '</div>');