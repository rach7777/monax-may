'use strict';

global.jQuery = global.$ = require('jquery');
require('bootstrap');
require('prismjs');
require('matchHeight');
require('owl.carousel');

//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

$(function() {
  // open links in main content in a new tab, unless monax links
  $('#main-content a').not('a[href*=monax]').attr('target', '_blank');
  $("#main-content a").each(function () {
    if (!/^http:\/\//.test(this.href)) {
      this.setAttribute('target', '_self');
    }
  });

  // match the height of two columns -- generic
  $('.items-container').each(function() {
      $(this).children('.item').matchHeight();
  });

  // match the height of two columns -- homefooter
  $('#home-footer-container').each(function() {
      $(this).children('.item').matchHeight({
          target: $('#home-footer-linklist'),
      });
  });

  $('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayHoverPause:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1
        },
        1000:{
            items:3
        },
    }
  });
});

require('./tableOfContents');
require('./team');

// // expand viewport so footer goes down to bottom on low content pages...
// if ( $( "#monax-page" ).height() < $( window ).height() ) {
//   var offset = $( window ).height();
//   offset = offset - $('nav').height();
//   offset = offset - $('footer').height();
//   // padding/margins/something...
//   offset = offset - 47;
//   $( '#monax-page' ).height(offset);
// };

// var str = $( "h1[role='title']" ).text();
// replacePattern = /(Documentation)\s*\|\s*(\S*)\s\|\s(\S*)/gim;
// $("h1[role='title']").replaceWith(str.replace(replacePattern, '<h1 class="title" role="title"><a href="../../../">$1</a> | <a href="../../">$2</a> | $3</h1>'));
