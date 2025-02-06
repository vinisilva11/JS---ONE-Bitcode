let menu

do {
    menu = prompt(
        "Bem Vindo !!! \n" +
        "\n 1- Home" +
        "\n 2- Sobre" +
        "\n 3- Produtos" +
        "\n 4- Contato" +
        "\n 5- Encerrar"
    )

    switch (parseFloat(menu)) { // Convertemos o input para um número
        case 1:
            alert("Você clicou na página Home ")
            break;
        case 2:
            alert("Você clicou na página Sobre ")
            break;
        case 3:
            alert("Você clicou na página Produtos ")
            break;
        case 4:
            alert("Você clicou na página Contato ")
            break;
        case 5:
            alert("Encerrando... ");
            break;              
        default:
            alert("Opção inválida!!")
            break;
    }
} while (menu !== 5); // Continua enquanto a opção não for '5'