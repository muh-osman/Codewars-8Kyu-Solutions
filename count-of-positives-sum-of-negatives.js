// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

/* Solution */

// Create Empty Array for the Positive Numbers
// Create a Variable for the Sum of Negatives
// Loop through the Given Array
// Check if the number is positive add it to the Array , if negative add to the Sum Variable



// Method 1
function countPositivesSumNegatives(input) {
  let positivesArray = input.filter((x) => x > 0).length;
  let sumNegatives = input
    .filter((x) => x < 0)
    .reduce((acc, current) => acc + current, 0);
  return [positivesArray, sumNegatives];
}
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));



// Method 2
// function countPositivesSumNegatives(input) {
//     let positivesArray = [];
//     let sumNegatives = 0;
//     for (let i = 0; i < input.length; i++) {
//       if (input[i] > 0) {
//         positivesArray.push(input[i]);
//       } else {
//         sumNegatives += input[i];
//       }
//     }
//     return [positivesArray.length, sumNegatives];
// }
// console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));





// Method 3
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
const newArr = [];
let count = 0;
let sum = 0;

const countOfPositivesSumOfNegatives = () => {
  arr.map((num) => {
    if (num > 0) {
      count += 1;
    } else {
      sum += num;
    }
  });

  newArr.push(count);
  newArr.push(sum);

  return newArr;
}

console.log(countOfPositivesSumOfNegatives());
