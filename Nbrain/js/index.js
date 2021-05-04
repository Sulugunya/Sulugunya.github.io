$(function(){ //Смена цвета через полторы секунды

    $('.main-container, .pagination-list').hide(); 
    $('body').css('overflow', 'hidden'); // для функции startOverflow 


    const startStyles = () => {
        $('body').css({
            'background-color': 'black'
        });
        $('.preloader-container').remove();
        $('body').css('overflow', 'auto');
    }

    const elementsStartedAnimation = () => {
        $('.main-container, .pagination-list').fadeIn(300);
    }




    



    $(document).on("scroll", function(){
        if ($(document).scrollTop() > 15) {
            $('.logo').addClass('logo-animation');
        }
    });

    setTimeout(startStyles, 2350);
    setTimeout(elementsStartedAnimation, 2400);
    setTimeout(startOverflow, 2650);
});