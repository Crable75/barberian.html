jQuery(function ($) {

  "use strict";

  if ($('.price__item').length) {

    var selectedTitle = $('.price__item.price__item--active').data('title');
    $('.form__title').text(selectedTitle);
    $('.form__input-service-name').val(selectedTitle);

    $('.price__item').on('click', function(){
      $('.price__item').removeClass('price__item--active');
      $(this).addClass('price__item--active');
      var selectedTitle = $('.price__item.price__item--active').data('title');
      $('.form__title').text(selectedTitle);
      $('.form__input-service-name').val(selectedTitle);
    });

    $('.price__item--active::before').on('click', function(){
      console.log('click');
    });

  }

  if ($('.homeslider__wrp').length) {
    $('.homeslider__wrp').slick({
      arrows: false,
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
    });
  }

  if ($('.orderbox__slider').length) {
    $('.orderbox__slider').slick({
      arrows: true,
      adaptiveHeight: true,
      dots: false,
      infinite: true,
      speed: 200,
      cssEase: 'linear',
      nextArrow: '.orderbox__slider-next',
      prevArrow: '.orderbox__slider-prev'
    });
  }

  if ($('.partners__slider-list').length) {
    $('.partners__slider-list').on('init', function (event, slick) {
      var currentIndex = $('.partners .slick-current').data('slick-index');
      var currentData = $('.slick-current .partners__content-data').html();


      $('.partners__slider-count-current').text(currentIndex + 1);
      $('.partners__content-data-txt').html(currentData);

    });

    $('.partners__slider-list').slick({
      vertical: true,
      verticalSwiping: true,
      slidesToShow: 3,
      draggable: false,
      infinite: true,
      adaptiveHeight: true,
      centerMode: true,
      centerPadding: '0px',
      nextArrow: '.partners__slider-arrow-up',
      prevArrow: '.partners__slider-arrow-down'
    });

    $('.partners__slider-list').on('afterChange', function (event, slick) {
      var currentIndex = $('.partners__slider-list').slick('slickCurrentSlide');
      var currentData = $('.slick-current .partners__content-data').html();

      $('.partners__slider-count-current').text(currentIndex + 1);
      $('.partners__content-data-txt').html(currentData);

      console.log(currentIndex);
    });

  }

  if ($('.testimonials__slider').length) {
    $('.testimonials__slider').slick({
      arrows: true,
      infinite: true,
      fade: true,
      nextArrow: '.testimonials__slider-next',
      prevArrow: '.testimonials__slider-prev'
    });
  }

  if ($('.portfolio__slider').length) {
    $('.portfolio__slider').on('init', function (event, slick) {
      var currentIndex = $('.portfolio .slick-current').data('slick-index');

      $('.portfolio__slider-count-current').text(currentIndex + 1);

    });
    $('.portfolio__slider').slick({
      arrows: true,
      infinite: true,
      nextArrow: '.portfolio__slider-arrow-left',
      prevArrow: '.portfolio__slider-arrow-right'
    });

    $('.portfolio__slider').on('afterChange', function (event, slick) {
      var currentIndex = $('.portfolio .slick-current').data('slick-index');

      $('.portfolio__slider-count-current').text(currentIndex + 1);
      console.log(currentIndex);
    });
  }

  // Homepage services buttons actions
  $('.services__item-square').on('click', function () {
    var services_item_clicked = $(this).data('id');

    $('.services__content-item')
        .addClass('services__display-none')
        .removeClass('services__display');

    $('.services__content-item[data-id="' + services_item_clicked + '"]')
        .removeClass('services__display-none')
        .addClass('services__display');

    $('.services__image-content')
        .addClass('services__display-none')
        .removeClass('services__display');

    $('.services__image-content[data-id="' + services_item_clicked + '"]')
        .removeClass('services__display-none')
        .addClass('services__display');

    $('.services__item-square')
        .removeClass('services__item-square--active')
        .addClass('services__item-square--no-active');

    $(this).addClass('services__item-square--active');

  });

  // Masonry grid for blogpage
  if ($('.blogpage .masonry__wrp').length) {
    $('.blogpage .masonry__wrp').imagesLoaded(function () {
      $('.blogpage .masonry__wrp').masonry({
        columnWidth: '.blogpage .masonry__size',
        gutter: '.blogpage .masonry__gutter',
        itemSelector: '.blogpage .masonry__item',
        percentPosition: true
      });
    });
  }

  // Masonry grid for projectspage
  if ($('.projectspage .masonry__wrp').length) {
    $('.projectspage .masonry__wrp').imagesLoaded(function () {
      $('.projectspage .masonry__wrp').masonry({
        columnWidth: '.projectspage .masonry__size',
        gutter: '.projectspage .masonry__gutter',
        itemSelector: '.projectspage .masonry__item',
        percentPosition: true
      });
    });
  }

  // Venobox popup for about video
  if ($('.video__venobox').length) {
    $('.video__venobox').venobox();
  }

  if ($('.services__venobox').length) {
    $('.services__venobox').venobox({
      framewidth: '800px',
      frameheight: '1000px',
    });
  }