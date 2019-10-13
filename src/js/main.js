$(function()
{
  // Preloader
  $(window).on('load', function() {
    $('body').addClass('loaded');
  });

  $('.header__menu-btn').on('click', function () {
    $('.header').toggleClass('header--show');
  });

  $('.history__slider').slick({
    vertical: true,
    // verticalSwiping: true,
    dots: false,
    arrows: true,
    slidesToShow: 4,
    infinite: true,
    prevArrow: '.history__slider-up',
    nextArrow: '.history__slider-down',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          vertical: false,
        }
      },
      {
        breakpoint: 800,
        settings: {
          vertical: false,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 500,
        settings: {
          vertical: false,
          slidesToShow: 2
        }
      }
    ]
  });

  $('.events__slider').slick({
    dots: false,
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    prevArrow: '.events__slider-left',
    nextArrow: '.events__slider-right'
  });

});