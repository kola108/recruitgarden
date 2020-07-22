$(document).ready(() => {

    $('.variable-width').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        prevArrow: $('.carousel-prev-arrow'),
        nextArrow: $('.carousel-next-arrow'),
    });
})



