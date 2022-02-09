var altura = 0;
var largura = 0;

function ajusteTela() {
  altura = window.innerHeight;
  largura = window.innerWidth;
  console.log(largura, altura);
}
ajusteTela();

function posicaoRandomica() {
  var posicaoX = Math.floor(Math.random() * largura) - 90;
  var posicaoY = Math.floor(Math.random() * altura) - 90;
  console.log(posicaoX, posicaoY);

  posicaoX = posicaoX < 0 ? 0 : posicaoX
  posicaoY = posicaoY < 0 ? 0 : posicaoY

  // criar elemento html com o dom

  var mosquito = document.createElement("img");
  mosquito.src = "./imagens/mosquito.png";
  mosquito.className = mosquitoAleatorio() + " " + ladoAleatorio()
  mosquito.style.left = posicaoX + "px"
  mosquito.style.top = posicaoY + "px"
  mosquito.style.position = "absolute"
  document.body.appendChild(mosquito);
}

function mosquitoAleatorio(){
    var classe = Math.floor(Math.random()* 3)

    switch(classe){
        case 0:
            return 'mosquito1 '
        case 1 :
            return 'mosquito2 '
        case 2 : 
            return 'mosquito3 '
    }
}

function ladoAleatorio(){
    var classe = Math.floor(Math.random()* 2)

    switch(classe){
        case 0:
            return ' ladoA'
        case 1 :
            return ' ladoB'
}
}