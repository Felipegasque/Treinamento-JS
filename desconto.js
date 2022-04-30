const prompt = require("prompt-sync")();

const preço = Number(prompt("informe o preço: "));
const desconto = Number(prompt("Quanto voce recebeu de desconto? "));

var desctotal = preço * desconto/100
var valorFinal = preço - desctotal

console.log(`Seu salário ajustado é  ${valorFinal} `)