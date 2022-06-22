//Caso exista apenas uma linha, pode dispensar as chaves e o return

const soma = (a, b) => a + b
console.log(soma(4, 6))

//Caso exista apenas um parâmetro pode dispensar os parênteses
const soma1 = a => a
console.log(soma1(4))

//Arrow function nao faz hoisting por ser sempre armazenada em uma const

//Outras restrições
//"this" sempre será o objeto global. Métodos para modificar seu valor não irão funcionar
//Não exite o objeto "arguments"
//O construtor (ex. new MeuObjeto()) também nao pode ser utilizado.
