//console javascript me ak predefined function or us functions
// k kuch methods hai jo kai hamare input dye gae data ko console me print krwane ka alag alag tarika hai.

console.log("Masood");
console.warn("Something is going to happen");

var num = "5";

if (typeof num !== Number) {
  console.error("num is not a nnumber its a " + typeof num);
} else {
  console.log("Its a number");
}

var arr = [1, 2, 3, 4];

console.info("The length of an array is " + arr.length);

var obj = [
  { name: "Masood", age: 23 },
  { name: "Ali", age: 24 },
  { name: "Affan", age: 23 },
];

console.table(obj);

console.group("My Group");
console.log("Message 1");
console.log("Message 2");
console.groupEnd();

for (let i = 0; i < 5; i++) {
  console.count("Count loop");
}

let a = 10;
console.assert(a > 20, "a is not greater than 10");
