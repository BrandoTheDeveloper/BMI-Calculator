
// function
// get values
// calculate
// output

// bmi formula weight / height squared * 703

// Underweight = <18.5
// Normal weight = 18.5–24.9
// Overweight = 25–29.9
// Obesity = BMI of 30 or greater

function calculateBMI() {
  let weight = document.getElementById('weight-input').value
  let height = document.getElementById('height-input').value
  let bmi = (weight / (height * height) * 703)

  document.getElementById('heading').innerHTML = 'Your BMI is : ' // alternative ( + `${bmi}`)
  document.getElementById('bmi-output').innerHTML = bmi.toFixed(1)

  if (bmi < 18.5) {
    document.getElementById('message').innerHTML = 'You are Under Weight'
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    document.getElementById('message').innerHTML = 'You are Healthy Weight'
  } else if (bmi >= 25 && bmi <= 29.9) {
    document.getElementById('message').innerHTML = 'You are Over Weight'
  } else {
    document.getElementById('message').innerHTML = 'You are Obese: Seek Help Right Away!'
  }

}

function reload() {
  window.location.reload()
}