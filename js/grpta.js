/*HEADER FIXED*/
$(function () {
    $(window).on("scroll", function () {
        var $windowh = $(document).scrollTop(),
            $headerh = $(".header").outerHeight(),
            $bannerh = $(".mainBanner").outerHeight(),
            $header = $('.header');
        if ($windowh > $headerh) {
            $header.addClass("move_header");
        } else {
            $header.removeClass("move_header");
        }
        if ($windowh > $bannerh) {
            $header.addClass("fixed_header");
        } else {
            $header.removeClass("fixed_header");
        }
    });
});
/*GO TOP*/
$(function () {
    $(window).on("scroll", function () {
        var $backtop = $(".backPageTop");
        {
            if ($(this).scrollTop() > 300) {
                $backtop.show();
            } else {
                $backtop.hide();
            }
        }
    });
    $(".backPageTop").on("click", function () {
        $("html,body").animate({
            scrollTop: 0
        }, 300);
        return false;
    });
});


/** 
$(function () {
    $(window).on("scroll", function () {
        var $backtop = $(".backPageTop");
        $backtop.hide();
        if ($(this).width() > 767) {
            if ($(this).scrollTop() > 300) {
                $backtop.show();
            } else {
                $backtop.hide();
            }
        }
    });
    $(".backPageTop").on("click", function () {
        $("html,body").animate({
            scrollTop: 0
        }, 300);
        return false;
    });
});
 **/

