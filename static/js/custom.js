console.log("custom.js loaded");

$(document).ready(function() {

  // OPEN LOGIN BAR
  $('#nav-toggle-login').click(function() {
    $('#login-bar').slideToggle();
  });

  // MENU
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
      console.log("hide");
      $('#dropdown-overlay').stop(true, true).fadeOut();
    }
  });
  $('#dropdown-overlay').click(function() {
    console.log("hide");
    $('#dropdown-overlay').stop(true, true).fadeOut();
  });


});



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
