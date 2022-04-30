const prompt = require("prompt-sync")()

const nome = prompt(`Informe o seu nome: `);
const Doacao = Number(prompt(`Doação: `));

if (Doacao >=100){
    console.log(`${nome}, As bebidas são cortesia do evento`)
}
if (Doacao <=99){
    console.log(`${nome}, As bebidas são por sua conta`)
}
