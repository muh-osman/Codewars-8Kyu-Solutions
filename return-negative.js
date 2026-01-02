// Return Negative
// https://youtu.be/KyHwrc9JqpE
// https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript

// const makeNegative = (num) => {
//   return num <= 0 ? num : -num;
// };

const makeNegative = (num) => (num <= 0 ? num : -num);

console.log(makeNegative(5));
console.log(makeNegative(-5));
console.log(makeNegative(0));
