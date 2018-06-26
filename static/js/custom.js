console.log("custom.js loaded");

$(document).ready(function() {

  // MENU HOVER OPACITY ANIMATION
  $('.nav .dropdown-content').hover(function(){
    if ($(window).width() > 750) {
      $(this).toggleClass("active");
    }
  });

  // OPEN DROPDOWN MENU OVERLAY
  $('.dropdown').on('show.bs.dropdown', function(){
    if ( ! $('.dropdown').hasClass("open") && $(window).width() > 750 ) {
      $('#dropdown-overlay').stop(true, true).fadeIn();
    }
  });

  // CLOSE DROPDOWN MENU OVERLAY
  $('.dropdown-toggle').on("click", function() {
    if ( $(this).parent(".dropdown").hasClass("open") && $(window).width() > 750 ) {
      $('#dropdown-overlay').stop(true, true).fadeOut();
    }
  });
  $('#dropdown-overlay').click(function() {
    $('#dropdown-overlay').stop(true, true).fadeOut();
  });
  $('#dropdown-overlay').click(function() {
    $('#dropdown-overlay').stop(true, true).fadeOut();
  });

  // Document .dip-opacity
  $('.container-docs').hover(function(){
    console.log("hello");
    if ($(window).width() > 750) {
      $(this).toggleClass("active");
    }
  });

  // HANDLE CTA FUNCTIONS
  var arrowWidth = 20;
  $.fn.resizeselect = function(settings) {
    return this.each(function() {
      $(this).change(function(){
        var $this = $(this);
        // create test element
        var text = $this.find("option:selected").text();
        var $test = $("<span>").html(text).css({
          "font-size": $this.css("font-size"), // ensures same size text
          "visibility": "hidden" 							 // prevents FOUC
        });
        // add to body, get width, and get out
        $test.appendTo($this.parent());
        var width = $test.width();
        $test.remove();
        // set select width
        $this.width(width + arrowWidth);
        // run on start
      }).change();
    });
  };
  // run by default
  $("select.resizeselect").resizeselect();
  $("select.resizeselect").on('click', function(){
    $(this).parent().addClass('chosen');
  });

  // HANDLE HOMEPAGE TOP ANIMATION
  setTimeout(function(){
    $('.laptop-illustration').addClass('active');
    $('.laptop-illustration .img-to-float.delay-0').addClass('animate-float');
    setTimeout(function(){
      $('.laptop-illustration .img-to-float.delay-1').addClass('animate-float');
    }, 750);
  }, 300);



  // HANDLE COMPANY HISTORY SELECT
  $(function(){
  	var inputs = $('.timeline-date');
  	var paras = $('.timeline-info-container').find('p');
  	$(inputs).click(function(){
  		var t = $(this),
  				ind = t.index(),
  				matchedPara = $(paras).eq(ind);

  		$(t).add(matchedPara).addClass('active');
  		$(inputs).not(t).add($(paras).not(matchedPara)).removeClass('active');
  	});
  });

});
