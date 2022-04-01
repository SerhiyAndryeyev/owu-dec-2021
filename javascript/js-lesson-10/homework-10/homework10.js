// ----------------- homework-10 --------------------
//
// 1)- Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// 2)- Создайте кнопку, при клике на которую, она будет скрывать сама себя.

document.getElementById('button').onclick = function (e) {
  document.getElementById('text').hidden = true;
  document.getElementById('button').hidden = true;
};


// 3)- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

const button2 = document.getElementById('button2');
const input2 = document.getElementById('age');

button2.onclick = function (e) {
  if (+input2.value >= 18) {
    alert('Your age is suitable');
  } else {
    alert('Your age is NOT suitable');
  }
};

// 4)- Создайте меню, которое раскрывается/сворачивается при клике

document.getElementById('menu').onclick = function (e) {
  document.getElementById('menu').classList.toggle('open');
};

// 5)- Создать список комментариев, пример объекта коментария -
// { title: 'lorem', body: 'lorem ipsum dolo sit ameti' }.;
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.




const flagUApart1 = String.fromCodePoint(0x1F1FA);
const flagUApart2 = String.fromCodePoint(0x1F1E6);

console.log('Слава Україні!!! ', flagUApart1 + flagUApart2);