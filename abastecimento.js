const prompt = require("prompt-sync")()

const preco = Number(prompt(`Litro do combustivel: `));
const abastecido = Number(prompt(`Abastecer R$: `));

let total = abastecido / preco  

console.log(` Você abasteceu ${total.toFixed(2)} Litros`)

if (total >=20){
    console.log(`Você ganhou uma lavagem gratis`)
}

