function addPlayer() {
    const namePlayer = document.getElementById('name').value
    const position = document.getElementById('position').value
    const numberShirt = document.getElementById('number-shirt').value

    // Verifica se os campos estão preenchidos
    if (namePlayer === "" || position === "" || numberShirt === "") {
        alert("Preencha todos os campos abaixo!")
        return
    }

    // Verifica se já existe um jogador com esse número
    if (document.getElementById('player' + numberShirt)) {
        alert("Já existe um jogador com esse número de camisa!")
        return
    }

    // Criar elemento da lista
    const playerList = document.createElement('li')
    playerList.id = 'player' + numberShirt
    playerList.innerHTML = `
        <h4>Jogador: <span>${namePlayer}</span></h4>
        <h4>Posição: <span>${position}</span></h4>
        <h4>Número da Camisa: <span>${numberShirt}</span></h4>
        <button onclick="removePlayer(${numberShirt})">Remover</button>
    `

    // Confirmação antes de adicionar
    const confirma = confirm(
        `Deseja escalar esse jogador? \n\nJogador: ${namePlayer} \nPosição: ${position} \nNúmero da Camisa: ${numberShirt}`
    )

    if (confirma) {
        document.getElementById('contact-players').appendChild(playerList)
    }

    clearFields()
}

function removePlayer(numberShirt) {
    const playerToRemove = document.getElementById('player' + numberShirt)

    if (!playerToRemove) {
        alert("Jogador não encontrado!")
        return
    }

    const excluir = confirm("Deseja remover esse jogador?")

    if (excluir) {
        playerToRemove.remove()
    }
}

function clearFields() {
    document.getElementById('name').value = ""
    document.getElementById('position').value = ""
    document.getElementById('number-shirt').value = ""
}
