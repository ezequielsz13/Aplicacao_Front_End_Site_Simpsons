/***********************************************************************************************
 * Objetivo: listar os personagens do desenho Simpsons usando API para consultar dados remotos
 * Data: 11-13/05/2026
 * Versão 1.0
 * Autor: Ezequiel Saldivia Zanotta
 * URL API: https://apisimpsons.fly.dev/api/personajes?limit=1000
 * Tentar URL API: https://apisimpsons.fly.dev/api/personajes?limit=20
 **********************************************************************************************/

const setCreateCard = function(listaPersonagens){
    let divCardPersonagens = document.getElementById('listDados')

    listaPersonagens.docs.forEach(function(itemPersonagem){

        // Cria elementos no HTML
        let divPersonagem = document.createElement('div')
        let divNomePersonagem = document.createElement('div')
        let divFotoPersonagem = document.createElement('div')
        let imgPersonagem = document.createElement('img')
        let divDescricaoPersonagem = document.createElement('div')
        
        //Adiciona um atributo ao elemento do HTML
        divPersonagem.setAttribute('class', 'personagem')
        divNomePersonagem.setAttribute('class', 'nomePersonagem')
        divFotoPersonagem.setAttribute('class', 'fotoPersonagem')
        imgPersonagem.setAttribute('src', itemPersonagem.Imagen)
        imgPersonagem.setAttribute('alt', 'Imagem do personagem '+itemPersonagem.Nombre)
        imgPersonagem.setAttribute('title', itemPersonagem.Nombre)
        divDescricaoPersonagem.setAttribute('class', 'descricaoPersonagem')

        //Textos dos elementos do HTML
        divNomePersonagem.innerText = itemPersonagem.Nombre
        divDescricaoPersonagem.innerText = itemPersonagem.Historia

        //Permite colocar um elemento do HTML pertencendo a outro elemento (Pai e filho)
        divCardPersonagens.appendChild(divPersonagem)
        divPersonagem.appendChild(divNomePersonagem)
        divPersonagem.appendChild(divFotoPersonagem)
        divFotoPersonagem.appendChild(imgPersonagem)
        divPersonagem.appendChild(divDescricaoPersonagem)
    })

}


//"async" pode ser usado tanto antes da palavra "const" quanto antes da palavra "function"
const getDadosPersonagensAPI = async function(){
    let url = 'https://apisimpsons.fly.dev/api/personajes?limit=20'

    let response = await fetch(url)

    let dados = await response.json()

    setCreateCard(dados)
}

window.addEventListener('load', function(){
    getDadosPersonagensAPI()
})