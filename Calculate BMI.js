// Calculate BMI

// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

// Method 1
function bmi(weight, height) {
  const bmiResult = weight / Math.pow(height, 2);
  return bmiResult <= 18.5
    ? "Underweight"
    : bmiResult <= 25
    ? "Normal"
    : bmiResult <= 30
    ? "Overweight"
    : "Obese";
}
console.log(bmi(70, 176));




// Method 2
function calc(w, h) {

    let bmi = w / Math.pow(h, 2)

    if (bmi <= 18.5) {
        return "Underweight"
    } else if (bmi <= 25) {
        return "Normal"
    } else if (bmi <= 30) {
        return "Overweight"
    } else {
        return "Obese"
    }
}

console.log(calc(70, 176))
