let buttonRemove = document.getElementsByClassName("button-remove");

for (let i = 0; i < buttonRemove.length; i++) {
    let button = buttonRemove[i] //encontra cada botao de x
    button.addEventListener("click", removeLinha)
}

function removeLinha(event) {

    let buttonRemoveClicked = event.target //target: qualquer botao que for clicado
    buttonRemoveClicked.parentElement.remove();
}

let buttonAdd = document.querySelector(".button-add")

buttonAdd.addEventListener("click", adicionaLinha)

function adicionaLinha () {

    let lista = document.querySelector(".lista")

    let newDiv = document.createElement("div")
    let newInputCheck = document.createElement("input")
    let newInputNumber = document.createElement("input") //(se não ficarem dentro da função
    let newInputText = document.createElement("input") //as barras de input não aparecem)
    let newButton = document.createElement("button")

    newInputCheck.type = "Checkbox"

    newInputNumber.type = "number"
    newInputNumber.placeholder = "Quantidade"

    newInputText.type = "text"
    newInputText.placeholder = "Item"

    newButton.textContent = "Remover"

    lista.appendChild(newDiv)
    newDiv.appendChild(newInputCheck)
    newDiv.appendChild(newInputNumber)
    newDiv.appendChild(newInputText)
    newDiv.appendChild(newButton)

    newDiv.classList.add("lista-div")
    newInputCheck.classList.add("lista-check")
    newInputNumber.classList.add("lista-quantidade")
    newInputText.classList.add("lista-produto")
    newButton.classList.add("button-remove")

    newButton.addEventListener("click", removeLinha)
}
