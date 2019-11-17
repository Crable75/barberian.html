$(function () {
    // Preloader
    $(window).on('load', function () {
        $('body').addClass('loaded');
    });

    AOS.init({
        offset: 200,
        duration: 1000,
        once: true,
    });

    // SHOW/HIDE menu on mobile
    if ($('.header__menu-btn').length) {
        $('.header__menu-btn').on('click', function () {
            $('.header').toggleClass('header--show');
        });
    }

    // Add class fixed for menu when scroll
    let window_height = $(window).height();

    $(window).on('scroll load', function (event) {
        if ($(window).scrollTop() > window_height) {
            $('.header').addClass('header--fixed');
        } else {
            $('.header').removeClass('header--fixed').removeClass('header--hide');
        }
    });

    // Show menu when scroll up, hide menu when scroll down
    let lastScroll = 50;
    $(window).on('scroll load', function (event) {
        let st = $(this).scrollTop();
        if (st > lastScroll) {
            $('.header').addClass('header--hide');
        } else if (st < lastScroll) {
            $('.header').removeClass('header--hide');
        }

        if ($(window).scrollTop() <= 200) {
            $('.header').removeClass('.header--fixed').removeClass('header--hide');
        } else if ($(window).scrollTop() < window_height && $(window).scrollTop() > 0) {
            $('.header').addClass('header--hide');
        }
        lastScroll = st;
    });

    // Initialise main-banner slider
    if ($('.main-banner__slider').length) {
        $('.main-banner__slider').slick({
            dots: true,
            arrows: false,
            slidesToShow: 1,
            infinite: true,
            fade: true,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 3000
        });
    }

    // Initialise HISTORY section slider
    if ($('.history__slider').length) {
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
    if ($('.events__slider').length) {
        $('.events__slider').slick({
            dots: false,
            arrows: true,
            slidesToShow: 1,
            infinite: true,
            prevArrow: '.events__arrow--left',
            nextArrow: '.events__arrow--right',
            fade: true,
            autoplay: true,
        });
    }

    // Initialise galery-single section slider
    if ($('.gallery-single__slider').length) {
        $('.gallery-single__slider')
            .on('init', function(event, slick){
                $('.gallery-single__slider-total').html(' - ' + slick.slideCount);
            })
            .on('afterChange', function(event, slick, currentSlide, nextSlide){
                let slideNumber = currentSlide + 1;

                $('.gallery-single__slider-current').html(slideNumber);
            });

        $('.gallery-single__slider').slick({
            centerMode: true,
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            focusOnSelect: true,
            prevArrow: '.gallery-single__arrow--left',
            nextArrow: '.gallery-single__arrow--right',
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 1,
                        fade: true
                    }
                }
            ]
        });
    }


    // Initialise about-masters section slider
    if ($('.about-master__slider').length) {
        $('.about-master__slider')
            .on('init', function(event, slick){
                $('.about-master__slider-total').html('/' + slick.slideCount);
            })
            .on('afterChange', function(event, slick, currentSlide, nextSlide){
                let slideNumber = currentSlide + 1;

                $('.about-master__number-slide').html(slideNumber);
                $('.about-master__txt-item--active').removeClass('about-master__txt-item--active');
                $('.about-master__txt-item[data-id="' + slideNumber + '"]').addClass('about-master__txt-item--active');
                $('.about-master__slider-current').html(slideNumber);
            });

        $('.about-master__slider').slick({
            centerMode: true,
            verticalSwiping: true,
            centerPadding: '160px',
            vertical: true,
            dots: false,
            arrows: true,
            infinite: true,
            slidesToShow: 1,
            prevArrow: '.about-master__arrow--left',
            nextArrow: '.about-master__arrow--right',
            responsive: [
                {
                    breakpoint: 800,
                    settings: {
                        centerMode: false,
                        verticalSwiping: false,
                        vertical: false,
                    }
                }
            ]
        });
    }

    // Initialise services slider
    if ($('.services__slider').length) {
        $('.services__slider').slick({
            dots: false,
            arrows: true,
            slidesToShow: 3,
            infinite: true,
            draggable: false,
            speed: 700,
            focusOnSelect: true,
            prevArrow: '.services__arrow--left',
            nextArrow: '.services__arrow--right',

        });
    }

    // Homepage history slider buttons actions
    $('.history__slider-item').on('click', function () {
        let slider_item_clicked = $(this).data('id');

        $('.history__txt-item--active').removeClass('history__txt-item--active');
        $('.history__txt-item[data-id="' + slider_item_clicked + '"]').addClass('history__txt-item--active');

        $('.history__photo--active').removeClass('history__photo--active');
        $('.history__photo[data-id="' + slider_item_clicked + '"]').addClass('history__photo--active');
    });

    // Homepage history next button action
    $('.history__nav-next').on('click', function () {
        let data_id_values = $(".history__slider-item").map(function() {
            return $(this).data('id');
        }).get();//get all data values in an array
        let highest_id_value = Math.max.apply(Math, data_id_values);

        let next_index = $('.history__txt-item--active').data('id') + 1;
        if (next_index > highest_id_value)
        {
            next_index = 1;
        }

        $('.history__txt-item--active').removeClass('history__txt-item--active');
        $('.history__txt-item[data-id="' + next_index + '"]').addClass('history__txt-item--active');

        $('.history__photo--active').removeClass('history__photo--active');
        $('.history__photo[data-id="' + next_index + '"]').addClass('history__photo--active');

    });

    // Homepage history prev button action
    $('.history__nav-prev').on('click', function () {
        let data_id_values = $(".history__slider-item").map(function() {
            return $(this).data('id');
        }).get();//get all data values in an array
        let highest_id_value = Math.max.apply(Math, data_id_values);

        let prev_index = $('.history__txt-item--active').data('id') - 1;
        if (prev_index < 1)
        {
            prev_index = highest_id_value;
        }

        $('.history__txt-item--active').removeClass('history__txt-item--active');
        $('.history__txt-item[data-id="' + prev_index + '"]').addClass('history__txt-item--active');

        $('.history__photo--active').removeClass('history__photo--active');
        $('.history__photo[data-id="' + prev_index + '"]').addClass('history__photo--active');

    });

    // Homepage blog image click actions
    $('.home-blog__center-img').on('click', function () {
        let blog_item_clicked = $(this).data('id');

        $('.home-blog__left-img--active').removeClass('home-blog__left-img--active');
        $('.home-blog__left-img[data-id="' + blog_item_clicked + '"]').addClass('home-blog__left-img--active');

        $('.home-blog__right-wrp--active').removeClass('home-blog__right-wrp--active');
        $('.home-blog__right-wrp[data-id="' + blog_item_clicked + '"]').addClass('home-blog__right-wrp--active');
    });

    // gallery-feat next button action
    $('.gallery-feat__arrow--right').on('click', function () {
        let data_id_values = $(".gallery-feat__wrp").map(function() {
            return $(this).data('id');
        }).get();//get all data values in an array
        let highest_id_value = Math.max.apply(Math, data_id_values);

        let next_index = $('.gallery-feat__wrp--active').data('id') + 1;
        if (next_index > highest_id_value) next_index = 1;

        $('.gallery-feat__wrp--active').removeClass('gallery-feat__wrp--active');
        $('.gallery-feat__wrp[data-id="' + next_index + '"]').addClass('gallery-feat__wrp--active');

    });

    // gallery-feat prev button action
    $('.gallery-feat__arrow--left').on('click', function () {
        let data_id_values = $(".gallery-feat__wrp").map(function() {
            return $(this).data('id');
        }).get();//get all data values in an array
        let highest_id_value = Math.max.apply(Math, data_id_values);

        let next_index = $('.gallery-feat__wrp--active').data('id') - 1;
        if (next_index < 1) next_index = highest_id_value;

        $('.gallery-feat__wrp--active').removeClass('gallery-feat__wrp--active');
        $('.gallery-feat__wrp[data-id="' + next_index + '"]').addClass('gallery-feat__wrp--active');

    });

    // fadeInUp animation
    if ($(".animation__fade-in-up").length) {
        $(".animation__fade-in-up").each(function () {
            let current_animation = $(this);
            $(this).appear(function () {
                setTimeout(function () {
                    current_animation.addClass("fadeInUp animated").css('opacity', '1')
                }, current_animation.data('delay'));
            }, {accX: 0, accY: -150})
        })
    }

    // fadeInDown animation
    if ($(".animation__fade-in-down").length) {
        $(".animation__fade-in-down").each(function () {
            let current_animation = $(this);
            $(this).appear(function () {
                setTimeout(function () {
                    current_animation.addClass("fadeInDown animated").css('opacity', '1')
                }, current_animation.data('delay'));
            }, {accX: 0, accY: -150})
        })
    }

    // fadeInRight animation
    if ($(".animation__fade-in-right").length) {
        $(".animation__fade-in-right").each(function () {
            let current_animation = $(this);
            $(this).appear(function () {
                setTimeout(function () {
                    current_animation.addClass("fadeInRight animated").css('opacity', '1')
                }, current_animation.data('delay'));
            }, {accX: 0, accY: -150})
        })
    }

    // fadeIn animation
    if ($(".animation__fade-in").length) {
        $(".animation__fade-in").each(function () {
            let $this = $(this);
            $(this).appear(function () {
                setTimeout(function () {
                    $this.addClass("fadeIn animated").css('opacity', '1')
                }, $this.data('delay'));
            }, {accX: 0, accY: -150})
        })
    }

    // fadeIn animation
    if ($(".animation__bounce").length) {
        $(".animation__bounce").each(function () {
            let $this = $(this);
            $(this).appear(function () {
                setTimeout(function () {
                    $this.addClass("bounce animated").css('opacity', '1')
                }, $this.data('delay'));
            }, {accX: 0, accY: -150})
        })
    }


    $('.count').each(function () {
        let $this = $(this);

        $this.appear(function () {
            jQuery({ Counter: 0 }).animate({ Counter: $this.data('count') }, {
                duration: 2000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.ceil(this.Counter));
                }
            });
        }, {accX: 0, accY: -50})


    });

    if ($(".progress").length) {
        $(".progress").each(function () {
            let $this = $(this);
            $(this).appear(function () {
                setTimeout(function () {
                    $this.css('width', $this.data('value'))
                }, $this.data('delay'));
            }, {accX: 0, accY: -150})
        })
    }

    jarallax(document.querySelectorAll('.jarallax'), {
        disableParallax: /iPad|iPhone|iPod|Android/,
    });

});