const prompt = require("prompt-sync")();

const conta = Number(prompt(`Informe o valor da Conta: `));
const pago = Number(prompt(`Quanto vc pagou?: `));

let troco = conta - pago

if( pago < conta){
    console.log(`Ops Faltou ${troco.toFixed(2)}`)
} else if(pago == conta ){
    console.log(`Obrigado volte sempre`)
} else if(pago > conta){
    console.log(`Seu troco é ${Math.abs(troco).toFixed(2)}`)
}
    