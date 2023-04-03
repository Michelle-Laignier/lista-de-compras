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

    let lista = document.querySelector(".lista")
    
    //let buttonRemove = document.querySelector(".button-remove")
    let itemP = document.querySelector(".lista-produto")
    let quantidade = document.querySelector(".lista-quantidade")

    if (localStorage.itens) {
        itens.forEach(item => { //esse forEach resolve o problema do [object Object]
            itens = item;
            console.log(itens = item);

            let newDiv = document.createElement("div")
            newDiv.classList.add("lista-div")
                
            for (let item in itens) {
                let itemP = document.createElement("p")
                itemP.classList.add("lista-produto")
                itemP.textContent = itens[item]

                lista.append(newDiv)
                newDiv.append(itemP)
            }
        });
    } else if (localStorage.length <= 0) {
        alert("Não há itens salvos. " + "Preencha os campos e clique em 'Adicionar item'.")
    }
}
