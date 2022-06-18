//Spread : uma forma de lidar separadamente com elementos.
//O que era parte de um array se torna um elemento idependente

//Exemplo
function sum(x, y, z) {
  return x + y + z
}

const numbers = [1, 3, 5]
const result = sum(...numbers)

console.log(`A soma de ${numbers} é ${result}`)

//Rest : combina os argumentos em um array
//O que era um elemento independente se torna parte de um array

//Exemplo

function confereTamanho(...args) {
  let array = args.length
  console.log(`O tamanho do array é ${array}`)
}

confereTamanho()
confereTamanho(1, 2)
confereTamanho(1, 2, 3)

//Object destructuring
//Entre chaves {}, podemos filtrar apenas os dados que nos interessam em um objeto.

//Exemplo
const user = {
  id: 42,
  displayName: "jdoe",
  fullName: {
    firstName: "John",
    lastName: "Doe"
  }
}

function userId({ id }) {
  return id
}

function getFullName({ fullName: { firstName: first, lastName: last } }) {
  return `${first} ${last}`
}

console.log(userId(user))
console.log(getFullName(user))
