$(document).ready(function(){

  //////////////////////////////////////////////////////////////////
  // HEADER DINÂMICO
  // Mostra header somente no início da página.
  // Descomentar caso utilizada a classe .header-dinamico. Caso contrário, deletar.

    $(window).scroll(function(){
      var nav = $(".header-dinamico .container");
      var scroll = $(window).scrollTop();
      if(scroll == 0){
        nav.fadeIn();
      } else {
        nav.fadeOut();
      }
    });

  //////////////////////////////////////////////////////////////////

  // Seu código abaixo

})


let cardsWeb = document.querySelector('#cards-web')
let btnIniciar = document.querySelector('#btn-iniciar')




let revelaCardsWeb = function(){
  cardsWeb.style.display = 'flex'
  $('html,body').animate({
    scrollTop: $('#cards-web').offset().top
},'slow');
}

btnIniciar.addEventListener('click', revelaCardsWeb)

