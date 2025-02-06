let menu = ""
let pacientes = []

do {
    
    let paciente = ""
    for (let i = 0; i < pacientes.length; i++) {
        paciente += (i + 1) + " - " + pacientes[i] + "\n"      
    }


    menu = prompt(
        "Bem-Vindos ao Consultório Unimed \n\n" +
        "Fila de Espera \n" +
         paciente + "\n" +

        "\n Escolha uma opção: " +
        "\n 1- Novo Paciente " +
        "\n 2- Consultar Paciente " +
        "\n 3 - Sair"
    )

    switch (menu) {
        case "1":
            paciente = prompt("Escreva o nome do novo paciente:")
            pacientes.push(paciente)
            alert("Paciente adicionado com sucesso !!! ")
            break;
        case "2":
            if (pacientes.length > 0) {
                paciente = pacientes.shift() // Remove o primeiro paciente da fila
                alert("O Paciente: " + paciente + " foi consultado !!!");
            } else {
                alert("Não há pacientes na fila!!!");
            }
            break;
        case "3":
            alert("Saindo.....")    
            break;
        default:
            alert("Opção inválida !!")
            break;
    }
} while (menu !== "3");