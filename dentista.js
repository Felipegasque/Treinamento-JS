const prompt = require("prompt-sync")();

const pacientes = Number(prompt(`Informe o n° de pacientes: `));

if (pacientes <= 5){
    console.log(`Dentista A irá atender ${pacientes}`)
}else if (pacientes >5){
    let dentea = pacientes / 2 
    let denteb = pacientes / 2
    console.log(`O dentista A: ${Math.floor(dentea)}`) //O MATH.FLOOR SERVE PARA AREDONDAR PARA CIMA
    console.log(`O dentista B: ${Math.ceil(denteb)}`) //O MATH.CEIL SERVE PARA AREDONDAR PARA BAIXO
    
}
  
