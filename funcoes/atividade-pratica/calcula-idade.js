function calculaIdade(anos) {
  return `Daqui a ${anos} anos, ${this.nome} terá ${
    this.idade + anos
  } anos de idade.`
}

pessoa1 = {
  nome: "Cris",
  idade: 39
}
pessoa2 = {
  nome: "Bruna",
  idade: 30
}
pessoa3 = {
  nome: "Arthur",
  idade: 5
}

console.log(calculaIdade.call(pessoa1, 5))
console.log(calculaIdade.apply(pessoa2, [5]))
console.log(calculaIdade.call(pessoa3, 5))
