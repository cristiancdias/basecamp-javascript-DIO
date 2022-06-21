function multiplicaPorDois(arr) {
  let multiplicados = []
  let i = 0
  for (i; i < arr.length; i++) {
    multiplicados.push(arr[i] * 2)
  }
  return multiplicados
}

const meusNumeros = [2, 33, 456, 356, 44]

console.log(multiplicaPorDois(meusNumeros))

//For In

function forInExemplo(obj) {
  for (prop in obj) {
    console.log(prop)
    console.log(obj[prop])
  }
}

const meuObjeto = {
  nome: "cris",
  idade: "39",
  cidade: "umuarama"
}

forInExemplo(meuObjeto)

//For of
function logLetras(palavra) {
  for (letra of palavra) {
    console.log(letra)
  }
}

const palavra = "abacaxi"
logLetras(palavra)
