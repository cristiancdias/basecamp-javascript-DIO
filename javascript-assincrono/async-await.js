//Promises
//Objeto de processamento assincrono
//Inicialmente seu valor é desconhecido, ela pode ser resolvida ou rejeitada.
//Possui 3 estados: 1 Pending, 2 Fulfilled, 3 Rejected

async function resolvePromise() {
  const myPromise = new Promise((resolve, reject) => {
    window.setTimeout(() => {
      resolve("Resolvida")
    }, 3000)
  })
  const resolved = await myPromise
    .then(result => result + " passando pelo then")
    .then(result => result + " e agora acabou!")
    .catch(err => console.log(err.message))
  return resolved
}
