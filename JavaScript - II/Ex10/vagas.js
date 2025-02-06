const lista = []

// LISTAR VAGAS DISPONÍVEIS
function exibirVagas() {
    if (lista.length <= 0) {
       alert("Não possui vagas cadastradas")
       return
    }

    let mostrarVaga = ""
    for (let i = 0; i < lista.length; i++) {
        mostrarVaga += 
            "\n-------------------------------------\n" +
            "Vaga " + (i + 1) +
            "\nNome da Vaga: " + lista[i].nomeVaga +
            "\nDescrição: " + lista[i].descricao +
            "\nData Limite: " + lista[i].data +
            "\nCandidatos: " + lista[i].candidatos.length + "\n"
    }

    alert("Exibindo Vagas Cadastradas \n\n" + mostrarVaga)
}

// CRIAR UMA NOVA VAGA
function criarVaga() {
    const vaga = {
        nomeVaga: prompt("Digite o nome da Vaga que deseja criar ?"),
        descricao: prompt("Descreva sobre o que é a vaga ?"),
        data: prompt("Insira a Data Limite que a vaga estará disponível"),
        candidatos: []
    }

    const confirma = confirm(
        "Deseja salvar esta vaga?\n" +
        "\n Nome da Vaga: " + vaga.nomeVaga +
        "\n Descrição da Vaga: " + vaga.descricao +
        "\n Data Limite: " + vaga.data
    )

    if (confirma) {
        lista.push(vaga);
        alert("A Vaga Foi salva com Sucesso")
    } else {
        alert("Voltando ao Menu");
    }
}

// VISUALIZAR UMA VAGA
function visualizarVaga() {
    const indice = parseInt(prompt("Insira o número da vaga que você deseja visualizar")) - 1

    if (indice < 0 || indice >= lista.length) {
        alert("Vaga não encontrada!")
        return
    }

    const verVaga = lista[indice]

    let mensagem = "Vaga " + (indice + 1) +
                   "\nNome da Vaga: " + verVaga.nomeVaga +
                   "\nDescrição: " + verVaga.descricao +
                   "\nData Limite: " + verVaga.data +
                   "\nQuantidade de candidatos: " + verVaga.candidatos.length

    if (verVaga.candidatos.length > 0) {
        for (let i = 0; i < verVaga.candidatos.length; i++) {
            mensagem += "\nCandidato " + (i + 1) + ": " + verVaga.candidatos[i]      
        }
    } else {
        mensagem += "\nNenhum candidato cadastrado!"
    }
    alert(mensagem)
}

// INSCRIÇÃO DE CANDIDATO
function inscreverCandidato() {
    if (lista.length <= 0) {
        alert("Não possui vagas cadastradas")
        return;
    }

    const indice = parseInt(prompt("Insira o número da vaga que deseja adicionar")) - 1
    
    if (indice < 0 || indice >= lista.length) {
        alert("Índice inválido!")
        return
    }

    const nomeCandidato = prompt("Insira o nome do candidato: ")

    lista[indice].candidatos.push(nomeCandidato)
    alert("O candidato " + nomeCandidato + " foi adicionado com sucesso!")
}

function excluirVaga() {
    if (lista.length <= 0) {
        alert("Não possui vagas cadastradas")
        return  // Interrompe a execução
    }

    const indice = parseInt(prompt("Insira o índice da vaga que deseja excluir:")) - 1
    
    if (indice < 0 || indice >= lista.length) {
        alert("Índice inválido !!");
        return  // Interrompe a execução
    }

    // Armazena os dados da vaga antes da exclusão
    const vaga = lista[indice]

    const excluir = confirm(
        "Deseja excluir esta vaga?\n" +
        "\n Nome da Vaga: " + vaga.nomeVaga +
        "\n Descrição da Vaga: " + vaga.descricao +
        "\n Data Limite: " + vaga.data
    )

    if (excluir) {
        lista.splice(indice, 1)
        alert("A vaga " + vaga.nomeVaga + " foi removida")
    }
}


function exibirMenu() {
    return prompt(
    "Lista de Vagas de Emprego \n" +
    "1. Vagas Disponíveis\n" +
    "2. Criar uma nova vaga\n" +
    "3. Visualizar uma vaga\n" +
    "4. Inscrever candidato em uma nova vaga\n" +
    "5. Excluir vaga\n" +
    "6. Sair\n"
  )
}

function executar() {
    let menu = ""

    do {
        menu = exibirMenu()

        switch (menu) {
            case "1":
                exibirVagas()
                break;
            case "2":
                criarVaga()
            break;
            case "3":
                visualizarVaga()
            break; 
            case "4":
                inscreverCandidato()
            break; 
            case "5":
                excluirVaga()
            break; 
            case "6":
                alert("Saindo....")
            break;             
            default:
                alert("Opção inválida !!!")
                break;
        }
        
    } while (menu !== "6")
}

executar()