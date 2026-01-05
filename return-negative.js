// ⚔️ 👉 Return Negative
// 📺 👉 https://youtu.be/KyHwrc9JqpE
// 👨‍💻 👉 https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript

// Method (1) 🎯
// const makeNegative = (num) => {
//   return num <= 0 ? num : -num;
// };

// Method (2) 🎯
const makeNegative = (num) => (num <= 0 ? num : -num);

// Test ✅
console.log(makeNegative(5));
console.log(makeNegative(-5));
console.log(makeNegative(0));
