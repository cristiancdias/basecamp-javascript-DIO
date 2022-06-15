function verificarPares(array) {
  if (!array) return -1
  if (!array.length) return -1

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      console.log("você ja é zero")
    } else if (array[i] % 2 === 0) {
      console.log(`substituindo ${array[i]} por 0...`)
      array[i] = 0
    }
  }
  return array
}

let array = [1, 3, 4, 6, 80, 33, 23, 90]
console.log(verificarPares(array))
