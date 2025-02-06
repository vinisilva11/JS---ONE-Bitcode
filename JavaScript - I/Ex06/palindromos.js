let palavra = prompt("Escreva uma palavra:")

let reverse = ""
for (let i = palavra.length - 1; i >=0; i--) {
       reverse += palavra[i]    
}

if (reverse === palavra) {
    alert("A palavra " + palavra + 
        " é um Palíndromo")  
  } else {
    alert("A palavra " + palavra + 
        "\n não é um Palíndromo: " + reverse)
  }

