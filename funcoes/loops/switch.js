// Equivale a uma comparação tipo e valor (===)
//Sempre  precisa de um valor "default"
//Ideal para quando se precisa compara muitos valores

function getAnimal(id) {
  switch(id) {
    case 1:
      return "cão"
    case 2:
      return "gato"
    case 3: 
      return "pássaro"
    default: 
    return "peixe"
  }
}

console.log(getAnimal(1))
console.log(getAnimal(4))
console.log(getAnimal("1"))
