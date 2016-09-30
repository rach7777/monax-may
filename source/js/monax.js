'use strict';

global.jQuery = global.$ = require('jquery');
require('bootstrap');
require('prismjs');
require('matchHeight');
require('owl.carousel');
var lunr = require('lunr');

var lunrIndex,
    $results,
    pagesIndex;

// on document load
$(function() {
  $(".dropdown-toggle").dropdown();

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
  // logos carousels
  $('.logos-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayHoverPause:true,
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:1
        },
        1000:{
            items:4
        },
    }
  });

  // home page only. run owl carousel
  // use cases carousels
  $('.use-cases-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayHoverPause:true,
    autoplayTimeout:9000,
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

    // hide anything > Level 2
    $('#TableOfContents ul li ul li').children('ul').empty();

    // sidebar collapse
    $('#TableOfContents ul li').not('.active').children('ul').slideUp(50);
    $('#TableOfContents').on('activate.bs.scrollspy', function() {
      $('#TableOfContents ul li').not('.active').children('ul').slideUp(50);
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

  // search mechanism
  initLunr();

  // search display
  $('#search-reveal').click(function(event) {
    $('#search').slideToggle(400, function() {
      $('#search').focus();
    });
  });

  $('#search').blur(function(event) {
    $('#search').toggle(400);
  })

  // team page
  $( ".team-member" ).hover(
    function() {
      $( this ).children( ".team-details").first().removeClass( "hidden" );
    }, function() {
      $( this ).children( ".team-details").first().addClass( "hidden" );
    }
  );

  // we're not eris modal
  var url = window.location.href;
  if(url.indexOf('?redirect_from_eris=true') != -1) {
      $('#myModal').modal('show');
  }

  // add bootstrap tables to gfm rendered tables
  $('#main-content table').addClass('table table-bordered table-hover');
});


/*
----------------------------------------------------------------------------------------------
Helpers -- Search functionality
----------------------------------------------------------------------------------------------
*/
function initLunr() {
  $.getJSON("/js/index.json")
    .done(function(index) {
      pagesIndex = index;

      pagesIndex = pagesIndex.filter(function(page){ //ensure nulls don't get added
        return page != null
      });

      lunrIndex = lunr(function() {
        this.field("title", {
          boost: 11
        });
        this.field("author", {
          boost: 9
        });
        this.field("categories", {
          boost: 7
        });
        this.field("tags", {
          boost: 5
        });
        this.field("excerpt", {
          boost: 3
        });
        this.field("content");
        this.ref("uri");
      });

      pagesIndex.forEach(function(page) {
        lunrIndex.add(page);
      });
    })
    .fail(function(jqxhr, textStatus, error) {
        var err = textStatus + ", " + error;
        console.error("Error getting index flie:", err);
    });
  return initUI();
}

function initUI() {
  $results = $("#results");
  $("#search").keyup(function() {
    $results.empty();

    // Only trigger a search when 3 chars. at least have been provided
    var query = $(this).val();
    if (query.length < 3) {
      return;
    }

    var results = search(query);
    renderResults(results);
  });
}

function search(query) {
  return lunrIndex.search(query).map(function(result) {
    pagesIndex.forEach(function(page) {
      if (page.uri === result.ref) { // add score so we can sort on it later
        page.score = result.score;
      }
    });
    return pagesIndex.filter(function(page) {
      return page.uri === result.ref;
    })[0];
  });
}

function compare(a, b) { // reverse sort by score -> date
  if (a.score > b.score)
    return -1;
  if (a.score < b.score)
    return 1;
  if (a.date > b.date)
    return -1;
  if (a.date < b.date)
    return 1;
  return 0;
}

function renderResults(results) {
  if (!results.length) {
    return;
  }

  // Only show the ten first results
  results.slice(0, 10).sort(compare).forEach(function(result) {
    var $result = $("<li>");
    $result.append($("<a>", {
      href: result.uri,
      text: result.title
    }));
    $results.append($result);
  });
}