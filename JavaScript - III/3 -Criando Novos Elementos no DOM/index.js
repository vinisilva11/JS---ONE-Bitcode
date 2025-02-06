function addInput() {
    // Obtém o elemento <ul> pelo ID "inputs"
    const ul = document.getElementById('inputs')

    // Cria um novo elemento <li> e adiciona uma classe CSS
    const newLi = document.createElement('li')
    newLi.className = 'list-item'
    newLi.innerText = 'Novo input: ' // Define o texto dentro do <li>

    // Cria um novo elemento <input> do tipo "text"
    const newInput = document.createElement('input')
    newInput.type = 'text' // Define o tipo do input como texto
    newInput.name = 'input' // Define o atributo "name" do input

    // Adiciona o input dentro do <li> e depois adiciona o <li> dentro do <ul>
    newLi.appendChild(newInput)
    ul.appendChild(newLi)

}
