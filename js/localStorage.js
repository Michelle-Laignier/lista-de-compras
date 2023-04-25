let itens = JSON.parse(localStorage.getItem("itens")) || []

let inputNumber = document.getElementById("quantidade")
let inputText = document.getElementById("produto")
let newInputNumber = document.querySelector(".lista-quantidade")
let newInputText = document.querySelector(".lista-produto")

buttonAdd.addEventListener("click", salvarNoLocalStorage)

function salvarNoLocalStorage () {
    
    newInputNumber.textContent = inputNumber.value
    newInputText.textContent = inputText.value

    const itemAtual = {
        "quantidade": newInputNumber.textContent,
        "item": newInputText.textContent
    }

    if (inputNumber.value != "" && inputText.value != "") {
        itens.push(itemAtual)
        localStorage.setItem("itens", JSON.stringify(itens))
    } else if (inputNumber.value == "" && inputText.value != "") {
        itens.push(itemAtual)
        localStorage.setItem("itens", JSON.stringify(itens))
    } else {
        return
    }
}

let buttonLoad = document.getElementById("button-load")
buttonLoad.addEventListener("click", carregarItensSalvosNoLocalStorage)

function carregarItensSalvosNoLocalStorage () {

    let lista = document.querySelector(".lista")

    if (localStorage.itens) {
        for (let i = 0; i < itens.length; i++) {
            let item = itens[i];

            let newDiv = document.createElement("div")
            newDiv.classList.add("lista-div")
            newDiv.dataset.itemIndex = i;

            let inputCheck = document.createElement("input")
            inputCheck.type = "checkbox"
            inputCheck.classList.add("lista-check-new")

            let buttonRemove = document.createElement("button")
            buttonRemove.textContent = "X"
            buttonRemove.classList.add("button-remove")
            buttonRemove.dataset.itemIndex = i;

            let qtdP = document.createElement("p")
            qtdP.classList.add("lista-produto")
            qtdP.textContent = item.quantidade
                
            let itemP = document.createElement("p")
            itemP.classList.add("lista-produto")
            itemP.textContent = item.item

            lista.append(newDiv)
            newDiv.append(inputCheck)
            newDiv.append(qtdP)
            newDiv.append(itemP)
            newDiv.append(buttonRemove)

            buttonRemove.addEventListener("click", removeItem)
            buttonRemove.addEventListener("click", removeLinha)
        }
    } else if (localStorage.length == "0") {
        alert("Não há itens salvos. " + "Preencha os campos e clique em 'Adicionar item'.")
    }
}

function removeItem(event) {
    const button = event.target;
    const itemIndex = button.dataset.itemIndex;

    // Remove o item do local storage com base no índice
    removerItensDoLocalStorage(itemIndex);
}

function removerItensDoLocalStorage (itemIndex) {

    let itensGet = localStorage.getItem("itens")
    let itensParse = JSON.parse(itensGet)
    itensParse.splice(itemIndex, 1)
    localStorage.setItem("itens", JSON.stringify(itensParse))
}
