const metros = parseFloat(prompt("Insira a medida em metros: "))

const medidas = parseFloat(prompt(
    "Qual unidade de medida você quer converter ? " +
    "\n 1- milímetro" +
    "\n 2- centímetro" +
    "\n 3- decímetro" +
    "\n 4- decâmetro" +
    "\n 5- hectômetro" +
    "\n 6- quilômetro" 
))

switch (medidas) {
    case 1:
        const milimetro = metros * 1000
        alert(metros + "m em milímetros = " + milimetro + "mm")
        break;
    case 2:
        const centimetro = metros * 100
        alert(metros + "m em centímetros = " + centimetro + "cm")
        break;
    case 3:
        const decimetro = metros * 10
        alert(metros + "m em decímetro = " + decimetro + "dm")
        break;
    case 4:
        const decametro = metros / 10
        alert(metros + "m em decâmetro = " + decametro + "dam")
        break;
    case 5:
        const hectometro = metros / 100
        alert(metros + "m em hectômetro = " + hectometro + "hm")
        break;
    case 6:
        const quilometro = metros / 1000
        alert(metros + "m em quilômetro = " + quilometro + "km")
        break;    
    default:
        alert("Opção inválida !!!")
        break;
}