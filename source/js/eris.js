'use strict';

var $ = jQuery = require('jquery');
require('owl.carousel');
require('bootstrap');
require('prismjs');

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

// add on _blank for not us links
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        || location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

var str = $( "h1[role='title']" ).text();
replacePattern = /(Documentation)\s*\|\s*(\S*)\s\|\s(\S*)/gim;
$("h1[role='title']").replaceWith(str.replace(replacePattern, '<h1 class="title" role="title"><a href="../../../">$1</a> | <a href="../../">$2</a> | $3</h1>'));

$('.owl-carousel').owlCarousel({
  loop: true,
  autoPlay: 3000, //Set AutoPlay to 3 seconds
  stopOnHover: true,
  margin: 10,
  navigation: false,
  items: 3,
  itemsDesktop: [1000,2],
  itemsDesktopSmall: [900,2],
  itemsTablet: [600,2],
  itemsMobile: false,
})

require('./tableOfContents');
require('./team');
