
$(document).ready(function(){
    // navbar toggling
    $('#navbar-toggler').click(function(){
        $('.navbar-collapse').toggleClass('showNav');
    });

    // animated bar icon 
    $('#navbar-toggler').click(function(){
        $(this).toggleClass('animatedNav');
    });

    // navbar background change in scroll
    $(window).scroll(function(){
        let position = $(window).scrollTop();
        if(position >= 60){
            $('.navbar-wrapper').removeClass('container');
            $('.navbar-wrapper').addClass('fxd-navbar-wrapper');
        } else {
            $('.navbar-wrapper').addClass('container');
            $('.navbar-wrapper').removeClass('fxd-navbar-wrapper');
        }
    });

    // smooth scroll
    let link = $('.navbar-nav a.nav-link');
    link.click(function(e){
        e.preventDefault();
        let target = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        }, 1000);
    });

    // features slider 
    $('.features-right .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1
    });

    // testimonial slider 
    $('.testimonial .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive:{
            0:{
                items: 1
            },
            992:{
                items: 2
            }
        }
    });

    // footer date
    const date = new Date();
    $('.copyright-date').text(date.getFullYear());
});