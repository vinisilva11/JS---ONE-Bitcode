const personagem1 = prompt("Insira o nome do personagem: ")
const attack = parseFloat(prompt("Poder de ataque do personagem: "))

const personagem2 = prompt("Insira o nome do outro personagem: ")
let life = parseFloat(prompt("Quantidade de pontos de vida: "))
const defense = parseFloat(prompt("Poder de Defesa do personagem: "))
let shield = prompt("O personagem possui escudo(Sim ou Não):")

// Dano causado
let dano = 0

if (attack > defense && shield === "Não" ) {
    dano = (attack - defense)
} else if (attack > defense && shield === "Sim") {
    dano = (attack - defense) / 2
}

// Subtrai os pontos de vida pelo dano causado
life -= dano

alert("O dano causado no personagem foi de " + dano )

alert ("Resultados \n" +
       "\n - Quantidade de pontos vida do " + personagem2 + " é de " + life + " pontos" +
       "\n - Quantidade de dano causado pelo atacante: " + dano +
       "\n - Personagem: " + personagem1 + 
       "\n - Poder de ataque: " + attack + "\n" +
       "\n - Personagem: " + personagem2 + 
       "\n Pontos de vida do " + personagem2 + ":" + life +
       "\n Possui escudo: " + shield
)