const nome = prompt("Qual é seu nome ?")
const sobreNome = prompt("Qual é seu sobrenome ?")
const profissao = prompt("Qual é a sua profissão")
const anoDeNascimento = parseFloat(prompt("Qual o ano do seu nascimento ?"))

alert("- Nome do Recruta: " + nome + " " + sobreNome + "\n" +
      "- Profissão: " + profissao + "\n" + 
      "- Idade: " + (2025 - anoDeNascimento) + " anos "
)
