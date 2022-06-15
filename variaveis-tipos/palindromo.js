function verificarPalindromo(string) {
  if (!string) return
  return string.split("").reverse().join("") === string
}

function verificarPalindromo2(string) {
  if (!string) return "string inexistente"

  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false
    }
  }
  return true
}

console.log(verificarPalindromo2("gato"))
