let buttonRemove = document.getElementsByClassName("button-remove");

for (let i = 0; i < buttonRemove.length; i++) {
    let button = buttonRemove[i] //encontra cada botao de x
    button.addEventListener("click", removeLinha)
    button.addEventListener("click", removerItensDoLocalStorage)
}

function removeLinha(event) {

    let buttonRemoveClicked = event.target //target: qualquer botao que for clicado
    buttonRemoveClicked.parentElement.remove();
}

//////////////////////////////////////////////////////////////////////
let buttonAdd = document.querySelector(".button-add")
buttonAdd.addEventListener("click", adicionaLinha)

function adicionaLinha () {

    let lista = document.querySelector(".lista")

    let newDiv = document.createElement("div")
    let newInputCheck = document.createElement("input")
    let newInputNumber = document.createElement("p") //(se não ficarem dentro da função
    let newInputText = document.createElement("p") //as barras de input não aparecem)
    let newButton = document.createElement("button")

    newInputCheck.type = "Checkbox"

    newInputNumber.type = "number"
    newInputNumber.placeholder = "Quantidade"

    newInputText.type = "text"
    newInputText.placeholder = "Item"

    newButton.textContent = "Remover"

    newDiv.classList.add("lista-div")
    newInputCheck.classList.add("lista-check")
    newInputNumber.classList.add("lista-quantidade")
    newInputText.classList.add("lista-produto")
    newButton.classList.add("button-remove")

    if (inputNumber.value == "" && inputText.value == "") {
        alert("Preencha pelo menos um dos campos")
    } else if (inputText.value == "") {
        alert("Preencha o campo 'item'")
    } else {
        lista.appendChild(newDiv)
        newDiv.appendChild(newInputCheck)
        newDiv.appendChild(newInputNumber)
        newDiv.appendChild(newInputText)
        newDiv.appendChild(newButton)
    }

    newButton.addEventListener("click", removeLinha)

    //pra aparecer nos campos novos os valores digitados nos inputs
    newInputNumber.textContent = inputNumber.value
    newInputText.textContent = inputText.value
}
console.log(buttonRemove);
