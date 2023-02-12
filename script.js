let btn = document.querySelector('#copy');

btn.addEventListener("click", event =>{
    event.preventDefault()
let textArea = document.querySelector('.texto');
textArea.select();
document.execCommand('copy');
document.querySelector('.modal').classList.remove('d-none')
// alert('ID do Discord, copiado! :) me adicione e envie uma mensagem')

});

let confirmar = document.querySelector('.confirmar')
confirmar.addEventListener("click", event =>{
  document.querySelector('.modal').classList.add('d-none')
});

$('a').on('click', function() {
  $("html, body").animate({
    scrollTop: $('#' +$(this).data('section')).offset().top 
  }, 500);
});

var alturas = {};
$('.section').each(function () {
  alturas[$(this).prop('id')] = $(this).offset().top; 
});

$(window).on('scroll', function() {
  for(var seccao in alturas) {
    if($(window).scrollTop() >= alturas[seccao]) {
      $('.navegacao a').removeClass('menuAtivo'); 
      $('.navegacao a[data-section="' +seccao+ '"]').addClass('menuAtivo');
    }
  }
});


