const alunos = [
  {
    nome: "joão",
    nota: 5,
    turma: "2b"
  },
  {
    nome: "sofi",
    nota: 9,
    turma: "3c"
  },
  {
    nome: "paulo",
    nota: 7,
    turma: "4a"
  }
]

function alunosAprovados(arr, media) {
  let aprovados = []
  for (let i = 0; i < arr.length; i++) {
    const { nome, nota } = alunos[i]
    if (nota >= media) {
      aprovados.push(nome)
    }
  }
  return aprovados
}

console.log(alunosAprovados(alunos, 5))
