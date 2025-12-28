// https://youtu.be/hPHN31gNEMk
// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript

// Even or Odd
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// const evenOrOdd = (num) => {
//   if (num % 2 === 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// };

// console.log(evenOrOdd(5));
// console.log(evenOrOdd(10));

const evenOrOdd = (num) => (num % 2 === 0 ? "Even" : "Odd");

console.log(evenOrOdd(5));
console.log(evenOrOdd(8));
