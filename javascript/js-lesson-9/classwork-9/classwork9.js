// ----------------- classwork-9 --------------------

// 1)- є масив
// Проітерувати його, створиши для кожного елементу масиву < div class='member' >.

let simpsons = [
  {
    name: 'Bart',
    surname: 'Simpson',
    age: 10,
    info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
    photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
  },
  {
    name: 'Homer',
    surname: 'Simpson',
    age: 40,
    info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
    photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
  },
  {
    name: 'Marge',
    surname: 'Simpson',
    age: 38,
    info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
    photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
  },
  {
    name: 'Lisa',
    surname: 'Simpson',
    age: 9,
    info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
    photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
  },
  {
    name: 'Maggie',
    surname: 'Simpson',
    age: 1,
    info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
    photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
  },
];

const divTask1 = document.createElement('div');
divTask1.innerHTML = '<h2>Task-1</h2>';
const main = document.getElementById('tasks');
main.append(divTask1);

for (const obj of simpsons) {
  const div = document.createElement('div');
  div.className = 'member';
  div.textContent = `${obj.name} ${obj.surname}, ${obj.age}`;
  divTask1.append(div);
}

// 2)- взяти попередній масив з сімпсонами.
// Проітерувати його, створиши для кожного елементу масиву < div class='member' >.
// Для кожної властивості елементу створити окремий блок, та помістити його у div.member

const divTask2 = document.createElement('div');
divTask2.innerHTML = '<h2>Task-2</h2>';
main.append(divTask2);

for (const obj of simpsons) {
  const divEl = document.createElement('div');
  divEl.className = 'member';
  divTask2.append(divEl);
  const divName = document.createElement('div');
  divName.textContent = obj.name;
  const divSurname = document.createElement('div');
  divSurname.textContent = obj.surname;
  const divAge = document.createElement('div');
  divAge.textContent = obj.age;
  const divInfo = document.createElement('div');
  divInfo.textContent = obj.info;
  const divPhoto = document.createElement('div');
  divPhoto.textContent = obj.photo;
  divEl.append(divName);
  divEl.append(divSurname);
  divEl.append(divAge);
  divEl.append(divInfo);
  divEl.append(divPhoto);
}

// 3)- Є масив
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись
// значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png

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

const divTask3 = document.createElement('div');
divTask3.className = 'task3';
divTask3.innerHTML = '<h2>Task-3</h2>';
main.append(divTask3);

for (const obj of coursesArray) {

  const divTitle = document.createElement('div');
  divTitle.className = 'divTitle';
  divTitle.innerHTML = `<h3>${obj.title}</h3>`;
  divTask3.append(divTitle);

  const divMonthDuration = document.createElement('div');
  divMonthDuration.className = 'divMonthDuration';
  divMonthDuration.textContent = `Month Duration: ${obj.monthDuration}`;
  divTask3.append(divMonthDuration);

  const divHourDuration = document.createElement('div');
  divHourDuration.className = 'divHourDuration';
  divHourDuration.textContent = `Hour Duration: ${obj.hourDuration}`;
  divTask3.append(divHourDuration);

  const divModules = document.createElement('div');
  divModules.className = 'divModules';
  divModules.textContent = 'Modules:';
  divTask3.append(divModules);

  for (const item of obj.modules) {
    const divModulesEl = document.createElement('div');
    divModulesEl.className = 'divModulesEl';
    divModulesEl.textContent = item;
    divModules.append(divModulesEl);
  }

}