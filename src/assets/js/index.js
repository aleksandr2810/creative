import $ from 'jquery';
window.$ = window.jQuery = $;
import '@fortawesome/fontawesome-free/js/all.js';

import  "@scss/main.scss" ;

$(document).ready(function(){

    $("#menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        let id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1000 мс
        $('body,html').animate({scrollTop: top}, 1000);
    });


    $(window).scroll(function(){

         if( $(window).scrollTop() > 750 ) {

            $('.header').addClass('fixed');
        }
        else {
            $('.header').removeClass('fixed');
        }
    });

        $('.menu-burger__header').click(function() {
            $('.menu-burger__header').toggleClass('open-menu');
            $('.header-nav').toggleClass('open-menu');
        });

});
