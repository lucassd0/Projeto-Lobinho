import lobijason from './lobinhos.json' assert { type: 'json' };

var lobinhos = JSON.parse(JSON.stringify(lobijason))
var id_lobo = document.cookie.slice(3)
var btn_adotar = document.querySelector(".btn_adotar")
var btn_excluir = document.querySelector(".btn_excluir")

function show_lobo() {
    let lobo = get_lobobyId()
    let nome_lobo = document.querySelector(".nome_lobo")
    nome_lobo.innerText = lobo.nome

    let img_lobo = document.querySelector(".img_lobo")
    img_lobo.style.backgroundImage = "url('" + lobo.imagem + "')"

    let descricao_lobo = document.querySelector(".descricao_lobo")
    descricao_lobo.innerText = lobo.descricao
}

function get_lobobyId() {
    let lobo = lobinhos.find(lobo => lobo.id === parseInt(id_lobo))
    return lobo
}

btn_adotar.addEventListener("click", () => {
    document.cookie = "id=" + id_lobo + "; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/";
    window.location.href = "adotarlobinho.html"
})

btn_excluir.addEventListener("click", () => {
    lobinhos.splice(id_lobo-1, 1)
})

show_lobo()