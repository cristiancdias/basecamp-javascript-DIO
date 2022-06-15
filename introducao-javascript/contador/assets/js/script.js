let currentNumberWrapper = document.getElementById("currentNumber")
let currentNumber = 0
function increment() {
  currentNumber = currentNumber + 1
  currentNumberWrapper.innerHTML = currentNumber
  checkValue()
}

function decrement() {
  currentNumber = currentNumber - 1
  currentNumberWrapper.innerHTML = currentNumber
  checkValue()
}

function checkValue() {
  currentNumber >= 0
    ? (currentNumberWrapper.style.color = "black")
    : (currentNumberWrapper.style.color = "red")
}
