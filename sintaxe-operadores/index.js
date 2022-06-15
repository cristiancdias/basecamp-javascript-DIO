function compareNumbers(num1, num2) {
  if (!num1 || !num2) return "Defina dois números"
  const firstPhrase = createFirstPhrase(num1, num2)
  const secondPhrase = createSecondPhrase(num1, num2)
  return `${firstPhrase} ${secondPhrase}`
}

function createFirstPhrase(num1, num2) {
  const isEquals = num1 === num2 ? "iguais" : "diferentes"
  return `Os numeros ${num1} e ${num2} são ${isEquals}.`
}

function createSecondPhrase(num1, num2) {
  const sum = num1 + num2
  let isBiggerThen10 = sum > 10 ? "maior" : "menor"
  let isBiggerThen20 = sum > 20 ? "maior" : "menor"
  return `Sua soma é ${sum}, que é ${isBiggerThen10} que 10 e ${isBiggerThen20} que 20.`
}

console.log(compareNumbers(10, 10))
