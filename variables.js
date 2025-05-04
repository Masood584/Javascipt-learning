// // "use strict";

// // /**
// //  * Introduction to Variables in JavaScript
// //  *
// //  * 1. Variables are containers that store data values
// //  * 2. JavaScript has three ways to declare variables: var, let, and const
// //  * 3. Variable creation has two phases: declaration and assignment
// //  * 4. Rules to create a variable in javascript
// //  * 5. The variable name must contain letterd, digit or the symbol $ and _
// //  * 6. The first must not be a digit 1message = "Hello" not allowed
// //  * 7. If name contian multiple words we usually follow camelCase or snackcase
// //  * 8. In Javascript variables are case sensitive.
// //  * 8. We can not used reserved key word as a varaible name like var, let, const and return etc
// //  */

// // // ==================================================================
// // // Using var (legacy approach - not recommended for modern code)
// // // ==================================================================

// // /**
// //  * var was introduced in ECMAScript 1 (1997)
// //  * It has function scope and can lead to unexpected behavior
// //  */

// // // Phase 1: Declaration
// // var message;

// // // Phase 2: Assignment
// // message = "hello";

// // // Combine Phase 1 and 2

// // var message = "Hello 1";

// // // Accessing the variable
// // console.log("Message value:", message); // Output: hello

// // // Multiple ways to declare variables:

// // // let user = 'John', age = 25, userClass = '1';

// // // let user = 'John',
// // //   age = 25,
// // //   userClass = 'Hello';

// // let user = "John",
// //   age = 25,
// //   userClass = "Hello";

// // console.log(user, age, userClass, "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC");

// // // ==================================================================
// // // Variable Assignment
// // // ==================================================================

// // // Assigning one variable's value to another
// // var newMessage = message;
// // console.log("New message value:", newMessage); // Output: hello

// // // Changing the original doesn't affect the copy
// // message = "world";
// // console.log("Original message:", message); // Output: world
// // console.log("New message:", newMessage); // Still outputs: hello

// // // Var

// // var myName = "Masood"; // Global scoped

// // function abc() {
// //   var functionScoped = "Huraira"; // Function Scoped
// //   // console.log("Function my name", myName);

// //   console.log(functionScoped, "asdjasdjhasdjhasdjhjh");
// // }

// // abc();

// // if (true) {
// //   // The same myName variable Redeclare here ignore block scope treat as a global variable
// //   var myName = "Junaid";
// // }

// // console.log("My Name", myName);
// // abc();

// // function getUser() {
// //   // code execution phase take it to upper assign undefind
// //   if (!userData) {
// //     // here its get undefined and condtion true because using ! this  then u get userDate
// //     var userData = { name: "masood" }; // Hoisted
// //   }
// //   return userData; // get data here becasue ignore blocked scope
// // }

// // console.log(getUser(), "GET USER");

// // for (var i = 0; i < 10; i++) {
// //   setTimeout(() => console.log(i), 1000);
// // }

// // console.log(i); // Ignore block scope

// // var i = 0; // after completing loop value 10

// // {
// //   setTimeout(() => console.log(i), 1000); // run 10 times
// // }

// // for (let j = 0; j < 10; j++) {
// //   setTimeout(() => console.log(i), 1000);
// // }

// // {
// //   let j = 0;
// //   setTimeout(() => console.log(j), 1000);
// // }
// // {
// //   let j = 1;
// //   setTimeout(() => console.log(j), 1000);
// // }
// // {
// //   let j = 2;
// //   setTimeout(() => console.log(j), 1000);
// // }
// // {
// //   let j = 3;
// //   setTimeout(() => console.log(j), 1000);
// // }
// // {
// //   let j = 4;
// //   setTimeout(() => console.log(j), 1000);
// // }
// // {
// //   let j = 5;
// //   setTimeout(() => console.log(j), 1000);
// // }
// // {
// //   let j = 6;
// //   setTimeout(() => console.log(j), 1000);
// // }
// // {
// //   let j = 7;
// //   setTimeout(() => console.log(j), 1000);
// // }
// // {
// //   let j = 8;
// //   setTimeout(() => console.log(j), 1000);
// // }
// // {
// //   let j = 9;
// //   setTimeout(() => console.log(j), 1000);
// // }

// // {
// //   let vaa = 1;
// // }
// // {
// //   let vaa = 1;
// // }

// // function sayHi() {
// //   if (true) {
// //     var phrase = "Hello";
// //   }

// //   console.log(phrase); // works
// // }

// // sayHi();
// // // console.log(phrase);

// // for (var i = 0; i < 10; i++) {
// //   (function () {
// //     setTimeout(() => console.log(i), 1000);
// //   });
// // }

// // (function () {
// //   var b = 1;
// //   console.log(b, "asdasjdasjhdasjh");
// // })();

// // const kkk = "Jsjksdjhasfasjh";
// // kkk = "Asdasjdasdjhjh";

// // function hello() {
// //   function helloNested() {
// //     var item = "Ball";
// //   }

// //   helloNested();
// // }

// // hello();

// // {
// //   let sdsad = "asdsad";
// //   sdsad = "ASdaskldask";
// // }
// // {
// //   const sdsad = "asdsad";
// // }

// // let varaible = 123;

// // console.log(typeof varaible,"TYPE")

// // varaible = "Hello"

// // console.log(typeof varaible,"TYPE")

// // let int = Infinity

// // console.log(typeof int,"TYPE")

// // for (let index = 0; index < Infinity; index++) {
// //   console.log(index,"KKKKKKKKKKKKKKK")

// // }
// // for (let index = 0; index < 1 / 0; index++) {
// //   console.log(index, "KKKKKKKKKKKKKKK");
// // }

// // console.log(typeof NaN, "TYPE");

// // let calculate = 1 / 1 ;

// // if(calculate === Infinity) {
// //   console.log("RUK JAO")
// // }else{
// //   console.log("CHALo")
// // }



// // console.log(Number("asdkasdjkasdjk"), typeof "3","Asdsdasd")


// let var1 = "Masood"
// let var2 = 'Huraira '


// let var3 = `Name : ${var1} ${var2}`
// let var4 = true || false

// console.log(var1,var2,var3)

// let calculate = 1 / 1 ;

// console.log(Infinity === Infinity,"asdasndasjh")

//  let l;

 