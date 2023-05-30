let btn = document.querySelector('#copy');

btn.addEventListener("click", event => {
    event.preventDefault()
    let textArea = document.querySelector('.texto');
    textArea.select();
    document.execCommand('copy');
    document.querySelector('.modal').classList.remove('d-none')
});

let confirmar = document.querySelector('.confirmar')
confirmar.addEventListener("click", event => {
    document.querySelector('.modal').classList.add('d-none')
});

$('a').on('click', function () {
    var targetSection = $('#' + $(this).data('section'));
    $("html, body").animate({
        scrollTop: targetSection.offset().top
    }, 500);
});

var alturas = {};
$('.section').each(function () {
    alturas[$(this).prop('id')] = $(this).offset().top;
});

$(window).on('scroll', function () {
    var windowHeight = $(window).height();
    var scrollTop = $(window).scrollTop();

    for (var seccao in alturas) {
        if (scrollTop + windowHeight >= alturas[seccao]) {
            $('.navegacao a').removeClass('menuAtivo');
            $('.navegacao a[data-section="' + seccao + '"]').addClass('menuAtivo');
        }
    }
});