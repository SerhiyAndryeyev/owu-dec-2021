// ----------------- super_additional-9 --------------------

let users = [{
  name: 'vasya',
  age: 31,
  status: false,
  address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
}, {
  name: 'petya',
  age: 30,
  status: true,
  address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
}, {
  name: 'kolya',
  age: 29,
  status: true,
  address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
}, {
  name: 'olya',
  age: 28,
  status: false,
  address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
}, {
  name: 'max',
  age: 30,
  status: true,
  address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
}, {
  name: 'anya',
  age: 31,
  status: false,
  address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
}, {
  name: 'oleg',
  age: 28,
  status: false,
  address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
}, {
  name: 'andrey',
  age: 29,
  status: true,
  address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
}, {
  name: 'masha',
  age: 30,
  status: true,
  address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
}, {
  name: 'olya',
  age: 31,
  status: false,
  address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
}, {
  name: 'max',
  age: 31,
  status: true,
  address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
}];

// 1) - З масиву users за допомогою циклу витягнути адреси користувачів і записати(скопіювати) їх в інший порожній масив.

const addresses = [];

for (const user of users) {
  addresses.push(user.address);
}

console.log('Task-1: ', addresses);

// 2) - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.Всі данні в одному блоці.

const divTask2 = document.createElement('div');
divTask2.innerHTML = '<b>Task-2</b>';
document.body.prepend(divTask2);

for (const user of users) {
  const divUser = document.createElement('div');
  for (const key in user) {
    if (typeof user[key] === 'object') {
      const element = user[key];
      divUser.textContent += `${key}: `;
      for (const key in element) {
        divUser.textContent += `${key}: ${element[key]}; `;
      }
    } else {
      divUser.textContent += `${key}: ${user[key]}; `;
    }

  }
  divTask2.append(divUser);
}

// 3) - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам(div > div * 4)

const divTask3 = document.createElement('div');
divTask3.innerHTML = '<b>Task-3</b>';
divTask2.after(divTask3);

for (const user of users) {
  const divUser = document.createElement('div');
  divUser.innerHTML = `<b>Properties of User "${user.name}":</b`;
  for (const key in user) {
    const divUserProp = document.createElement('div');
    if (typeof user[key] === 'object') {
      const element = user[key];
      divUserProp.textContent += `${key}: `;
      for (const key in element) {
        divUserProp.textContent += `${key}: ${element[key]}, `;
      }
    } else {
      divUserProp.textContent += `${key}: ${user[key]}`;
    }
    divUser.append(divUserProp);
  }
  divTask3.append(divUser);
}

// 4) - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам, блок з адресою зробити окремим блоком, з блоками для кожної властивості;

const divTask4 = document.createElement('div');
divTask4.innerHTML = '<b>Task-4</b>';
divTask3.after(divTask4);

for (const user of users) {
  const divUser = document.createElement('div');
  divUser.innerHTML = `<b>Properties of User "${user.name}":</b`;
  for (const key in user) {
    const divUserProp = document.createElement('div');
    if (typeof user[key] === 'object') {
      const element = user[key];
      divUserProp.innerHTML = `<b>${key}:</b>`;
      for (const key in element) {
        const divUserPropIn = document.createElement('div');
        divUserPropIn.textContent = `${key}: ${element[key]}`;
        divUserProp.append(divUserPropIn);
      }
    } else {
      divUserProp.textContent += `${key}: ${user[key]}`;
    }
    divUser.append(divUserProp);
  }
  divTask4.append(divUser);
}

// 5) - є сторінка rules.html.Контентом сторінки є заголовки та параграфи.Заголовки(h2) характеризують тему контенту яка вказана в параграфі.
// створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id = content з них список(ul > li), який буде змістом того, що знаходиться на сторінці.
// Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

const divWrap = document.getElementById('wrap');
const content = document.getElementById('content');
content.innerHTML = '<b>Task-5</b>';
const h2Collection = divWrap.getElementsByTagName('h2');
const ul = document.createElement('ul');
content.append(ul);

for (const item of h2Collection) {
  const li = document.createElement('li');
  li.textContent = item.innerText;
  ul.append(li);
}

// 6) - Є масив котрий характеризує правила.Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html;

let rules = [
  {
    title: 'Первое правило Бойцовского клуба.',
    body: 'Никому не рассказывать о Бойцовском клубе.'
  },
  {
    title: 'Второе правило Бойцовского клуба.',
    body: 'Никогда никому не рассказывать о Бойцовском клубе.'
  },
  {
    title: 'Третье правило Бойцовского клуба.',
    body: 'В схватке участвуют только двое.'
  },
  {
    title: 'Четвертое правило Бойцовского клуба.',
    body: 'Не более одного поединка за один раз.'
  },
  {
    title: 'Пятое правило Бойцовского клуба.',
    body: 'Бойцы сражаются без обуви и голые по пояс.'
  },
  {
    title: 'Шестое правило Бойцовского клуба.',
    body: 'Поединок продолжается столько, сколько потребуется.'
  },
  {
    title: 'Седьмое правило Бойцовского клуба.',
    body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
  },
  {
    title: 'Восьмое и последнее правило Бойцовского клуба.',
    body: 'Новичок обязан принять бой.'
  },

];

const divWrapTask6 = document.createElement('div');
divWrap.after(divWrapTask6);
divWrapTask6.id = 'task6';

let countRules = 1;

for (const item of rules) {
  const div = document.createElement('div');
  div.classList.add('rules', `rule${countRules}`);
  divWrapTask6.append(div);
  countRules++;
  const h2 = document.createElement('h2');
  h2.textContent = item.title;
  div.append(h2);
  const p = document.createElement('p');
  p.textContent = item.body;
  div.append(p);
}

console.log('----- END -----');