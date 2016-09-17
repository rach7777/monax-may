'use strict';

global.jQuery = global.$ = require('jquery');
require('bootstrap');
require('prismjs');
require('matchHeight');
require('owl.carousel');

// on document load
$(function() {
  // expand viewport so footer goes down to bottom on low content pages...
  if ( $( "#monax-page" ).height() < $( window ).height() ) {
    var offset = $( window ).height();
    offset = offset - $('nav').height();
    offset = offset - $('footer').height();
    // padding/margins/something...
    offset = offset - 47;
    $( '#monax-page' ).height(offset);
  };

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

  // home page only. run owl carousel
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

  // table of contents modifications; add proper classes for
  // scroll spy and formally constrain width
  $('#TableOfContents ul').addClass('nav nav-pills nav-stacked');
  $('#TableOfContents').children().css( "width", $('#TableOfContents').parent('.sidebar').width() );

  // table of contents
  if ($('#TableOfContents').length !== 0) {

    // Add proper attributes to Body
    $('body').scrollspy({ target: '#TableOfContents' });

    // sidebar collapse
    $('#TableOfContents ul li').not('.active').children('ul').slideUp(50);
    $('#TableOfContents').on('activate.bs.scrollspy', function() {
      $('#TableOfContents ul li').not('.active').children('ul').slideUp();
      $('#TableOfContents ul li.active ul').slideDown();
    });

    // smooth scrolling
    $('#TableOfContents ul a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top)
        }, 750 );
        event.preventDefault();
    });
  }

  // team page
  $( ".team-member" ).hover(
    function() {
      $( this ).children( ".team-details").first().removeClass( "hidden" );
    }, function() {
      $( this ).children( ".team-details").first().addClass( "hidden" );
    }
  );
});
