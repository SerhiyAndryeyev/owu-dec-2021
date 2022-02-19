// ----------------- homework-7 --------------------

// 1)- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

console.log(' ----- Task-1 ------');

function User(id, name, surname, email, phone) {
  this.id = id;
  this.name = name;
  this.surname = surname;
  this.email = email;
  this.phone = phone;
}

const users = [];
const names = ['Vasya', 'Petya', 'Marichka', 'Lesya', 'Nata', 'Vasylyna', 'Petro', 'Maria', 'Lena', 'Nadia'];
const surnames = ['Pupkin', 'Dupkin', 'Zupkin', 'Lopata', 'Kostyl', 'Zabralo', 'Gepalo', 'Tsepalo', 'Plush', 'Guc'];
const emailEnding = '@gmail.com';
const phoneBeginning = '+38067670670';

for (let i = 0; i < 10; i++) {
  users[i] = new User(i + 1, names[i], surnames[i], names[i] + surnames[i] + emailEnding, phoneBeginning + i);
}

console.log(users);

// 2)- Взяти масив з  User[] з попереднього завдання, та відфільтрувати, залишивши тільки об'єкти з парними id (filter)

console.log(' ----- Task-2 ------');

const filterUsers = users.filter(el => (el.id % 2 === 0));

console.log(filterUsers);

// 3)- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id.по зростанню(sort)

console.log(' ----- Task-3 ------');

const sortedUsers = users.sort((a, b) => a.id - b.id);

console.log(sortedUsers);

// 4)- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

console.log(' ----- Task-4 ------');

const clients = [];
const order = [
  ['thing1', 'thing2', 'thing3', 'thing4', 'thing5', 'thing6', 'thing7'],
  ['thing1', 'thing2', 'thing3', 'thing4', 'thing5',],
  ['thing1', 'thing2', 'thing3', 'thing4', 'thing5', 'thing6', 'thing7', 'thing8'],
  ['thing1', 'thing2', 'thing3', 'thing4'],
  ['thing1', 'thing2', 'thing3', 'thing4', 'thing5', 'thing6'],
  ['thing1', 'thing2', 'thing3', 'thing4', 'thing5', 'thing6', 'thing7', 'thing8', 'thing9'],
  ['thing1', 'thing2', 'thing3'],
  ['thing1', 'thing2', 'thing3', 'thing4', 'thing5', 'thing6', 'thing7',],
  ['thing1', 'thing2', 'thing3', 'thing4', 'thing5', 'thing6', 'thing7', 'thing8', 'thing9', 'thing10'],
  ['thing1', 'thing2']
];

class Client {
  constructor(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
  }

};

for (let i = 0; i < 10; i++) {
  clients[i] = new Client(i + 1, names[i], surnames[i], names[i] + surnames[i] + emailEnding, phoneBeginning + i, order[i]);
}

console.log(clients);

// 5)- Взяти масив(Client[] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

console.log(' ----- Task-5 ------');

const sortedClients = clients.sort((a, b) => a.order.length - b.order.length);

console.log(sortedClients);

console.log(' ----- END ------');