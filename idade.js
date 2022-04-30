// Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade
// dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias.

const prompt = require("prompt-sync")();

const anos = Number(prompt("Escreva sua idade (somente em anos) "));
const meses = Number(prompt("Escreva sua idade (somente em meses) "));
const dias = Number(prompt("Escreva sua idade (somente em dias) "));

var diasa = anos * 365
var mesesa = meses * 30
var total = diasa + mesesa + dias;

console.log(`O total da sua idade em dias é: ${total}`)
