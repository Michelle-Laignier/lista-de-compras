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
buttonLoad.addEventListener("click", carregarItensSalvos)

function carregarItensSalvos () {

    let newDiv = document.querySelector(".new-div")
    newDiv.classList.add("lista-div")
    //let buttonRemove = document.querySelector(".button-remove")

    if (localStorage.itens) {
        itens.forEach(item => { //esse forEach resolve o problema do [object Object]
            itens = item;
            console.log(itens = item);
        });
    }

    for (let item in itens) {
        let itemP = document.createElement("p")
        itemP.classList.add("lista-produto")
        itemP.textContent = itens[item]
        newDiv.append(itemP)
    }
}
