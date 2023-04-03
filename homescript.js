import lobijason from './lobinhos.json' assert { type: 'json' };

var lobinhos = JSON.parse(JSON.stringify(lobijason))
var lobosexemplo = document.querySelector(".lobosexemplo")
var direcao = 1

function create_lobo() {
    let lobo = get_lobo()

    let card_lobo = document.createElement("div")
    let img_lobo = document.createElement("div")
    let dados_lobo = document.createElement("div")

    let nome_lobo = document.createElement("h3")
    let idade_lobo = document.createElement("h4")
    let descricao_lobo = document.createElement("p")

    img_lobo.style.backgroundImage = "url('" + lobo.imagem + "')"
    img_lobo.classList.add("lobo_imagem")
    nome_lobo.innerText = lobo.nome
    nome_lobo.addEventListener("click", () => {
        document.cookie = "id=" + lobo.id + "; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/";
        window.location.href = "showlobinho.html"
    })
    idade_lobo.innerText = "Idade: " + lobo.idade + " anos"
    descricao_lobo.innerText = lobo.descricao

    dados_lobo.classList.add("dados_lobo")
    dados_lobo.append(nome_lobo)
    dados_lobo.append(idade_lobo)
    dados_lobo.append(descricao_lobo)

    card_lobo.classList.add("card_lobo")
    if(direcao == 1){
        card_lobo.id = "left_card"
        card_lobo.append(img_lobo)
        card_lobo.append(dados_lobo)
        direcao *= -1
    }else{
        card_lobo.id = "right_card"
        card_lobo.append(dados_lobo) 
        card_lobo.append(img_lobo)  
        direcao *= -1
    }

    lobosexemplo.append(card_lobo)
 }

function get_lobo() {
    let pos = Math.floor(Math.random() * (1001 - 1 + 1) + 1)
    let lobo = lobinhos[pos]
    return lobo
}

create_lobo()
create_lobo()
