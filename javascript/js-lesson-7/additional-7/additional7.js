// ----------------- additional-7 --------------------

// 1)- Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів;
// OBJECT EXAMPLE:
// {
//   id: 1,
//     name: 'Leanne Graham',
//       username: 'Bret',
//         email: 'Sincere@april.biz',
//           address: {
//     street: 'Kulas Light',
//       suite: 'Apt. 556',
//         city: 'Gwenborough',
//           zipcode: '92998-3874',
//             geo: {
//       lat: '-37.3159',
//         lng: '81.1496'
//     }
//   },
//   phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//       company: {
//     name: 'Romaguera-Crona',
//       catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets';
//   }
// }

console.log(' ----- additional-7 ------');

class Company {
  constructor(companyName, catchPhrase, bs) {
    this.companyName = companyName;
    this.catchPhrase = catchPhrase;
    this.bs = bs;
  }

}
let company = new Company('Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets');
console.log(company);

class Geo {
  constructor(lat, lng) {
    this.lat = lat;
    this.lng = lng;
  }

}

class Address {
  constructor(street, suite, city, zipcode) {
    this.street = street;
    this.suite = suite;
    this.city = city;
    this.zipcode = zipcode;
    this.geo = new Geo('-37.3159', '81.1496');
  }

}
let address = new Address('Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874');
console.log(address);

class Person {
  constructor(
    id,
    name,
    username,
    email,
    address,
    phone,
    website,
    company) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.address = address;
    this.phone = phone;
    this.website = website;
    this.company = company;
  }
}

const person = new Person(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', address, '1-770-736-8031 x56442', 'hildegard.org', company);

console.log(person);

console.log(' ----- END ------');
