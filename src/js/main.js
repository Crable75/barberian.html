$(function () {
    // Preloader
    $(window).on('load', function () {
        $('body').addClass('loaded');
    });

    // SHOW/HIDE menu on mobile
    if ($('.header__menu-btn').length) {
        $('.header__menu-btn').on('click', function () {
            $('.header').toggleClass('header--show');
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
            prevArrow: '.events__slider-left',
            nextArrow: '.events__slider-right'
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
            let current_animation = $(this);
            $(this).appear(function () {
                setTimeout(function () {
                    current_animation.addClass("fadeIn animated").css('opacity', '1')
                }, current_animation.data('delay'));
            }, {accX: 0, accY: -150})
        })
    }

    //Parallax effects
    $('.home-banner').parallax("50%", 0.3);
    $('.founder').parallax("50%", 0.1);
    $('.price').parallax("50%", 0.1);
    $('.footer').parallax("50%", 0.1);
    $('.events').parallax("50%", 0.1, true);

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

});