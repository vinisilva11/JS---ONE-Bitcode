const numero =  parseFloat(prompt("Insira um número:"))

let resultado = ""

for (let index = 1; index <= 20; index++) {
    resultado += " - " + numero + "X" + index + " = " + (numero * index) + "\n"
}

alert(
    "Tabuada do "+ numero + ":\n\n" + resultado
)

