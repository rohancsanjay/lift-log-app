// const person = {
//   name: 'Rohan',
//   age: 23,
//   location: {
//     city: 'San Jose',
//     temp: 99
//   }
// };
//
// const {name: firstName = 'anon', age} = person;
// console.log(`${firstName} is ${age}.`);
//
// const {city, temp: temperature } = person.location;
// console.log(`${city} is ${temperature} degrees today`);

//
//  OBJECT DESTRUCTURING
//
// const book = {
//   title: 'Blah',
//   author: 'Dude',
//   publisher: {
//     // name: 'McGraw'
//   }
// };
//
// const {name: publisherName = 'Self' } = book.publisher;
//
// console.log(publisherName);
// //
// // ARRAY DESTRUCTURING
// //
// const address = ['1299 S Fairford Way', 'Philadelphia', 'Pennslyvania', '95129'];
//
// const [, city, state] = address;
//
// console.log(`You are in ${address}, ${state}. `)
//
//
const item = ['coffee','2.00','1.00','.50'];

const [beverage, , mPrice, ] = item;

console.log(`A medium ${beverage} costs ${mPrice}`);
