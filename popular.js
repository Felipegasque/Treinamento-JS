
const prompt = require("prompt-sync")()

const nome = (prompt(`Nome: `));
const alunos = Number(prompt(`N° de alunos na turma: `));
const mensagem = Number(prompt(`N°  mensagens: `));

let metade = alunos * 0.5

if (mensagem > metade ){
    console.log(`Parabéns ${nome}! Você é bem popular`);
}else if (mensagem < metade){
    console.log(`Que pena: ${nome}! Você não é popular`);
}