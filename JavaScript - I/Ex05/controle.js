let dinheiro = parseFloat(prompt("Qual é a quantidade de dinheiro disponível ?"))

let caixa

do {
    caixa = prompt(
        "Quantidade de dinheiro disponível: R$" + dinheiro + "\n" +
        "\n 1- Adicionar Dinheiro" +
        "\n 2- Remover Dinheiro" +
        "\n 3- Sair"
    )

    switch (parseFloat(caixa)) {
        case 1:
            let adicionar = parseFloat(prompt("Quanto de dinheiro você quer adicionar?"))
            dinheiro += adicionar
            break;
        case 2:
            let remover = parseFloat(prompt("Quanto de dinheiro você quer remover?"))
            if (remover > dinheiro) {
                alert("Você não pode mais remover mais dinheiro")
            } else {
                dinheiro -= remover
            }
            break;
        case 3:
            alert("Saindo...")    
            break;    
        default:
            alert("Opção inválida!!!")
            break;
    }

} while (caixa !== "3");