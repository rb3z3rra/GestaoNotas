var prompt = require("prompt-sync")();

function validaNota(nota) {
  if (typeof nota === "number" && nota >= 0) {
    return true;
  } else {
    return false;
  }
}

var aluno = new Object();
function cadAluno() {
  aluno["nome"] = prompt("Informe o nome do aluno: ");
  aluno["idade"] = prompt("Informe a idade do aluno: ");
  aluno["materias"] = [];
}

function cadMaterias() {
  console.clear();
  let continua = true;
  do {
    const materia = new Object();
    materia["nome"] = prompt("Informe o nome da matéria: ");
    materia["notas"] = [];
    materia["media"] = 0;
    materia["faltas"] = 0;
    materia["situacao"];
    aluno.materias.push(materia);
    console.log("----------------------");
    let op = prompt("Continua a cadastrar? [S]im ou [N]ão: ");
    if (op === "N") {
      continua = false;
    }
  } while (continua);
}

function cadNotas() {
  console.clear();
  aluno.materias.forEach((materia) => {
    for (let i = 1; i < 4; i++) {
      let executa = true;
      while (executa) {
        nota = +prompt(`Digite a nota ${i} da disciplina ${materia.nome}: `);
        console.log(nota);
        if (validaNota(nota)) {
          executa = false;
        }
      }
      materia.notas.push(nota);
    }
    console.log("---------------------------");
  });
}

function cadFaltas() {
  aluno.materias.forEach((materia) => {
    materia.faltas = parseInt(
      prompt(`Informe as faltas da disciplina ${materia.nome}: `)
    );
  });
}

function calcularMedia() {
  aluno.materias.forEach((materia) => {
    let media = 0;
    materia.notas.forEach((nota) => {
      media += nota;
    });
    media = (media / materia.notas.length).toFixed(1);
    materia.media = parseFloat(media);
    if (materia.media >= 6) {
      materia.situacao = "Aprovado";
    } else {
      materia.situacao = "Reprovado por nota";
    }
  });
}

function resultadoFinal() {
  aluno.materias.forEach((materia) => {
    if (materia.situacao === "Aprovado" && materia.faltas > 5) {
      materia.situacao = "Reprovado por falta";
    }
  });
}

function exibirAluno() {
  console.log("-----------------------------");
  console.log("Nome do Aluno: ", aluno.nome);
  console.log("Idade: ", aluno.idade);
  console.log("Matérias: ", aluno.materias);
  console.log("-----------------------------");
}

console.clear();
console.log("****************************************");
console.log("");
console.log("Bem vindos ao sistema de gestão de notas e médias");
console.log("");
console.log("****************************************");
console.log("");
cadAluno();
cadMaterias();
cadNotas();
calcularMedia();
cadFaltas();
resultadoFinal();
exibirAluno();
