//jQuery to collapse the navbar on scroll


//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
});

$(function() {
});

$(function() {
    if ( document.body.clientWidth <= 992 ) {
      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
          document.getElementById('vid-webm').src = "";
          document.getElementById('vid-mp4').src = "";
      };
    };
});

$(document).ready(function() {
    // fix the carousel
    var heightBases = $(".carousel-inner > .item");
    var makeItThisHeight = Math.round(heightBases[0].offsetHeight * 1.1);
    $("#about").height(makeItThisHeight);
    $(".carousel-inner").css("height", "100%");
    $(".carousel-inner > .item").css("height", "100%");

    // smooth scrolling
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 65)
        }, 750 );
        event.preventDefault();
    });

    // jquery to collapse the navbar on scroll
    $(window).scroll(function() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });

    // fix the damn images
    var boxHeight = [];
    var imgHeight = [];
    var topMargin = [];
    var boxes = $('.single-content-box').toArray();
    var imags = $('.downier').toArray();
    setTimeout(function() {
        $.each(boxes, function(i, v) {
            boxHeight[i] = $(this).height();
        });
        $.each(imags, function(i, v) {
            imgHeight[i] = $(this).height();
        });
        for (var i = 0; i < boxHeight.length; ++i) {
            topMargin[i] = parseInt(((boxHeight[i] - imgHeight[i])/2), 10);
        }
        $.each(imags, function(i, v) {
            var t = String(topMargin[i]) + "px";
            // need to do this manually cause we can't get the heights of hidden divs
            if (i == 1 || i == 2) {
                t = String(topMargin[0]) + "px";
            }
            $(this).css("margin-top", t);
        });
    }, 50);
});