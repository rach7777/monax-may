'use strict';

global.jQuery = global.$ = require('jquery');
require('bootstrap');
require('prismjs');
require('owl.carousel');
var lunr = require('lunr');

var lunrIndex,
    $results,
    pagesIndex;

// on document load
$(function() {
  /*
    ------------------------------------------------------------------------
      Site Wide Style // Layout
    ------------------------------------------------------------------------
  */
  // expand viewport so footer goes down to bottom on low content pages...
  if ( $( "#monax-page" ).height() < $( window ).height() ) {
    var offset = $( window ).height();
    offset = offset - $('nav').height();
    offset = offset - $('footer').height();

    // padding/margins/
    offset = offset - 47;
    $( '#monax-page' ).height(offset);
  };

  // add site wide tables classes to gfm rendered tables
  $('#main-content table').addClass('table table-bordered table-hover');

  // table of contents modifications; add proper classes for
  // scroll spy and formally constrain width of tables
  // this is necessary because its css positioning is fixed.
  $('#TableOfContents ul').addClass('nav nav-pills nav-stacked');
  $('#TableOfContents').children().css( "width", $('#TableOfContents').parent('.sidebar').width() );

  // initiate table of contents with scrollSpy
  if ($('#TableOfContents').length !== 0) {

    // Add scroll spy to watch Body
    $('body').scrollspy({ target: '#TableOfContents' });

    // hide anything > Level 2
    $('#TableOfContents ul li ul li').children('ul').empty();

    // sidebar vertical accordian with default collapse
    $('#TableOfContents ul li').not('.active').children('ul').slideUp(50);
    $('#TableOfContents').on('activate.bs.scrollspy', function() {
      $('#TableOfContents ul li').not('.active').children('ul').slideUp(50);
      $('#TableOfContents ul li.active ul').slideDown();
    });

    // smooth scrolling by scroll spy
    $('#TableOfContents ul a').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top)
      }, 750 );
      event.preventDefault();
    });
  }

  /*
    ------------------------------------------------------------------------
      Page Specific Style // Layout
    ------------------------------------------------------------------------
  */
  // home page only. logos carousels
  function random(owlSelector){
    owlSelector.children().sort(function(){
        return Math.round(Math.random()) - 0.5;
    }).each(function(){
      $(this).appendTo(owlSelector);
    });
  }

  $('.logos-carousel').each(function() {
    $( this ).owlCarousel({
      loop:true,
      autoplay:true,
      autoplayHoverPause:true,
      autoplayTimeout: (Math.floor(Math.random() * (8000 - 4000 + 1)) + 4000),
      responsive:{
          0:{
              items:1
          },
          1000:{
              items:4
          },
      }
    })
  });

  // home page only. use cases carousels
  $('.use-cases-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayHoverPause:true,
    autoplayTimeout: (Math.floor(Math.random() * (8000 - 4000 + 1)) + 4000),
    responsive:{
        0:{
            items:1
        },
        1000:{
            items:3
        },
    }
  });

  // team page
  $( ".team-member" ).hover(
    function() {
      $( this ).children( ".team-details").first().removeClass( "hidden" );
    }, function() {
      $( this ).children( ".team-details").first().addClass( "hidden" );
    }
  );

  /*
    ------------------------------------------------------------------------
      Search
    ------------------------------------------------------------------------
  */
  // search mechanism
  initLunr();

  // search display
  $('#search-reveal').click(function(event) {
    $('#search').toggle(50, function() {
      $('#results').toggle(50, function() {
        // $('#search').focus();
      });
    });
  });

  // search hide
  $('#search').blur(function(event) {
    $('#search').hide(function() {
      $('#results').hide();
    });
  });

  /*
    ------------------------------------------------------------------------
      Modals
    ------------------------------------------------------------------------
  */
  // we're not eris modal
  var url = window.location.href;
  if(url.indexOf('?redirect_from_eris=true') != -1) {
    $('#rebrandModal').modal('show');
  }

  // signup modal pop up on click
  $('.newsletter-signup').click(function(event) {
    $('#newsletterModal').modal('show');
  });
});


/*
  ------------------------------------------------------------------------
    Helpers -- Search functionality
  ------------------------------------------------------------------------
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