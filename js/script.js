$('.banner-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    autoplay: true,
    dots: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    autoplayTimeout: 8000,
  
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
