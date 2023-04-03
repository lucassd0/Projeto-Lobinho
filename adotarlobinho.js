import lobijason from './lobinhos.json' assert { type: 'json' };

var lobinhos = JSON.parse(JSON.stringify(lobijason))
var id_lobo = document.cookie.slice(3)

var btn_adotar = document.querySelector(".btn_adotar")

function show_lobo() {
    let lobo = get_lobobyId()
    let nome_lobo = document.querySelector(".nome_lobo")
    nome_lobo.innerText = lobo.nome

    let img_lobo = document.querySelector(".img_lobo")
    img_lobo.style.backgroundImage = "url('" + lobo.imagem + "')"

    let lobo_id = document.querySelector(".lobo_id")
    lobo_id.innerText = "ID:" + lobo.id
}

function adotar_lobo() {
    let input_nome = document.querySelector(".input_nome")
    let input_idade = document.querySelector(".input_idade")
    let input_email = document.querySelector(".input_email")

    let lobo = get_lobobyId()
    
    if(input_nome.value != "" && input_idade.value != "" && input_email.value != ""){
        lobo.adotado = true
        lobo.nomeDono = input_nome.value
        lobo.idadeDono = input_idade.value 
        lobo.emailDono = input_email.value
    }

    input_nome.value = ""
    input_idade.value = ""
    input_email.value = ""

    console.log(lobo)
}

function get_lobobyId() {
    let lobo = lobinhos.find(lobo => lobo.id === parseInt(id_lobo))
    return lobo
}

btn_adotar.addEventListener("click", adotar_lobo)

show_lobo()