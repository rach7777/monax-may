//= require vendor/jquery.min
//= require vendor/bootstrap.min

//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// open links in main content in a new tab, unless eris links
$('#main-content a').not('a[href*=erisindustries]').attr('target', '_blank');
$("#main-content a").each(function () {
  if (!/^http:\/\//.test(this.href)) {
    this.setAttribute('target', '_self');
  }
});


// expand viewport so footer goes down to bottom on low content pages...
if ( $( "#eris-page" ).height() < $( window ).height() ) {
  var offset = $( window ).height();
  offset = offset - $('nav').height();
  offset = offset - $('footer').height();
  // padding/margins/something...
  offset = offset - 47;
  $( '#eris-page' ).height(offset);
};
