// Reversed Strings
// https://youtu.be/Idoo9D-CyqA
// https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript

// const solution = (str) => {
//   //   return str.split("").reverse().join("");
//   return [...str].reverse().join("");
// };

const solution = (str) => {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};

console.log(solution("word"));
