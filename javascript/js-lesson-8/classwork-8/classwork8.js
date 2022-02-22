// ----------------- classwork-8 --------------------

// Взяти файл template_2.html та працювати в ньому;
// 1) Напишіть код, який :
//  a) додає клас з назвою групи, елементу з ід main_header

const elGroupName = document.getElementById('main_header');
elGroupName.className = 'dec-2021';

//  b) робить шириниу елементу ul 400px

const ul = document.querySelector('ul');
ul.style.width = '400px';
ul.style.backgroundColor = 'orange';

//  c) робить шириниу всіх елементів з класом linkList шириною 50 %

const linkList = document.getElementsByClassName('linkList');
for (const el of linkList) {
  el.style.width = '50%';
  el.style.backgroundColor = 'yellow';
}

//  d) отримує текст який зберігається в елементі з класом listElement2

const textListElement2 = document.getElementsByClassName('listElement2')[0].textContent;
console.log('text from ListElement2 ==> ', textListElement2);

//  e) отримує всі елементи li та змінює ім колір фону на сірий

const allLi = Array.from(document.getElementsByTagName('li'));
allLi.map(el => el.style.backgroundColor = 'gray');

//  f) отримує всі елементи 'a' та додає їм клас anchor

const allA = Array.from(document.getElementsByTagName('a'));
allA.map(el => el.className = 'anchor');

//  g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

for (const a of allA) {
  if (a.textContent === 'link3') { a.style.fontSize = '40px'; }
}

//  h) отримує всі елементи 'a' та додає їм клас element_XXX.Де XXX - текстовий контент елементу a

for (const a of allA) {
  a.className = `element_${a.textContent}`;
}

//  i) отримує всі елементи 'sub-header' та змінює колір фону.Фон отримати з prompt()

const subHeader = Array.from(document.getElementsByClassName("sub-header"));
const bgColor = prompt("Write back-ground color please", 'gold');
subHeader.map(el => el.style.backgroundColor = bgColor);

//  j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment.Колір отримати з prompt()

const textColor = prompt("Write text color please", 'green');
for (const el of subHeader) {
  if (el.textContent === 'content 2 segment') {
    el.style.color = textColor;
  }
}

//  k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний.Текст отримати з prompt()

const text = prompt("Write some text please", 'bla-bla-bla');
document.querySelector('.content_1').textContent = text;

//  l) отримати елементи p та змінити їм padding на 20px

const allP = Array.from(document.getElementsByTagName("p"));
allP.map(el => el.style.padding = '20px');

//  m) отримати елементи з класом text2 та змінити їм текст на назву групи(mon - year.Пример sep - 2021)

const text2 = Array.from(document.getElementsByClassName("text2"));
text2.map(el => el.textContent = 'dec - 2021');

console.log(' ----- END ------');
