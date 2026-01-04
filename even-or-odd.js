// Even or Odd
// https://youtu.be/hPHN31gNEMk
// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript

// const evenOrOdd = (num) => {
//   if (num % 2 === 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// };

const evenOrOdd = (num) => (num % 2 === 0 ? "Even" : "Odd");

console.log(evenOrOdd(5));
console.log(evenOrOdd(8));
