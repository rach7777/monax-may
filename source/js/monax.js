'use strict';

global.jQuery = global.$ = require('jquery');
require('bootstrap');
require('prismjs');
require('owl.carousel');
var validate = require('jquery-validation');
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

  $('#TableOfContents ul').addClass('nav nav-pills nav-stacked');

  // initiate table of contents with scrollSpy
  if ($('#TableOfContents').length !== 0) {

    $('.sidebar #TableOfContents').prepend("<em>Jump to:</em>").append("<hr />");
    $('.topbar #TableOfContents').prepend("<em>Jump to:</em>").append("<hr />");

    // smooth scrolling by scroll spy
    $('#TableOfContents ul a').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top)
      }, 750 );
      event.preventDefault();
    });
  }

  // Hide Header on on scroll down
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('nav.navbar').outerHeight();
  $('div.ghost-nav').css('height', navbarHeight);

  $(window).scroll(function(event){
      didScroll = true;
  });

  setInterval(function() {
      if (didScroll) {
          hasScrolled();
          didScroll = false;
      }
  }, 250);

  function hasScrolled() {
    var st = $(window).scrollTop();
    if(Math.abs(lastScrollTop - st) <= delta){
      return;
    }
        
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('nav.navbar').removeClass('nav-down').addClass('nav-up');
        if ( $('.navbar-collapse.collapse').hasClass('in') ) {
          $('.navbar-toggle').trigger('click').blur();
        }
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('nav.navbar').removeClass('nav-up').addClass('nav-down');
        }
    }
    lastScrollTop = st;
  }

  /*
    ------------------------------------------------------------------------
      Page Specific Style // Layout
    ------------------------------------------------------------------------
  */
  // home page only. logos carousels
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

  function getParameterByName(name) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
          results = regex.exec(location.search);
      return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  function matchClicked(ele_parent, ele_id) {
    if ($(`#${ele_parent}`).is(':not(:checked)')) {
      $(`#${ele_id}`).prop('checked', false);
    } else {
      $(`#${ele_id}`).prop('checked', true);
    }
  }

  function getCookie(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(';');
      for(var i = 0; i <ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
              c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
              return c.substring(name.length, c.length);
          }
      }
      return "";
  }

  if (getParameterByName("product_interest") == "premium_support") {
    $(`#user`).prop('checked', true);
    if (getParameterByName("monax_viewer_type") == "end_user") {
      $(`#end_user`).prop('checked', true);
      $(`#end_user_premium_support`).prop('checked', true);
    } else if (getParameterByName("monax_viewer_type") == "partner") {
      $(`#partner`).prop('checked', true);
      $("#partner_premium_support").prop('checked', true);
    }
    $('#first_name').focus();
  }

  if (getParameterByName("product_interest") == "sdk") {
    if (getParameterByName("monax_viewer_type") == "end_user") {
      $(`#end_user`).prop('checked', true);
      $(`#end_user_sdk`).prop('checked', true);
    } else if (getParameterByName("monax_viewer_type") == "partner") {
      $(`#partner`).prop('checked', true);
      $("#partner_sdk").prop('checked', true);
    }
    $('#first_name').focus();
  }

  $("#partner_premium_support").click(function() {
    matchClicked("partner_premium_support", "partner");
    matchClicked("partner_premium_support", "user");
  });

  $("#end_user_premium_support").click(function() {
    matchClicked("end_user_premium_support", "user");
    matchClicked("end_user_premium_support", "end_user");
  });

  $("#end_user_sdk").click(function() {
    matchClicked("end_user_sdk", "end_user");
  });

  $("#partner_sdk").click(function() {
    matchClicked("partner_sdk", "partner");
  })

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
    var $search = $('#search');
    if ( $search.is(":hidden") ) {
      $search.show(300, function(){
        $search.focus();
      });
    } else {
      $search.hide(300);
    }
  });

  // Only open search dropdown on search input (3+ chars)
  $('#search').keyup( function(){
    var $results = $('#results');
    var s = $('#search').val();
    if(s.length <= 2) {
      $results.hide(300).find('.dropdown-menu').hide(300); // not needed
    } else {
      $results.show(300).find('.dropdown-menu').show(300);

      // if no results, display 'no results found'
      if( $results.is(":empty") && $results.find(".no-results").length == 0) {
        $results.append("<li class='no-results'>No results found...</li>");
      }
    }
  });

  // search hide
  $('#search').blur(function(event) {
    $('#search').hide(function() {
      $('#results').hide();
    });
  });

  /*
    ------------------------------------------------------------------------
      Forms
    ------------------------------------------------------------------------
  */

  // Reveal all fields when typing
  $("#contact-monax-form #company").bind("keyup", function(e) {
      if( $('#contact-monax-form .start-hidden:first').is(":hidden") ) {
        $(".start-hidden").slideDown(300);
      }
  });

  // Validate contact form
  $("#contact-monax-form").validate({
    rules: {
      first_name: {
        required: true,
        minlength: 2
      },
      last_name: {
        required: true,
        minlength: 2
      },
      email: {
        required: true,
        email: true
      },
      company: {
        required: true,
        minlength: 2
      },
      industry: {
        required: true
      }
    },
    messages: {
      first_name: "Please specify your name",
      last_name: "Please specify your name",
      email: {
        required: "Please specify your email address",
        email: "Please enter a valid email address"
      },
      company: "Please enter your company name",
      industry: "Please enter your company's sector"
    },
    validClass: "pass-validation",
    submitHandler: function(form) {
      $("#00N4100000KxGSr").val(getCookie("_jsuid"));
      $.ajax({
        url: form.action,
        data: $(form).serialize(),
        dataType: "json",
        type: "POST",
        beforeSend: function(){
          $("#contact-monax-form").slideUp(400);
          $("#form_loader").fadeIn(400);
        },
        error: function(xhr, status, error) {
          // Temp debug
          console.log("Error data:");
          console.log(xhr);
          console.log(status);
          console.log(error);

          setTimeout(function(){
            $("#form_loader").fadeOut(400);
            $("#error_message").slideDown(400);
          }, 600);
        },
        success: function(data, status, xhr) {
          // Temp debug
          console.log("Success data:");
          console.log(data);
          console.log(status);
          console.log(xhr);

          setTimeout(function(){
            $("#form_loader").fadeOut(400);
            $("#success_message").slideDown(400);
          }, 300);
        },
        complete: function( event, xhr, settings ) {
          // Temp debug
          console.log("Completed data:");
          console.log(event);
          console.log(xhr);
          console.log(settings);
        }
      });
    }
  });

  // Dismiss error message
  $("#error_message").click(function() {
    setTimeout(function(){
      $("#contact-monax-form").slideDown(400);
      $("#error_message").slideUp(400);
    }, 300);
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