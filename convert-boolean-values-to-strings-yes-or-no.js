// ⚔️ 👉 Convert boolean values to strings 'Yes' or 'No'.
// 📺 👉 https://youtu.be/KOfv-zj1Bdo
// 👨‍💻 👉 https://www.codewars.com/kata/53369039d7ab3ac506000467/train/javascript

// Method (1)
// const boolToWord = (bool) => {
//   if (bool) {
//     return "Yes";
//   } else {
//     return "No";
//   }
// };

// Method (2)
const boolToWord = (bool) => (bool ? "Yes" : "No");

// Test
console.log(boolToWord(true));
console.log(boolToWord(false));
