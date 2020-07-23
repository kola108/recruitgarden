$(document).ready(() => {
    const burgerMenuWrapper     = $('.burger-menu-wrapper');
    const burgerMenu            = $('.burger-menu');
    const burgerMenuBtn         = $('.burger-menu-btn');
    const burgerMenuBtnWrapper  = $('.burger-menu-btn-wrapper');

    $('.blog-carousel').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        centerMode: false,
        variableWidth: true,
        prevArrow: $('.carousel-prev-arrow'),
        nextArrow: $('.carousel-next-arrow'),
    });

    burgerMenuBtnWrapper.click(() => {
        burgerMenuBtn.toggleClass('active');
        burgerMenuWrapper.toggleClass('active');
    })

    $(document).click(($event) => {
        if (
            $event.target !== burgerMenuWrapper.get(0) &&
            $event.target !== burgerMenuBtn.get(0) &&
            $event.target !== burgerMenuBtnWrapper.get(0) &&
            $event.target !== burgerMenu.get(0) &&
            burgerMenuWrapper.hasClass('active')
        ) {
            burgerMenuWrapper.removeClass('active')
            burgerMenuBtn.removeClass('active')
        }
    })
})



