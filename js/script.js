
const header = document.querySelector(".main-header");

$(window).on('scroll', function() {
    if ($(this).scrollTop() >30){  
        header.classList.add('fixed-header')
    }
    else{
        header.classList.remove('fixed-header')
    }
});



// $(document).ready(function() {
//       setTimeout(function() {
//           $('.banner-timer').addClass('load');
//     }, 8000);
// });

$(document).ready(function(){
    $('.services .general-section li').click(function(){
      $('.general-section li').removeClass("active");
      $(this).addClass("active");
  });
});



var owl = $('.banner-slider');

owl.owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    autoplay: true,
    dots: true,
    duration: 6,
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

owl.on('changed.owl.carousel', function(e) {
    gsap.from(".banner .item .banner-image img.upper", { 
        autoAlpha: 0,
        stagger: 0.2,
        duration: 0.8,
    })
});

owl.on('changed.owl.carousel', function(e) {
    gsap.from(".banner .item .banner-image img.lower", { 
        opacity:0,
        delay: 1,
        duration: 0.6,   
        y: 100,
    })
});


// owl.on('changed.owl.carousel', function(e) {
//     object.addEventListener("reset", ".banner-timer");
// })