const prompt = require("prompt-sync")()

    const produto1 = (prompt("produto: "))
    const preco1 = Number(prompt("preço: "))

    const produto2 = (prompt("produto: "))
    const preco2 = Number(prompt("preço: "))

    const produto3 = (prompt("produto: "))
    const preco3 = Number(prompt("preço: "))

    const precos1dc = Math.floor(preco1)
    const precos2dc = Math.floor(preco2)
    const precos3dc = Math.floor(preco3)

    var calc = preco1 + preco2 + preco3

    let calculo = precos1dc + precos2dc + precos3dc

    console.log(`o valor total é R$: ${calc}`)
    console.log(`o valor com desconto é R$: ${calculo}`)

    // console.log(`Voce ganhou um desconto, o preço agora é R$: ${Math.floor(precos)}`) //O MATH.CEIL SERVE PARA AREDONDAR PARA BAIXO