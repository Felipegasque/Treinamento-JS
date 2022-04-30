const prompt = require("prompt-sync")()

const candidato = prompt(`Informe o seu nome: `);
const acertos = Number(prompt(`Informe o N° de acertos: `));

if (acertos >=20 && acertos<=30){
    console.log(`${candidato} Você precisa fazer um teste complementar`)
}
if (acertos <=19 && acertos<=30){
    console.log(`${candidato} Você precisa Refazer`)
}
if (acertos >=30 && acertos<=50){
    console.log(`${candidato} Você passou`)
}