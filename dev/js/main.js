jQuery(document).ready(() => {
    const burgerMenuWrapper = jQuery('.burger-menu-wrapper');
    const burgerMenu = jQuery('.burger-menu');
    const burgerMenuBtn = jQuery('.burger-menu-btn');
    const burgerMenuBtnWrapper = jQuery('.burger-menu-btn-wrapper');

    jQuery('.blog-carousel').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        centerMode: false,
        variableWidth: true,
        prevArrow: jQuery('.carousel-prev-arrow'),
        nextArrow: jQuery('.carousel-next-arrow'),
    });

    burgerMenuBtnWrapper.click(() => {
        burgerMenuBtn.toggleClass('active');
        burgerMenuWrapper.toggleClass('active');
    })

    jQuery(document).click((event) => {
        if (
            event.target !== burgerMenuWrapper.get(0) &&
            event.target !== burgerMenuBtn.get(0) &&
            event.target !== burgerMenuBtnWrapper.get(0) &&
            event.target !== burgerMenu.get(0) &&
            burgerMenuWrapper.hasClass('active')
        ) {
            burgerMenuWrapper.removeClass('active')
            burgerMenuBtn.removeClass('active')
        }
    })

    document.addEventListener('wpcf7mailsent', function (event) {
        if (jQuery('.modal')) jQuery('.modal').modal('hide')
        jQuery('form').trigger("reset")
    }, false);

    jQuery.each(jQuery('.our-customers-partners .our-customers-partner .main-button'), function () {
        jQuery(this).click(function () {
            if (reviews_data && Object.keys(reviews_data).length) {
                const currentReview = reviews_data[this.dataset.id];
                const title = `<h5 class="modal-title">${currentReview.title}</h5>`;
                const description = `<div class="detail-pop-up-description">${currentReview.description}</div>`;
                jQuery('#read-review-details .modal-body').empty().append(title).append(description);
            }
        })
    })
})

