let menu = ""
let cadastro = []

do {
     menu = prompt(
       "Bem Vindo a Imovini \n\n" +
       "Imóveis cadastrados: " + cadastro.length + "\n\n" +

        "Escolha uma opção: " +
        "\n 1- Salvar um Imóvel " +
        "\n 2- Imóveis Salvos " +
        "\n 3- Sair"

     )

    switch (menu) {
        case "1":
            const proprietario = {
                nome: prompt("Nome do proprietário: "),
                qtdeQuartos: parseInt(prompt("Quantidade de quartos ?")),
                qtdeBanheiros: parseInt(prompt("Quantidade de banheiros ?")),
                possuiGaregem: prompt("Possui garagem (Sim/Não) ?")
            }

            const confirma = confirm(
                "Salvar este imóvel?\n" +
                "\nProprietário: " + proprietario.nome +
                "\nQuartos: " + proprietario.qtdeQuartos +
                "\nBanheiros: " + proprietario.qtdeBanheiros +
                "\nPossui Garagem? " + proprietario.possuiGaregem
              )
            
              if (confirma) {
                cadastro.push(proprietario)     
              }
            
            alert("Imóvel cadastrado com sucesso !!!")
            break;
            case "2":
                if (cadastro.length <= 0) {
                    alert("Não possui imóveis salvos aqui !")
                } else {
                    let imoveis = ""
                    for (let i = 0; i < cadastro.length; i++) {
                        imoveis += 
                         "\n- Proprietário " + (i + 1) +
                         "\n Nome: " + cadastro[i].nome +
                        "\n Quantidade de quartos: " + cadastro[i].qtdeQuartos +
                        "\n Quantidade de banheiros: " + cadastro[i].qtdeBanheiros +
                        "\n Possui Garagem: " + cadastro[i].possuiGaregem  + "\n" 
                    }

                    alert("Imóveis salvos \n\n" + imoveis)   
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