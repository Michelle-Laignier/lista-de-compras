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
        itens.forEach(item => { //esse forEach resolve o problema do [object Object]
            itens = item;

            let newDiv = document.createElement("div")
            newDiv.classList.add("lista-div")

            let inputCheck = document.createElement("input")
            inputCheck.type = "checkbox"
            inputCheck.classList.add("lista-check-new")

            let buttonRemove = document.createElement("button")
            buttonRemove.textContent = "Remover"
            buttonRemove.classList.add("button-remove")
                
            for (let item in itens) {
                let itemP = document.createElement("p")
                itemP.classList.add("lista-produto")
                itemP.textContent = itens[item]

                lista.append(newDiv)
                newDiv.append(inputCheck)
                newDiv.append(itemP)
                newDiv.append(buttonRemove)

                buttonRemove.addEventListener("click", removeLinha)
                buttonRemove.addEventListener("click", removerItensDoLocalStorage)
                console.log(buttonRemove);
            }
        });
    } else if (localStorage.length <= 0) {
        alert("Não há itens salvos. " + "Preencha os campos e clique em 'Adicionar item'.")
    }
}


function removerItensDoLocalStorage () {

    let itensGet = localStorage.getItem("itens")
    let itensParse = JSON.parse(itensGet)
    itensParse.splice(itens, 1) //qual botao/elemento?
    localStorage.setItem("itens", JSON.stringify(itensParse))

}
