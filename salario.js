//algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste.
// Calcular e escrever o valor do novo salário.

const prompt = require("prompt-sync")();

const salario = Number(prompt("informe o seu salario: "));
const reajuste = Number(prompt("Quanto voce recebeu de reajuste? "));

var valjust = salario * reajuste/100
var valorFinal = salario + valjust

console.log(`Seu salário ajustado é  ${valorFinal} `)
