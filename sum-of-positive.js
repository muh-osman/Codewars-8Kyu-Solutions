// ⚔️ 👉 Sum of positive
// 📺 👉 https://youtu.be/tL0Bphi1zIA
// 👨‍💻 👉 https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript

// Method (1) 🎯
// const positiveSum = (arr) => {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       total += arr[i];
//     }
//   }
//   return total;
// };

// Method (2) 🎯
const positiveSum = (arr) => {
  return arr.reduce((sum, num) => (num > 0 ? sum + num : sum), 0);
};

// Test ✅
console.log(positiveSum([1, -4, 7, 12]));
console.log(positiveSum([]));
