

$(document).ready(function () {

    //Este é o código usado ali no header, ele pega a class .block-bar e aplica uma mudança chamada de "change", fazendo funcionar o nosso menu mobile, e ter um menuzinho lindo *--*

    $('.block-bar').click(function () {
        if ($(this).hasClass('change')) {
            $(this).removeClass('change');
            $('.menu-mobile').fadeOut();
        } else {
            $(this).addClass('change');
            $('.menu-mobile').fadeIn();
        }
    });

    //Este é o código da tela de "Loading" ela aparece assim que você abre o site, ali temos #status e #placeholder que são ID nas nossas páginas HTML, básicamente faz um efeito de "FADE" e quando acaba o tempo mostra o nosso site

    window.setTimeout(function () {
        $('#status').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({ 'overflow': 'visible' });
    }, 4000);


    // Este é o código do "Owl-carousel"

    $('.owl-sites').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ["<img src='images/esquerda.png'>", "<img src='images/direita.png'  class='block'>"],
        dots: false,

        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1024: {
                mouseDrag: false,
                touchDrag: true,
                items: 3,
            }
        }
    });

    // Este é o código do FAQ :D

    $(document).ready(function () {
        $('.acc h3').click(function () {
            $(this).next('.content').slideToggle();
            $(this).parent().toggleClass('active');
            $(this).parent().siblings().children('.content').slideUp();
            $(this).parent().siblings().removeClass('active');
        });
    });


    //Mascaras
    var SPMaskBehavior = function (val) {
        return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
    }, spOptions = {
        onKeyPress: function (val, e, field, options) {
            field.mask(SPMaskBehavior.apply({}, arguments), options);
        }
    };

    if ($(".cep-mask").length > 0) {
        $(".cep-mask").mask('99.999-999');
    }

    if ($(".date-mask").length > 0) {
        $(".date-mask").mask('99/99/9999');
    }

    if ($(".number-mask").length > 0) {
        $(".number-mask").mask('00000');
    }

    if ($(".cvv-mask").length > 0) {
        $(".cvv-mask").mask('999');
    }

    if ($(".cpf-mask").length > 0) {
        $(".cpf-mask").mask('999.999.999-99');
    }

    if ($(".phone-mask").length > 0) {
        $('.phone-mask').mask(SPMaskBehavior, spOptions);
    }







    $('.content-experience').slideUp();


    $('.acc').click(function () {
        $('.content-experience').slideUp();

        if ($(this).hasClass('active')) {
            //se tem classe active
            $(this).removeClass('active');
        }
        else {
            //se não tem classe active
            $('.acc').removeClass('active');
            $(this).addClass('active');
            $(this).find('.content-experience').slideDown();
        }
    });

});
