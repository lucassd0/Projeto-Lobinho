import lobijason from './lobinhos.json' assert { type: 'json' };

var lobinhos = JSON.parse(JSON.stringify(lobijason))
var listaAtual = document.querySelector(".listaAtual")
var direcao = 1
var checkbox = document.querySelector("#adotados");




function create_lobo(n) {
    let lobo = lobinhos.find(lobo => lobo.id === n)

    let card_lobo = document.createElement("div")
    let img_lobo = document.createElement("div")
    let dados_lobo = document.createElement("div")
    let status_lobo = document.createElement("div")
    //let adotou_lobo = document.createElement("div")

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
    if(lobo.adotado===true){
        status_lobo.innerText = "Adotado"
        status_lobo.append +="background-color:#7AAC3A"
    }else{
        status_lobo.innerText = "Adotar"
        status_lobo.append +="background-color:#DEB959"
    }

    dados_lobo.classList.add("dados_lobo")
    dados_lobo.append(nome_lobo)
    dados_lobo.append(idade_lobo)
    dados_lobo.append(status_lobo)
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

    

    listaAtual.append(card_lobo)
 }


 
/*inicializa exibição de lobos não adotados*/    

for (let i = 1; i<=lobinhos.length;i++){
    let lobo = lobinhos.find(lobo => lobo.id === i)
    if(lobo.adotado===false){
        create_lobo(i)
    }
    
}

/*filtro por checkbox*/
checkbox.addEventListener('change',function(){ 
    if (this.checked) {
        listaAtual.innerHTML="";
    for (let i = 1; i<=lobinhos.length;i++){
        let lobo = lobinhos.find(lobo => lobo.id === i)
        if(lobo.adotado===true){
            create_lobo(i)
        }
     }
     }

     else{
        listaAtual.innerHTML="";
     for (let i = 1; i<=lobinhos.length;i++){
         let lobo = lobinhos.find(lobo => lobo.id === i)
         if(lobo.adotado===false){
             create_lobo(i)
         }
     }
    }
}
)

/*inicializa exibição de lobos adotados*/
for (let i = 1; i<=lobinhos.length;i++){
    let lobo = lobinhos.find(lobo => lobo.id === i)
    if(lobo.adotado===true){
        create_lobo(i)
    }
 }

 /*Filtro por nome*/ 
var classe=document.querySelectorAll(".card_lobo");

var nomes = document.getElementsByTagName("h3");

var txtFiltro =document.querySelector("#txtFiltro");

/*txtFiltro.addEventListener("input", e=> {
    const textoSalvo = e.target.textoSalvo;
    console.log(textoSalvo)
})*/

let textoSalvo;

txtFiltro.addEventListener("keyup", function() {
    textoSalvo = txtFiltro.value;
    console.log(textoSalvo)
    for (let j = 0; j<=nomes.length;j++){
        let nome = nomes[j].innerText.toLowerCase();
        if(nome.indexOf(textoSalvo)===-1){
            classe[j].style.display = "none";
    }}
});



   


 


