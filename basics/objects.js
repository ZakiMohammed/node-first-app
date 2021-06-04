const person = {
    id: 1,
    firstName: 'Smith',
    lastName: 'Woods',
    job: 'Clerk',
    salary: 12000,
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
}

console.log(person)
console.log(person.fullName())

person.firstName = 'Allen';

console.log(person.fullName());