// Área do triângulo
function calcularAreaTriangulo() {
    let base = parseFloat(prompt("Digite o valor da base do Triângulo: "))
    let altura = parseFloat(prompt("Digite o valor da altura do Triângulo: "))
    return (base * altura) / 2
}

// Área do Retângulo
function calcularAreaRetangulo() {
    let base = parseFloat(prompt("Digite o valor da base do Retângulo: "))
    let altura = parseFloat(prompt("Digite o valor da altura do Retângulo: "))
    return base * altura
}

// Área do Quadrado
function calcularAreaQuadrado() {
    let lado = parseFloat(prompt("Digite o valor do lado do Quadrado: "))
    return lado * lado
}

// Área do Trapézio
function calcularAreaTrapezio() {
    let baseMaior = parseFloat(prompt("Digite o valor da base maior do Trapézio: "))
    let baseMenor = parseFloat(prompt("Digite o valor da base menor do Trapézio: "))
    let altura = parseFloat(prompt("Digite o valor da altura do Trapézio: "))
    return (baseMaior + baseMenor) * altura / 2
}

// Área do Circulo
function calcularAreaCirculo() {
    let raio = parseFloat(prompt("Digite o valor do raio do Círculo: "))
    return 3.14 * raio * raio
}

let menu = ""

do {

    menu = prompt(
        "Calculadora Geométrica \n\n" +

        "Escolha uma opção: \n" +
        "\n 1- Calcular área do triângulo " +
        "\n 2- Calcular área do retângulo " +
        "\n 3- Calcular área do quadrado " +
        "\n 4- Calcular área do trapézio " +
        "\n 5- Calcular área do círculo" +
        "\n 6- Sair" 
    )

    switch (menu) {
        case "1":           
            alert("A Área do Triângulo é igual a " + calcularAreaTriangulo()) 
            break;
        case "2":
            alert("A Área do Retângulo é igual a " + calcularAreaRetangulo())
            break;
        case "3":
            alert("A Área do Quadrado é igual a " + calcularAreaQuadrado())
            break;
        case "4":
            alert("A Área do Trapézio é igual a " +  calcularAreaTrapezio())
            break;
        case "5":
            alert("A Área do Círculo é igual a " +  calcularAreaCirculo())
            break;
        case "6":
            alert("Saindo...")
            break;                
        default:
            alert("Opção inválida !!!")
            break;
    }
    
} while (menu !== "6");