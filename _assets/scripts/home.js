//= require vendor/skrollr

$(function () {

	equalheight = function(container){
	var currentTallest = 0,
	     currentRowStart = 0,
	     rowDivs = new Array(),
	     $el,
	     topPosition = 0;
	 $(container).each(function() {

	   $el = $(this);
	   $($el).height('auto')
	   topPostion = $el.position().top;

	   if (currentRowStart != topPostion) {
	     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
	       rowDivs[currentDiv].height(currentTallest);
	     }
	     rowDivs.length = 0; // empty the array
	     currentRowStart = topPostion;
	     currentTallest = $el.height();
	     rowDivs.push($el);
	   } else {
	     rowDivs.push($el);
	     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
	  }
	   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
	     rowDivs[currentDiv].height(currentTallest);
	   }
	 });
	}


	var layout = function(){
		equalheight('.wrap .col');

		if ($(window).width() > 780) {
		    skrollr.init({
	    		forceHeight: false,
	    		smoothScrolling: true,
	        	smoothScrollingDuration: 500,
				edgeStrategy: 'set',
				easing: {
					WTF: Math.random,
					inverted: function(p) {
						return 1-p;
					}
				}
	    	});
		  }

		  // disable skrollr if the window is resized below 768px wide
		  $(window).on('resize', function () {
		    if ($(window).width() <= 780) {
		      skrollr.init().destroy(); // skrollr.init() returns the singleton created above
		    }
		  });
	}


	$(window).load(function() {
    	layout();
	});

	//debounced resize

	var rtime = new Date(1, 1, 2000, 12,00,00);
	var timeout = false;
	var delta = 200;
	$(window).resize(function() {
	    rtime = new Date();
	    if (timeout === false) {
	        timeout = true;
	        setTimeout(resizeend, delta);
	    }
	});

	function resizeend() {
	  if (new Date() - rtime < delta) {
	    setTimeout(resizeend, delta);
	  } else {
	    timeout = false;
    	layout();
	  }
	}

	// Smooth scrolling anchor links
	$('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
	        || location.hostname == this.hostname) {

	        var target = $(this.hash);
	        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	        if (target.length) {
	        	var top_offset = 0;
	        	if ( $('.navbar').css('position') == 'fixed' ) {
	        		top_offset = $('.navbar').height();
	        	}
	        	 $('html,body').animate({
	        		 scrollTop: target.offset().top - top_offset
	        	}, 1000);
	        	return false;
	        }
	    }
	});

	// This adds an offset in case the header is fixed
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				var top_offset = 0;
				if ( $('.navbar').css('position') == 'fixed' ) {
					top_offset = $('.navbar').height();
				}
				 $('html,body').animate({
					 scrollTop: target.offset().top - top_offset
				}, 1000);
				return false;
			}
		}
	});

});