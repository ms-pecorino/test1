'user strict'
{
    $('.js___slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        speed: 2000,

    });

    $('.js___qa-list').click(function(){
        const $answer = $(this).find('.js___answer');
        const $span = $(this).find('.js___span');

        if($answer.hasClass('open')){
            $answer.removeClass('open');
            $answer.slideUp(500);
            $span.text('+')

        } else {
            $answer.addClass('open');
            $answer.slideDown(500);
            $span.text('-')
        }

    });

    $('.js___page-top').click(function(){
        $('html, body').animate({
            'scrollTop': 0}, 800)
    });

    // $('.js___business').click(function(){
    //     const id = $(this).attr("href");
    //     const position = $(id).offset().top;
    //     $('html, body').animate({
    //         'scrollTop': position - 120}, 800);
    //         return false;
    // });

    $(window).scroll(function(){
        $('.scrollanime').each(function(){
            const wHeight = $(window).height();
            const scrollAmount = $(window).scrollTop();
            const targetPosition = $(this).offset().top;
            if(targetPosition - scrollAmount < wHeight - 60){
                $(this).addClass('effect-scroll');
            }
        });
    });

    $('#top').click(function(){
        $('html, body').animate({
            'scrollTop': 0}, 800)
    });

    $('.contact').click(function(){
        $('.contact-form').fadeIn(300);
    });

    $('#js___close-space').click(function(){
        $('.contact-form').fadeOut(300);
    });
    $('.submit').click(function(){
        $('.contact-form').fadeOut(300);
    });

    $('nav li a').each(function(){
        const $href = $(this).attr('href');
        if(location.href.match('href')){
            $(this).parent().addClass('current');
        } else {
            $(this).parent().removeClass('current');
        }

    });

    $('#js___sp_nab_sub').click(function(){
        if($('.sp_nav__sub').hasClass('open')){
            $('.sp_nav__sub').removeClass('open');
            $('.sp_nav__sub').slideUp(600);
            $(this).removeClass('open');
        }else{
            $('.sp_nav__sub').addClass('open');
            $('.sp_nav__sub').slideDown(600);
            $(this).addClass('open');
        }
    });

    //ハンバーガーメニュー

    const hbg = document.querySelector('.hamburger')
    const overlay = document.querySelector('.overlay')
    hbg.addEventListener('click', function(){
        hbg.classList.toggle('active');
        overlay.classList.toggle('active');
    });

}