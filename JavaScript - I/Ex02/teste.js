const veiculo1 = prompt("Nome do primeiro véiculo: ")
const velocidade1 = parseFloat(prompt("Velocidade total primeiro véiculo: "))

const veiculo2 = prompt("Nome do segundo véiculo: ")
const velocidade2 = parseFloat(prompt("Velocidade total segundo véiculo: "))

if (velocidade1 > velocidade2) {
    alert("O" + veiculo1 + " é " + (velocidade1 - velocidade2) + "KM mais rápido que o " + veiculo2 )
} else if (velocidade2 > velocidade1) {
    alert ("O  " + veiculo2 + " é " + (velocidade2 - velocidade1) + "KM mais rápido que o " + veiculo1 )
} 
else {
    alert("Ambos os veículos possuem a mesma velocidade!!")
}