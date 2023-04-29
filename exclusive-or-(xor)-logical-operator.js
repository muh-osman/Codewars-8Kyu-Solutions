// // Exclusive "or" (xor) Logical Operator
// // Overview
// // In some scripting languages like PHP,
// //  there exists a logical operator (e.g. &&, ||, and, or, etc.) called the "Exclusive Or"
// //  (hence the name of this Kata). The exclusive or evaluates two booleans.
// // It then returns true if exactly one of the two expressions are true, false

// Task
// Since we cannot define keywords in Javascript
//  (well, at least I don't know how to do it),
//   your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated.
//   Your xor function should have the behaviour described above,
//  returning true if exactly one of the two expressions evaluate to true, false otherwise.


// Method 1
function xor(a, b) {
  return a === b ? false : true;
}

console.log(xor(false, false)) //false
console.log(xor(true, false)) //true
console.log(xor(false, true)) //true
console.log(xor(true, true)) //false




// Method 2
const or = (a, b) => a ^ b ? true : false

console.log(or(false, false)) //false
console.log(or(true, false)) //true
console.log(or(false, true)) //true
console.log(or(true, true)) //false
