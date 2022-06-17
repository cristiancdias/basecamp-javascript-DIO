//IIFE (Immediately Invoked Fuction Expression)
//Uma função anônima entre parênteses, seguida por outro par de parênteses, que representa sua chamada.

//Exemplo
;(function () {
  let name = "Cristian Copceski Dias"
  return console.log(name)
})()
;(function (a, b) {
  return console.log(a + b)
})(5, 5)

const soma3 = (function (a, b) {
  return a + b
})(3, 4)

console.log(soma3)

//CallBacks
//Uma função passada como argumento para outra.
//Utilizando callbacks se tem maior controle da ordem de chamadas.

//Exemplos
const calc = function (operacao, num1, num2) {
  return operacao(num1, num2)
}

const soma = function (num1, num2) {
  return num1 + num2
}

const sub = function (num1, num2) {
  return num1 - num2
}

const resultSoma = calc(soma(1, 3))
const resultSub = calc(sub(1, 3))

console.log(resultSub)
console.log(resultSoma)

//Fonte Mdn
function greeting(name) {
  alert("Olá " + name)
}

function processUserInput(callback) {
  var name = prompt("Por favor insira seu nome.")
  callback(name)
}

processUserInput(greeting)
