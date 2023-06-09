// The company you work for has just been awarded a contract to build a payment gateway.
//  In order to help move things along, you have volunteered to create a function
// that will take a float and return the amount formatting in dollars and cents.

// 39.99 becomes $39.99

// The rest of your team will make sure that the argument is sanitized before being passed to your
// function although you will need to account for adding trailing zeros if they are missing
// (though you won't have to worry about a dangling period).

// Method 1
function formatMoney(amount) {
  return `$${amount.toFixed(2)}`;
}
console.log(formatMoney(2.5));



// Method 2 ..Credits: stack overflow
const format = num => num.toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
})


console.log(format(3.99))  // 3.99 => $3.99
console.log(format(3))    // 3 => $3.00
console.log(format(3.1)) // 3.1 => $3.10