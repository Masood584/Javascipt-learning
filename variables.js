/**
 * Introduction to Variables in JavaScript
 *
 * 1. Variables are containers that store data values
 * 2. JavaScript has three ways to declare variables: var, let, and const
 * 3. Variable creation has two phases: declaration and assignment
 * 4. Rules to create a variable in javascript
 *   The variable name must contain letterd, digit or the symbol $ and _
 *   The first must not be a digit 1message = "Hello" not allowed
 *   If name contian multiple words we usually follow camelCase or snackcase
 * 5. In Javascript variables are case sensitive.
 * 6. We can not used reserved key word as a varaible name like var, let, const and return etc
 */

// ==================================================================
// Using var (legacy approach - not recommended for modern code)
// ==================================================================

/**
 * var was introduced in ECMAScript 1 (1997)
 * It has function scope and can lead to unexpected behavior
 */

// Phase 1: Declaration
var message;

// Phase 2: Assignment
message = "hello";

// Accessing the variable
console.log("Message value:", message); // Output: hello

// ==================================================================
// Variable Assignment
// ==================================================================

// Assigning one variable's value to another
var newMessage = message;
console.log("New message value:", newMessage); // Output: hello

// Changing the original doesn't affect the copy
message = "world";
console.log("Original message:", message); // Output: world
console.log("New message:", newMessage); // Still outputs: hello

// Var

var myName = "Masood"; // Flobal scoped

function abc() {
  var myName = "Huraira"; // Function Scoped
  console.log("Function my name", myName);
}

if (true) {
  // The same myName variable Redeclare here ignore block scope treat as a global variable
  var myName = "Junaid";
}

console.log("My Name", myName);
abc();
