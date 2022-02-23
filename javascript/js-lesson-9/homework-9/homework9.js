// ----------------- homework-9 --------------------
//
// 1)Все робити за допомоги js.
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

const div1 = document.createElement('div');
div1.className = 'wrap, collapse, alpha, beta';
div1.style.backgroundColor = 'yellow';
div1.style.color = 'blue';
div1.style.fontSize = '24px';
div1.textContent = 'some text for div';
document.body.prepend(div1);
const div2 = div1.cloneNode(true);
document.body.prepend(div2);

// 2)-Є масив:
//  -Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
//  -Завдання робити через цикли.

const arr9 = ['Main', 'Products', 'About us', 'Contacts'];

const ul = document.querySelector('.menu');
for (const el of arr9) {
  const li = document.createElement('li');
  li.textContent = el;
  ul.append(li);
}

// 3)- Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let coursesAndDurationArray = [
  { title: 'JavaScript Complex', monthDuration: 5 },
  { title: 'Java Complex', monthDuration: 6 },
  { title: 'Python Complex', monthDuration: 6 },
  { title: 'QA Complex', monthDuration: 4 },
  { title: 'FullStack', monthDuration: 7 },
  { title: 'Frontend', monthDuration: 4 }
];

for (const el of coursesAndDurationArray) {
  let div = document.createElement('div');
  div.textContent = `title: ${el.title}, monthDuration: ${el.monthDuration}`;
  document.body.append(div);
}


// 4) За допомоги скріпта для кожного елементу масиву coursesAndDurationArray зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//    Завдання робити через цикли.

for (const el of coursesAndDurationArray) {
  let div = document.createElement('div');
  div.className = 'item';
  let h1 = document.createElement('h1');
  h1.className = 'heading';
  h1.textContent = `${el.title}`;
  div.append(h1);
  let p = document.createElement('p');
  p.className = 'description';
  p.textContent = `monthDuration: ${el.monthDuration}`;
  div.append(p);
  document.body.append(div);
}

let divEnd = document.createElement('div');
divEnd.textContent = '----- END -----';
document.body.append(divEnd);