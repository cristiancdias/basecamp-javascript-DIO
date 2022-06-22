//A palavra reservada this é uma referencia de contexto.
//No exemplo, this refere-se ao objeto pessoa.

// const pessoa = {
//   firstName: "Cristian",
//   lastName: "Dias",
//   id: 1,
//   fullName: function () { //função dentro de um objeto é um metodo
//     return console.log(`${this.firstName} ${this.lastName}`)
//   },
//   getId: function () {
//     return console.log(`${this.id}`)
//   }
// }
// pessoa.fullName()
// pessoa.getId()

//Manipulando o valor de this

//Call

// const pessoa = {
//   nome: "Cris"
// }
// const animal = {
//   nome: "sem nome"
// }

// function getSomething() {
//   console.log(this.nome)
// }

// getSomething.call(animal)

// const myObj = {
//   num1: 2,
//   num2: 4
// }

// function soma(a, b) {
//   console.log(this.num1 + this.num2 + a + b)
// }

// soma.call(myObj, 1, 3)

//Apply
//Enquanto no call mandamos os argumentos separado por virgula no apply é necessario passar entre [] um array

//Bind
//Clona a estrutura da função onde é chamada e aplica o valor do objeto passado como parametro.
const retornaNomes = function () {
  return this.nome
}

let bruno = retornaNomes.bind({ nome: "Bruno mesmo" })
console.log(bruno())
