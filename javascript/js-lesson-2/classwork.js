// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

let a = 5;
let b = 9;

if (a === b) {
  console.log('a = b');
}
if (a > b) {
  console.log('a > b');
}
if (a < b) {
  console.log('a < b');
}


//  - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
// Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

let appart = 25;

if (appart >= 1 && appart <= 20) {
  console.log('це 1й підїзд');
}
if (appart > 20 && appart <= 48) {
  console.log('це 2й підїзд');
}
if (appart > 48 && appart <= 90) {
  console.log('це 13й підїзд');
}

// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО

let number = 10;

number === 10 ? console.log('ВІРНО') : console.log('НЕВІРНО');

// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
// якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 4.
// якщо в змінну записали щось інше, спрацьовує else

let x = 5;

switch (typeof x) {
  case 'number':
    console.log(1);
    break;
  case 'string':
    console.log(2);
    break;
  case 'boolean':
    console.log(3);
    break;
  case 'object':
    console.log(4);
    break;

  default:
    console.log('its something else');
    break;
}

// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
// Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
// Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

let temperature = -2;

temperature >= 10 && temperature <= 22 ? console.log('Ми йдемо вчитися!') : console.log('Ми вчимось онлайн!');

//  - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
// числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .

let gift = 5;

switch (gift) {
  case 1:
    console.log("Ви виграли Авто");
    break;
  case 2:
    console.log("Ви виграли Мото");
    break;
  case 3:
    console.log("Ви виграли Телефон");
    break;
  case 4:
    console.log("Ви виграли Патіфон");
    break;
  case 5:
    console.log("Ви виграли Самогон");
    break;

  default:
    console.log('пощастить наступного разу, можливо ..');
    break;
}