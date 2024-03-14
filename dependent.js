// dependent.js

const { factorial } = require('./utils');
const fibonacci = require('./fibonacci');

console.log('Factorial of 5:', factorial(5));

console.log('Fibonacci sequence:');
for (let i = 0; i < 10; i++) {
  console.log(fibonacci(i));
}
