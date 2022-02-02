// - Створити змінні.Присвоїти кожному з них значення:
//'hello', 'owu', 'com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.

const varArr = ['hello', 'owu', 'com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false];
let [var1, var2, var3, var4, var5, var6, var7, var8, var9, var10, var11, var12, var13] = varArr;

//   Вивести кожну змінну за допомогою: console.log, alert, document.write

console.log(var11);
alert(var11);
document.write('<div>' + var11 + '</div>');

//   - Переприсвоїти кожній змінній з завдання значення на довільне.

[var1, var2, var3, var4, var5, var6, var7, var8, var9, var10, var11, var12, var13] =
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

//   Вивести кожну змінну за допомогою: console.log, alert, document.write

console.log(var13);
alert(var13);
document.write('<div>' + var13 + '</div>');

//   - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.З'єднати їх в одну змінну person. (Не об'єкт)

let [firstName, middleName, lastName] = ['Serhiy', 'Volodymyrovych', 'Andryeyev'];
let person = `${firstName} ${middleName} ${middleName}`;

console.log(person);

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По - Батькові та роками.
//   Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

let name1 = prompt('Name?');
let fathersName = prompt('Fathers name?');
let age = prompt('Your age?');

document.write('<div>' + `Вітаю ${name1} ${fathersName}. Тобі ${age} років` + '</div>');

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
let a = 100; let b = '100'; let c = true;

console.log(`type of a is: ${typeof a},<br/>type of b is: ${typeof b},<br/>type of c is: ${typeof c}`);

// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
// В однакових виразах не використовувати однакові оператори!!!;

//   5 < 6 -> true
//   5 > 6 -> false
//   5 === 6 -> false
//   5 >= 6 -> false
//   10 === 10 -> true
//   10 >= 10 -> true
//   10 !== 10 -> false
//   10 < 10 -> false
//   10 > 10 -> false
//   123 === '123' -> false
//   123 !== '123' -> true

//   - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода ? и почему ?

// let str = "20";
// let a2 = 5;
// document.write(str + a2 + "<br/>"); -> 205 (происходит конкатенация строк)
// document.write(str - a2 + "<br/>"); -> 15 (происходит неявное преобразование к числу)
// document.write(str * "2" + "<br/>"); -> 40 (происходит неявное преобразование к числу)
// document.write(str / 2 + "<br/>"); -> 10 (происходит неявное преобразование к числу)