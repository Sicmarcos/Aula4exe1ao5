// Exe Lista de estudantes
const estudantes = [
  {
    nome: "Ana",
    notas: [
      { cadeira: "Matemática", nota: 9 },
      { cadeira: "Português", nota: 8 },
      { cadeira: "História", nota: 7 }
    ]
  },
  {
    nome: "Bruno",
    notas: [
      { cadeira: "Matemática", nota: 6 },
      { cadeira: "Português", nota: 9 },
      { cadeira: "História", nota: 8 }
    ]
  },
  {
    nome: "Carla",
    notas: [
      { cadeira: "Matemática", nota: 10 },
      { cadeira: "Português", nota: 9 },
      { cadeira: "História", nota: 9 }
    ]
  },
  {
    nome: "Diego",
    notas: [
      { cadeira: "Matemática", nota: 7 },
      { cadeira: "Português", nota: 6 },
      { cadeira: "História", nota: 8 }
    ]
  }
];


function calcularMedia(notas) {
  let soma = 0;
  for (let i = 0; i < notas.length; i++) {
    soma += notas[i].nota;
  }
  return soma / notas.length;
}


function melhorAluno(lista) {
  let melhor = lista[0];
  let melhorMedia = calcularMedia(melhor.notas);

  for (let i = 1; i < lista.length; i++) {
    const mediaAtual = calcularMedia(lista[i].notas);
    if (mediaAtual > melhorMedia) {
      melhor = lista[i];
      melhorMedia = mediaAtual;
    }
  }

  return {
    nome: melhor.nome,
    media: melhorMedia
  };
}


console.log(melhorAluno(estudantes));

