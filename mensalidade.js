const prompt = require("prompt-sync")()

const mensalidade = Number(prompt(`Mensalidade: `));

let anuidade = mensalidade * 12
let desc = anuidade * 0.2
let total = anuidade - desc

console.log(`Anuidade: ${anuidade.toFixed(2)}`);
console.log(`Para pagamento adiantado R$: ${total.toFixed(2)}`);