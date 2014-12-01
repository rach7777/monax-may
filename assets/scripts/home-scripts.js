//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 65)
        }, 750 );
        event.preventDefault();
    });
});

$(function() {
    var heightBases = $(".carousel-inner > .item");
    var makeItThisHeight = Math.round(heightBases[0].offsetHeight * 1.1);
    $("#about").height(makeItThisHeight);
    $(".carousel-inner").css("height", "100%");
    $(".carousel-inner > .item").css("height", "100%");
    console.log(makeItThisHeight);
})