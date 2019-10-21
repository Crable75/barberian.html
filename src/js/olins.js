

jQuery(function (f) {
    f.fn.moveIt = function () {
        var h = f(window);
        var g = [];
        f(this).each(function () {
            g.push(new c(f(this)))
        });
        window.onscroll = function () {
            var i = h.scrollTop();
            g.forEach(function (j) {
                j.update(i)
            })
        }
    };
    var c = function (g) {
        this.el = f(g);
        this.speed = this.el.attr("data-scroll-speed")
    };
    c.prototype.update = function (g) {
        var h = g / this.speed;
        if (this.el.data("scroll-type") == "element") {
            this.el.css("transform", "translateY(" + -h + "px)")
        } else {
            if (this.el.data("scroll-type") == "background") {
                this.el.css("background-position-y", -h + "px")
            }
        }
    };
    f(function () {
        f("[data-scroll-speed]").moveIt()
    });
    if (f(".grid").length) {
        f(".grid").imagesLoaded(function () {
            f(".grid").masonry({
                columnWidth: ".grid-sizer",
                gutter: ".gutter-sizer",
                itemSelector: ".grid-item",
                percentPosition: true
            })
        })
    }
    if (f(".olins_slider_one").length) {
        f(".olins_slider_one").flexslider({
            animation: "fade",
            slideshowSpeed: "9000",
            pauseOnHover: true,
            prevText: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            nextText: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
            controlNav: false,
            start: function () {
                f(".olins_slider_one li .slide_meta .slider_one_pre_title").css("display", "none").removeClass("animated bounceInRight");
                f(".olins_slider_one li .slide_meta .slider_one_title").css("display", "none").removeClass("animated bounceInLeft");
                f(".olins_slider_one li .slide_meta .slider_one_button").css("display", "none").removeClass("animated bounceInUp");
                f(".flex-active-slide .slide_meta .slider_one_pre_title").css("display", "block").addClass("animated bounceInRight");
                f(".flex-active-slide .slide_meta .slider_one_title").css("display", "block").addClass("animated bounceInLeft");
                f(".flex-active-slide .slide_meta .slider_one_button").css("display", "block").addClass("animated bounceInUp")
            },
            after: function () {
                f(".olins_slider_one li .slide_meta .slider_one_pre_title").css("display", "none").removeClass("animated bounceInRight");
                f(".olins_slider_one li .slide_meta .slider_one_title").css("display", "none").removeClass("animated bounceInLeft");
                f(".olins_slider_one li .slide_meta .slider_one_button").css("display", "none").removeClass("animated bounceInUp");
                f(".flex-active-slide .slide_meta .slider_one_pre_title").css("display", "block").addClass("animated bounceInRight");
                f(".flex-active-slide .slide_meta .slider_one_title").css("display", "block").addClass("animated bounceInLeft");
                f(".flex-active-slide .slide_meta .slider_one_button").css("display", "block").addClass("animated bounceInUp")
            }
        })
    }

    function e(h) {
        var i = 25;
        var g = i / f(window).height();
        var j = i / f(window).width();
        h.mousemove(function (n) {
            var m = n.pageX - (f(window).width() / 2);
            var l = n.pageY - (f(window).height() / 2);
            var k = j * m * -1 - 25;
            var o = g;
            h.css("background-position", k + "px     " + o + "px")
        })
    }

    if (f(".olins_move_slider").length) {
        var b = f(window).width();
        e(f(".olins_move_slider .flex-active-slide figure"));
        f(".olins_move_slider").flexslider({
            animation: "slide",
            animationLoop: true,
            pauseOnHover: true,
            smoothHeight: true,
            prevText: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            nextText: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
            controlNav: false,
            start: function () {
                f(window).trigger("resize");
                f(".olins_move_slider li .slide_meta .slider_one_pre_title").css("visibility", "hidden").removeClass("animated fadeInUp");
                f(".olins_move_slider li .slide_meta .slider_one_title").css("visibility", "hidden").removeClass("animated fadeInDown");
                f(".olins_move_slider li .slide_meta .slider_one_button").css("visibility", "hidden").removeClass("animated fadeIn");
                f(".flex-active-slide .slide_meta .slider_one_pre_title").css("visibility", "visible").addClass("animated fadeInUp");
                f(".flex-active-slide .slide_meta .slider_one_title").css("visibility", "visible").addClass("animated fadeInDown");
                f(".flex-active-slide .slide_meta .slider_one_button").css("visibility", "visible").addClass("animated fadeIn");
                e(f(".olins_move_slider .flex-active-slide figure"))
            },
            after: function () {
                f(".olins_move_slider li .slide_meta .slider_one_pre_title").css("visibility", "hidden").removeClass("animated fadeInUp");
                f(".olins_move_slider li .slide_meta .slider_one_title").css("visibility", "hidden").removeClass("animated fadeInDown");
                f(".olins_move_slider li .slide_meta .slider_one_button").css("visibility", "hidden").removeClass("animated fadeIn");
                f(".flex-active-slide .slide_meta .slider_one_pre_title").css("visibility", "visible").addClass("animated fadeInUp");
                f(".flex-active-slide .slide_meta .slider_one_title").css("visibility", "visible").addClass("animated fadeInDown");
                f(".flex-active-slide .slide_meta .slider_one_button").css("visibility", "visible").addClass("animated fadeIn");
                e(f(".olins_move_slider .flex-active-slide figure"))
            }
        })
    }
    if (f(".olins_products_carousel").length) {
        f(".olins_products_carousel").flexslider({
            animation: "slide",
            animationLoop: false,
            minItems: 1,
            maxItems: 4,
            itemWidth: 210,
            itemMargin: 50,
            controlNav: false,
            customDirectionNav: f(".carousel_nav a")
        })
    }
    if (f(".single_post_images_slider").length) {
        f(".single_post_images_slider").flexslider({
            animation: "slide",
            animationLoop: true,
            smoothHeight: true,
            prevText: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            nextText: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
            controlNav: false
        })
    }
    if (f(".top_full_images_slider").length) {
        f(".top_full_images_slider").flexslider({
            animation: "slide",
            animationLoop: true,
            smoothHeight: true,
            prevText: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            nextText: '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        })
    }
    if (f("#da-thumbs").length) {
        f(" #da-thumbs > li ").each(function () {
            f(this).hoverdir()
        })
    }
    if (f("select.mobilemenu").length) {
        f("select.mobilemenu").change(function () {
            var g = f(this).val();
            if (g) {
                window.location = g
            }
            return false
        })
    }
    if (f(".title_with_icon .category_icon").length) {
        f(".title_with_icon .category_icon").appear(function () {
            f(this).each(function () {
                f(this).addClass("animated fadeInUp").css("visibility", "visible")
            })
        }, {accX: 0, accY: -100})
    }
    if (f(".olins_testimonials_slider").length) {
        f(".olins_testimonials_slider").flexslider({
            animation: "slide",
            animationLoop: true,
            smoothHeight: true,
            directionNav: false
        })
    }
    if (f(".ale_preloader_holder").length) {
        f(window).load(function () {
            f(".ale_preloader_holder").fadeOut("slow", function () {
                f(this).remove()
            })
        })
    }
    if (f(".olins_pretty_team").length) {
        f(".olins_pretty_team").flexslider({
            animation: "fade",
            animationLoop: true,
            directionNav: false,
            start: function () {
                if (f(window).width() > "550") {
                    f(".olins_pretty_team_container .olins_pretty_team ul.slides li .col-6").css("height", f(".olins_pretty_team").height() + "px")
                }
            },
            before: function () {
                if (f(window).width() > "550") {
                    f(".olins_pretty_team_container .olins_pretty_team ul.slides li .col-6").css("height", f(".olins_pretty_team").height() + "px")
                }
            }
        })
    }
    if (f(".olins_simple_team").length) {
        f(".olins_simple_team").flexslider({animation: "slide", animationLoop: true, directionNav: false})
    }
    if (f("#nav_open").length) {
        f("#nav_open").on("click", function () {
            if (f(".luxuryshoes_drop_menu").hasClass("close")) {
                f(".luxuryshoes_drop_menu").removeClass("close").addClass("open");
                f(this).removeClass("fa-bars").addClass("fa-times")
            } else {
                f(".luxuryshoes_drop_menu").removeClass("open").addClass("close");
                f(this).removeClass("fa-times").addClass("fa-bars")
            }
        })
    }
    if (f(".olins_scale_image_box").length) {
        f(".olins_scale_image_box .scale_image .image_holder").appear(function () {
            f(this).each(function () {
                f(this).addClass("animate")
            })
        }, {accX: 0, accY: -100})
    }
    if (f(".camping_lines").length) {
        f(".camping_lines").appear(function () {
            f(this).each(function () {
                f(this).addClass("in")
            })
        }, {accX: 0, accY: -100})
    }
    if (f(".camping_bottom_line").length) {
        f(".camping_bottom_line").appear(function () {
            f(this).each(function () {
                f(this).addClass("in")
            })
        }, {accX: 0, accY: 0})
    }
    if (f(".olins_service_block").length) {
        f(".olins_service_block").appear(function () {
            f(this).each(function () {
                f(".olins_service_block .image_holder img").addClass("zoomIn").css("visibility", "visible")
            })
        }, {accX: 0, accY: -150})
    }
    if (f(".olins_do_fadein").length) {
        f(".olins_do_fadein").each(function () {
            var h = f(this);
            var g = 100;
            if (f(this).hasClass("delay200")) {
                g = 200
            } else {
                if (f(this).hasClass("delay400")) {
                    g = 400
                } else {
                    if (f(this).hasClass("delay600")) {
                        g = 600
                    } else {
                        if (f(this).hasClass("delay800")) {
                            g = 800
                        }
                    }
                }
            }
            h.appear(function () {
                setTimeout(function () {
                    h.addClass("fadeInUp").css("visibility", "visible")
                }, g)
            })
        }, {accX: 0, accY: -150})
    }
    if (f(".olins_simple_testimonials_slider").length) {
        f(".olins_simple_testimonials_slider").flexslider({
            animation: "slide",
            animationLoop: true,
            smoothHeight: true,
            directionNav: false
        })
    }
    if (f(".olins_works_masonry_grid").length) {
        f(".olins_works_masonry_grid").imagesLoaded(function () {
            f(".olins_works_masonry_grid").masonry({
                columnWidth: ".grid-sizer",
                gutter: ".gutter-sizer",
                itemSelector: ".grid_item_work",
                isAnimated: true,
                percentPosition: true
            });
            f(".olins_works_masonry_grid").masonry("layout")
        })
    }
    if (f("#header_search_form").length) {
        f("#header_search_form .closed").live("click", function (g) {
            g.preventDefault();
            f(this).removeClass("closed").addClass("opened");
            f("#header_search_form").addClass("open");
            f(".searchinput").live("change", function () {
                if (f(".searchinput").val().length) {
                    f("#header_search_form #searchsubmit").removeClass("opened")
                }
            });
            if (f(".searchinput").val().length) {
                f("#header_search_form #searchsubmit").removeClass("opened")
            }
        });
        f("#header_search_form .opened").live("click", function (g) {
            g.preventDefault();
            f(this).removeClass("opened").addClass("closed");
            f("#header_search_form").removeClass("open")
        })
    }
    if (f(".olins_video_box .venobox").length) {
        f(".olins_video_box .venobox").venobox()
    }
    if (f(".olins_tabs .tabs").length) {
        f(".olins_tabs .tabs").tabslet()
    }
    if (f(".olins_icon_tabs .tabs").length) {
        f(".olins_icon_tabs .tabs").tabslet()
    }
    if (f(".olins_centered_slider").length) {
        f(".olins_centered_slider").slick({
            centerMode: true,
            autoplay: true,
            pauseOnHover: false,
            slidesToShow: 3,
            variableWidth: true,
            adaptiveHeight: true,
            arrows: false,
            responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    pauseOnHover: false,
                    autoplay: true,
                    centerMode: true,
                    adaptiveHeight: true,
                    slidesToShow: 1,
                    variableWidth: false
                }
            }, {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    pauseOnHover: false,
                    autoplay: true,
                    centerMode: true,
                    adaptiveHeight: true,
                    slidesToShow: 1
                }
            }]
        });
        f(".olins_centered_slider").on("beforeChange", function (h, g) {
            f(".olins_centered_slider").height(g.listHeight)
        })
    }
    if (f(".backtotop").length) {
        var a = 700;
        f(".backtotop").on("click", function (g) {
            g.preventDefault();
            f("body,html").animate({scrollTop: 0}, a)
        })
    }
    if (f(".olins_sticky_header").length) {
        f(window).bind("scroll", function () {
            var g = f(document).scrollTop();
            var h = f(".olins_sticky_header").scrollTop() + 68;
            if (g > h) {
                f(".olins_sticky_header").addClass("sticky_active")
            } else {
                f(".olins_sticky_header").removeClass("sticky_active")
            }
        })
    }
    if (f(".menu_pop_search").length) {
        f(".search_open_button").on("click", function (g) {
            g.preventDefault();
            if (f(".pop_search_form_container").length) {
                f(".pop_search_form_container").css("display", "block")
            }
            if (f(".pop_search_form_container_rosi").length) {
                f(".pop_search_form_container_rosi").css("display", "flex")
            }
        });
        f(".close_the_form").on("click", function (g) {
            g.preventDefault();
            if (f(".pop_search_form_container").length) {
                f(".pop_search_form_container").css("display", "none")
            }
            if (f(".pop_search_form_container_rosi").length) {
                f(".pop_search_form_container_rosi").css("display", "none")
            }
        })
    }
    if (f(".brigitte_slider").length) {
        f(".brigitte-slider-container").slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            centerMode: true,
            lazyLoad: "progressive",
            nextArrow: '<span class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></span>',
            prevArrow: '<span type="button" class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
            variableWidth: true
        });
        f(".brigitte-slider-container").on("afterChange", function (h, g) {
            var i = f(".brigitte-slider-container").slick("slickCurrentSlide");
            f(".brigitte_slider .current_photo").text(i + 1)
        });
        var d = f(".brigitte-slider-container");
        f(document).on("keydown", function (g) {
            if (g.keyCode == 37) {
                d.slick("slickPrev")
            }
            if (g.keyCode == 39) {
                d.slick("slickNext")
            }
        })
    }
    if (f(".olins_works_slider_container").length) {
        f(".olins_works_slider").slick({
            dots: false,
            infinite: true,
            speed: 500,
            adaptiveHeight: true,
            nextArrow: ".next_works_slide",
            prevArrow: ".previous_works_slide"
        });
        f(".olins_works_slider").on("afterChange", function (h, g) {
            var i = f(".olins_works_slider").slick("slickCurrentSlide");
            f(".olins_works_slider_container .current_photo").text(i + 1)
        });
        var d = f(".olins_works_slider");
        f(document).on("keydown", function (g) {
            if (g.keyCode == 37) {
                d.slick("slickPrev")
            }
            if (g.keyCode == 39) {
                d.slick("slickNext")
            }
        })
    }
    if (f(".first_word_bold").length) {
        f(".first_word_bold").each(function () {
            var g = f(this);
            g.html(g.html().replace(/^(\w+)/, "<strong>$1</strong>"))
        })
    }
    if (f(".olins_progress_bar").length) {
        f(".olins_progress_bar .bar .progress").each(function () {
            var g = f(this);
            g.appear(function () {
                g.addClass("stretchRight").css("visibility", "visible")
            });
            g.next().css("opacity", "1")
        }, {accX: 0, accY: -300})
    }
    if (f(".olins_fashion_slider").length) {
        f(".olins_fashion_slider").slick({dots: true, arrows: false, infinite: true, speed: 500, adaptiveHeight: true});
        var d = f(".olins_fashion_slider");
        f(document).on("keydown", function (g) {
            if (g.keyCode == 37) {
                d.slick("slickPrev")
            }
            if (g.keyCode == 39) {
                d.slick("slickNext")
            }
        })
    }
    if (f(".olins_stephanie_slider_container").length) {
        f(".olins_stephanie_slider").slick({
            dots: false,
            infinite: true,
            slidesToShow: 4,
            centerMode: true,
            slidesToScroll: 1,
            speed: 500,
            adaptiveHeight: true,
            nextArrow: '<span class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></span>',
            prevArrow: '<span type="button" class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
            responsive: [{breakpoint: 1024, settings: {slidesToShow: 3, slidesToScroll: 1}}, {
                breakpoint: 600,
                settings: {slidesToShow: 2, slidesToScroll: 1}
            }, {breakpoint: 480, settings: {slidesToShow: 1, slidesToScroll: 1}}]
        });
        var d = f(".olins_stephanie_slider");
        f(document).on("keydown", function (g) {
            if (g.keyCode == 37) {
                d.slick("slickPrev")
            }
            if (g.keyCode == 39) {
                d.slick("slickNext")
            }
        })
    }
    if (f(".olins_scroll_works").length) {
        f("#olins_scroll_works").multiscroll({
            navigation: true,
            loopBottom: true,
            loopTop: true,
            sectionSelector: ".section",
            leftSelector: ".left",
            rightSelector: ".right",
            navigationPosition: "right",
            css3: true
        })
    }
});