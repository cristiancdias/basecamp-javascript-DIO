function numeroPositivo(num) {
  let resultado
  if (num < 0) {
    resultado = false
  } else {
    resultado = true
  }
  return resultado
}

//Refatorando
function numeroPositivo(num) {
  let resultado
  const ehNegativo = num < 0
  if (ehNegativo) {
    resultado = false
  } else {
    resultado = true
  }
  return resultado
}

//Outra forma
function numeroPositivo(num) {
  const ehNegativo = num < 0
  if (ehNegativo) {
    return false
  }
  return true
}

console.log(numeroPositivo(9))
