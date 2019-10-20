$(function()
{
  // Preloader
  $(window).on('load', function() {
    $('body').addClass('loaded');
  });

  // SHOW/HIDE menu on mobile
  if($('.header__menu-btn').length) {
    $('.header__menu-btn').on('click', function () {
      $('.header').toggleClass('header--show');
    });
  }

  // Initialise HISTORY section slider
  if($('.history__slider').length) {
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
  }

  // Initialise EVENTS section slider
  if($('.events__slider').length) {
    $('.events__slider').slick({
      dots: false,
      arrows: true,
      slidesToShow: 1,
      infinite: true,
      prevArrow: '.events__slider-left',
      nextArrow: '.events__slider-right'
    });
  }

  // Add class fixed for menu when scroll
  let window_height = $(window).height();

  $(window).on('scroll load', function (event) {
    if ($(window).scrollTop() > window_height) {
      $('.header').addClass('header--fixed');
    }
    else {
      $('.header').removeClass('header--fixed').removeClass('header--hide');
    }
  });

  // Show menu when scroll up, hide menu when scroll down
  let lastScroll = 50;
  $(window).on('scroll load', function (event) {
    let st = $(this).scrollTop();
    if (st > lastScroll) {
      $('.header').addClass('header--hide');
    }
    else if (st < lastScroll) {
      $('.header').removeClass('header--hide');
    }

    if ($(window).scrollTop() <= 200 ){
      $('.header').removeClass('.header--fixed').removeClass('header--hide');
    }
    else if ($(window).scrollTop() < window_height && $(window).scrollTop() > 0) {
      $('.header').addClass('header--hide');
    }
    lastScroll = st;
  });
});