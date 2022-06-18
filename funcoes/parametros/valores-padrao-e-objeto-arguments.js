//Pré-Es2015
//Era necessario verificar se o valor não havia sido passado como argumento.
/*
  function exponencial(array, num) {
    if (num === undefined) {
      num = 1
    }
    const result = []
    for (let i = 0; i < array.length; i++) {
      result.push(array[i] ** num)
    }
    return result
  }
*/

//Pós-ES2015
function exponencial(array, num = 1) {
  const result = []

  for (let i = 0; i < array.length; i++) {
    result.push(array[i] ** num)
  }
  return result
}

console.log(exponencial([1, 2, 3, 4]))

//Objeto "arguments"
//Um array como todos os parâmetros passados quando a função foi invocada.
//Exemplo
function findMax() {
  let max = -Infinity
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i]
    }
  }
  return max
}

console.log(findMax(1, 2, 3, 6, 90, 1))
