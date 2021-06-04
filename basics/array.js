// array
// higher order functions and loops

const fruits = ['Apple', 'Mango', 'Orange'];

// for, while, do-while
// forof, forin

// forof
// for (const fruit of fruits) {
//     console.log(fruit)
// }

// forEach
// fruits.forEach(fruit => console.log(fruit))

// let found = false;
// for (let index = 0; index < fruits.length; index++) {
//     const element = fruits[index];
//     if (element === 'Apple') {
//         found = true;
//         break;
//     }
// }

const found = fruits.find(i => i === 'Apple');
const filtered = fruits.filter(i => i.toLowerCase().includes('o'));

console.log(found)
console.log(filtered)

const persons = [
    { id: 1, name: 'John Doe', job: 'Clerk' },
    { id: 2, name: 'Allen Green', job: 'Sales' },
    { id: 3, name: 'James Wan', job: 'Clerk' },
];

const person = persons.find(i => i.id === 2);
const filteredPersons = persons.filter(i => i.job === 'Clerk');

console.log(person.name)
console.log(filteredPersons)