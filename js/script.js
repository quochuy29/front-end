$(document).ready(function() {

    $('.header-top-left').click(function(e) {
        e.preventDefault();
        $(this).find('.header-title').toggle('show');
        $(this).siblings().toggle('hide');
    });

    $('.web-info-button').click(function(e) {
        e.preventDefault();
        $(this).find('.info-content').toggle('show');
        $(this).siblings().toggle('hide');
    });

    let navbar = document.querySelector('.navbar');
    let cover = document.querySelector('.cover');
    $('.navbar-icon').click(function(e) {
        e.preventDefault();
        navbar.classList.toggle('active');
        cover.classList.toggle('active');
    });

    $('.cover').click(function(e) {
        e.preventDefault();
        $('.navbar').removeClass('active');
        $('.cover').removeClass('active');
    });

    $('.footer-item .footer-item-title').click(function() {
        console.log(1)
        if ($(this).parent().find('.item-detail').attr('class') !== 'item-detail active') {
            $('.item-detail').removeClass('active');
            $(this).parent().find('.item-detail').toggleClass('active');
        } else {
            $(this).parent().find('.item-detail').toggleClass('active');
        }
    })
});
