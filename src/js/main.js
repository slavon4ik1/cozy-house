$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });
  $('.header__menuHamburger').on('click', function () {
    $('.header__menuHamburger').toggleClass('header__mobileNav-active');
    $('.header__navList').toggleClass('active-menu');
  });
});

