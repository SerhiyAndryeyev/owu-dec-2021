// ----------------- classwork-7 --------------------

console.log(' ----- Task-1 ------');

// 1)- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.додати в об'єкт функції:;
// --drive() - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


function Cars(model, manufactery, year, maxSpeed, volume) {
  this.model = model;
  this.manufactery = manufactery;
  this.year = year;
  this.maxSpeed = maxSpeed;
  this.volume = volume;
  this.drive = function () {
    console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
  };
  this.info = function () {
    for (const key in this) {
      if (typeof this[key] !== 'function') {
        console.log(`${key} - ${this[key]}`);
      }
    }
  };
  this.newMaxSpeed = function (newSpeed) { this.maxSpeed = this.maxSpeed + newSpeed; };
  this.changeYear = function (newValue) { this.year = newValue; };
  this.addDriver = function (driver) { this.driver = driver; };
}

let myCar = new Cars('Toyota', 'Japan', 2011, 220, 1.3);

console.log(myCar);

myCar.drive();
myCar.info();
myCar.newMaxSpeed(250);
myCar.drive();
myCar.changeYear(2010);
myCar.info();
myCar.addDriver('Serhiy');

console.log(myCar);

console.log(' ----- Task-2 ------');

// 2)- (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість; } на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


class Cars2 {
  constructor(model, manufactery, year, maxSpeed, volume) {
    this.model = model;
    this.manufactery = manufactery;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;
  }
  drive() { console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`); }
  info() {
    for (const key in this) {
      if (typeof this[key] !== 'function') {
        console.log(`${key} - ${this[key]}`);
      }
    }
  }
  newMaxSpeed(newSpeed) { this.maxSpeed = this.maxSpeed + newSpeed; }
  changeYear(newValue) { this.year = newValue; }
  addDriver(driver) { this.driver = driver; }
}

let myCar2 = new Cars2('Toyota', 'Japan', 2011, 220, 1.3);

console.log(myCar2);

myCar2.drive();
myCar2.info();
myCar2.newMaxSpeed(250);
myCar2.drive();
myCar2.changeYear(2010);
myCar2.info();
myCar2.addDriver('Serhiy');

console.log(myCar2);

console.log(' ----- Task-3 ------');

// 3)-Cтворити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.


const cinderellas = [];
const names = ['Lisa', 'Pusya', 'Marichka', 'Lesya', 'Nata', 'Vasylyna', 'Lana', 'Maria', 'Lena', 'Nadia'];
const ages = Array.from({ length: 10 }, el => Math.floor(Math.random() * (50 - 18 + 1)) + 18); // від 18 до 50
const sizes = Array.from({ length: 10 }, el => Math.floor(Math.random() * (41 - 36 + 1)) + 36); // від 36 до 41

class Cinderella {
  constructor(name, age, size) {
    this.name = name;
    this.age = age;
    this.size = size;
  }
}

for (let i = 0; i < 10; i++) {
  cinderellas[i] = new Cinderella(names[i], ages[i], sizes[i]);
}

console.log(cinderellas);

console.log(' ----- Task-4 ------');

// 4)-Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.


class Prince {
  constructor(name, age, size) {
    this.name = name;
    this.age = age;
    this.size = size;
  }
}

const prince = new Prince('Serhiy', 46, 37);

console.log(prince);

function getMarried(arr, obj) {
  for (const item of arr) {
    if (item.size === obj.size) {
      return `you're found her, she is ${item.name}`;
    }
  }
};

console.log(getMarried(cinderellas, prince));

console.log(' ----- Task-5 ------');

// 5)-Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

const nextBrid = cinderellas.find(el => el.size === prince.size);

console.log(nextBrid);

console.log(' ----- END ------');