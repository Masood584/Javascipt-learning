// Data types : 8 basic data types

let username = "Masood"; // String
console.log(typeof username);

username = 123; // Number
console.log(typeof username);

let number = 123; // Integer
console.log(typeof number);

number = 12.333; // Floating point number
console.log(typeof number);

let calculateInfinity = 500 / 0; // Infinity
console.log(calculateInfinity);
console.log(typeof calculateInfinity);

let inf = Infinity;
console.log(50000000 < inf);

let sumOfNumbers = 4 / 0;

if (sumOfNumbers === Infinity) {
  console.log("Program stopped");
} else {
  console.log("Program continue");
}

let multipleOfthree = 3 * "e"; // NaN
console.log(multipleOfthree);
console.log(typeof multipleOfthree);

let squareOfNaN = NaN ** 0;
console.log(squareOfNaN);

let bigNumber = 2394239412094304023432423478342378423784782348723478n; // Bigint
console.log(bigNumber);
console.log(typeof bigNumber);

let book = "Chemistry";
let stationary = "Pen";
let uniform = `Shirt`;

console.log(typeof book);
console.log(typeof stationary);
console.log(typeof uniform);

let name = "John";
let subtraction = `Username is ${name}`;
console.log(subtraction);
console.log(typeof subtraction);

let bag = null;
bag="Pen"
console.log(bag);


var bags = "Bags";
console.log(bags);
