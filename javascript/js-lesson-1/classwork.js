// 1. Створити масив з 10 чисел(можна використовувати Math.random Та Math.floor).Скласти результат цих чисел в змінній result.

console.log(' ===== classwork tasks: ===== ');

const array1 = Array.from(Array(10)).map(x => Math.floor(Math.random() * 50));
console.log(array1);
result = array1.reduce(((sum, el) => sum + el), 0);
console.log(result);

// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр;

const book1 = {
  name: 'Harry Potter',
  pages: 880,
  genre: 'Fantasy',
};
// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори;

const book3 = {
  name: 'Harry Potter',
  pages: 880,
  genre: 'Fantasy',
  author: 'Joanne Rowling',
};

// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт;

const bookArr = [{
  name: 'Harry Potter part1',
  pages: 880,
  genre: 'Fantasy',
  author: 'Joanne Rowling',
}, {
  name: 'Harry Potter part2',
  pages: 935,
  genre: 'Fantasy',
  author: 'Joanne Rowling',
}, {
  name: 'Harry Potter part3',
  pages: 980,
  genre: 'Fantasy',
  author: 'Joanne Rowling',
}];

console.log(bookArr[0]);
console.log(bookArr[1]);
console.log(bookArr[2]);

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см(змінна width).
//    Значення площі зберігати в змінній s.

const height = 23;
const width = 10;
const s = (h, w) => h * w;
// const s = height * width;
console.log(s(height, width));

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
//         результат помістіть у змінну v.

// v = π*R2*h

const heightC = 10;
const dC = 4;
const v = (r, h) => Math.PI * (r ** 2) * h;
console.log(v(heightC, dC));

// 7. У прямокутного трикутника дві сторони n(зі значенням 3) та m(зі значенням 4).
//        Знайдіть гіпотенузу k за теоремою Піфагора(потрібно використовувати функцію Math.pow(число, ступінь) або оператор зведення в ступінь **).Math.sqrt;

const n = 3;
const m = 4;
const k = (n, m) => Math.sqrt(Math.pow(n, 2) + Math.pow(m, 2));
console.log(k(n, m));