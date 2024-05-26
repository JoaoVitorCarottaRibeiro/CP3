function exibirIMG (){
    var Imagem = document.getElementById('js-aqui').value
    if (Imagem){
        var Img = document.createElement('Img')
        Img.src = Imagem
        Img.alt = 'Imagem inserida pelo usuário'

        var ImgContainer = document.getElementById('ImgContainer') // carrosel ainda em desenvolvimento, após isso inserir ID aqui
        ImgContainer.innerHTML = ''
        ImgContainer.appendChild(Img)
       


    }  
    else{
    alert("Insira URL válida")
}
}