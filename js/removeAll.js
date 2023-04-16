const buttonRemoveAll = document.getElementById("button-remove-all")
const aviso = document.querySelector(".aviso-nao-ativo")
const naoButton = document.querySelector(".nao-button")
const simButton = document.querySelector(".sim-button")

buttonRemoveAll.addEventListener("click", () => {
    if (localStorage.length <= 0) {
        alert("Não há itens salvos. " + "Preencha os campos e clique em 'Adicionar item'.")
    } else {
        aviso.classList.add("aviso-ativo")
    }
})

naoButton.addEventListener("click", () => {
    aviso.classList.remove("aviso-ativo")
})

simButton.addEventListener("click", () => {
    localStorage.clear()
    aviso.classList.remove("aviso-ativo")
    location.reload()
})
