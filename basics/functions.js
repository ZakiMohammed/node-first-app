function greet(name) {
    return `Hello ${name}!`;
}

const add = function (num1, num2) {
    return num1 + num2;
}

console.log(greet('John'));
console.log(add(10, 20));

// arrow functions (=> arrow)
const sub = (num1, num2) => {
    return num1 - num2;
}
const mul = (num1, num2) => num1 * num2;
const print = message => `Message: ${message}`;
const compute = num => num * 2;

console.log(sub(20, 10))
console.log(mul(20, 10))

console.log(print('Hello World'))
console.log(compute(4));