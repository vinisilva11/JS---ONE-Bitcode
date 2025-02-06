let menu = ""
let baralho = []

do {
    
    menu = prompt(
        "Bem- Vindo ao Poker Stars \n\n" +
        "Cartas Disponíveis: " + baralho.length + "\n" +

        "\n Escolha uma opção: " +
        "\n 1- Adicionar uma Carta " +
        "\n 2- Puxar uma Carta " +
        "\n 3 - Sair"
    )

    switch (menu) {
        case "1":
            cartas = prompt("Qual a carta que você deseja adicionar ao baralho ?")
            baralho.push(cartas)
            alert("Carta adiconada ao baralho !!!")
            break;
        case "2":
            if (baralho.length > 0) {
                cartas = baralho.shift() // Remove a carta no topo do baralho
                alert(cartas + " foi removida do baralho !!")
            } else {
                alert("Não possui mais cartas no baralho !!!")
            }
            break;  
        case "3":
            alert("Saindo....")    
             break;
        default:
            alert("Opção inválida !!!")
            break;
    }
} while (menu !== "3")