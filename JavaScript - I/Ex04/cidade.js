const nome = prompt("Bem Vindo, Turista: " +
                    "\n Escreva seu nome:")

let question = prompt("Você ja visitou alguma cidade: Sim ou Não ?")

let cidades = "" 
let contador = 0

while (question === "Sim") {
    let cidade = prompt("Qual cidade você visitou ?")
    cidades += " - " + cidade + "\n"
    contador++

    // Pergunta se ele ja visitou outra cidade
    question = prompt("Você ja visitou outra cidade: Sim ou Não ?")
}

alert(
    "O turista " + nome + " visitou aproximadamente: " + contador + " cidades" +
    "\n Cidades visitadas: \n" + cidades 
)