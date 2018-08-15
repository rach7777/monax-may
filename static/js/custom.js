console.log("custom.js loaded");

$(document).ready(function() {
  // ANALYTICS
  const analyticsIdentifyAndTrack = (form, eventName) => {
    const serialized = Array.isArray(form) ? form : $(form).serializeArray();
    const formData = {};
    serialized.forEach((input) => formData[input.name] = input.value);
    formData.email = formData.email || analytics.user().id();
    analytics.identify(formData.email || analytics.user().anonymousId(), formData);
    analytics.track(`${eventName}_${formData.source}`, formData);
    if (formData.email) {
        $.ajax('https://analytics.monax.io/monaxioregistry', {
          data: formData,
        }).done(() => {
          console.log('Requested lead creation');
        }).fail(() => {
          console.log('Error requesting lead creation');
        });
    }
    return formData;
  };

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
    $('#home-animation').addClass('active');
    $('#home-animation .img-to-float.delay-0').addClass('animate-float');
    setTimeout(function(){
      $('#home-animation .img-to-float.delay-1').addClass('animate-float');
    }, 750);
  }, 300);


  // DETECT ANIMATION AOS FINISHED

  // Find all animation float elements
  var $animationContainer = $(".animate-after-aos");

  // for each element
  $($animationContainer).each( function( index ) {

    // calculate the animation delay
    var animationTimeout = ( $($animationContainer[index]).data('aos-delay') + $($animationContainer[index]).data('aos-duration') );
    // console.log(animationTimeout);

    // if it's already on screen, animate
    if ($($animationContainer[index]).hasClass("aos-animate")) {
      // console.log("no observer needed");
      // init float animation
      setTimeout(function(){
        $($animationContainer[index]).addClass('next-animation');
      }, animationTimeout);
    } else {
    // otherwise, watch for class change
      // console.log("added observer");
      var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
          if (mutation.attributeName === "class") {
            var attributeValue = $(mutation.target).prop(mutation.attributeName);
            // console.log("Class attribute changed to:", attributeValue);
            if (attributeValue.includes("aos-animate")) {
              // init float animation
              setTimeout(function(){
                $(mutation.target).addClass('next-animation');
              }, animationTimeout);
              // don't watch for any more changes
              observer.disconnect();
              // console.log("class changed - observer removed");
            }
          }
        });
      });
      observer.observe($animationContainer[index], {
        attributes: true
      });
    }

  });


  // HANDLE COMPANY HISTORY SELECT
  $(function(){
  	var inputs = $('.timeline-date');
  	var paras = $('.timeline-info-container').find('.timeline-content');
  	$(inputs).click(function(){
  		var t = $(this),
  				ind = t.index(),
  				matchedPara = $(paras).eq(ind);

  		$(t).add(matchedPara).addClass('active');
  		$(inputs).not(t).add($(paras).not(matchedPara)).removeClass('active');
  	});
  });

  // HANDLE TAB SELECT ON FEATURES
  $('.btn-tab-select').on('click', function(e) {
    e.preventDefault();
    var id = $(this).attr('href');
    // hide previous panel
    $('.tab-reveal').removeClass('active');
    // show current panel
    $(id).addClass('active');
    // switch active button
    $(this).addClass('active');
    $('.btn-tab-select').not(this).removeClass('active');
    // reset animations
    setTimeout(function(){
      AOS.refreshHard();
    }, 600);
  });


	// Accordions - FAQ Sections
		$('.accordion-toggle').on('click', function() {
      // slide section down
			$(this).next().slideToggle('600');
      // slide others up
			$(".accordion-content").not($(this).next()).slideUp('600');
      // toggle classes
			$(this).parent('.question').toggleClass('active').siblings().removeClass('active');
		});


    // Form validation
    $("#hero-signup-form").validate({
      rules: {
        email: {
          required: true,
          email: true
        }
      },
      submitHandler: function(form) {
        analyticsIdentifyAndTrack(form, "Demo Requested");
        $('#hero-signup-submit').addClass('disabled');
        var string = "I'd like to see a demo of the Monax Platform";
        Intercom('showNewMessage', string);
      },
      invalidHandler: function(event, validator) {
        var errors = validator.numberOfInvalids();
        if (errors) {
          console.log("form returned invalid");
          $('#hero-signup-submit').addClass('animated headShake');
        }
      }
    });
    $("#main-cta-section").validate({
      rules: {
        industry: {
          required: true
        },
        agreementsType: {
          required: true
        },
        frequency: {
          required: true
        }
      },
      submitHandler: function(form) {
        const { industry, agreementsType, frequency } = analyticsIdentifyAndTrack(form, "Demo Requested");
        $("#main-cta-section button").addClass('disabled');
        Intercom('showNewMessage', `I'm working in the ${industry} and am interested in creating ${agreementsType}. I ${frequency} a contract management platform. I'd like to see a demo of the Monax Platform.`);
      },
      invalidHandler: function(event, validator) {
        var errors = validator.numberOfInvalids();
        if (errors) {
          console.log("form returned invalid");
          $('#main-cta-section button').addClass('animated headShake');
        }
      }
    });
    $("#hero-newsletter-form").validate({
      rules: {
        email: {
          required: true,
          email: true
        }
      },
      submitHandler: function(form) {
        analyticsIdentifyAndTrack(form, "Newsletter Subscribed");
        const formParent = $(form).parent();
        $(form).remove();
        const confirmMessage = '<span class="range-left-sm" >Thank you for subscribing! You\'ll hear from us soon.</span>';
        const messageBox = `<div class="confirm-message"><img height="60px" src="${window.location.protocol}//${window.location.host}/img/logos/doug.png" alt="Doug"/>${confirmMessage}</div>`;
        formParent.append(messageBox);
      },
      invalidHandler: function(event, validator) {
        var errors = validator.numberOfInvalids();
        if (errors) {
          console.log("form returned invalid");
          $('#hero-newsletter-form button').addClass('animated headShake');
        }
      }
    });
    $("#footer-newsletter-form").validate({
      rules: {
        email: {
          required: true,
          email: true
        }
      },
      submitHandler: function(form) {
        analyticsIdentifyAndTrack(form, "Newsletter Subscribed");
        const formParent = $(form).parent();
        $(form).remove();
        const confirmMessage = '<span class="range-left-sm" >Thank you for subscribing! You\'ll hear from us soon.</span>';
        const messageBox = `<div class="confirm-message"><img height="60px" src="${window.location.protocol}//${window.location.host}/img/logos/doug.png" alt="Doug"/>${confirmMessage}</div>`;
        formParent.append(messageBox);
      },
      invalidHandler: function(event, validator) {
        var errors = validator.numberOfInvalids();
        if (errors) {
          console.log("form returned invalid");
          $('#footer-newsletter-form button').addClass('animated headShake');
        }
      }
    });
    $("#home-webinar-signup").validate({
      rules: {
        firstName: {
          required: true
        },
        lastName: {
          required: true
        },
        email: {
          required: true,
          email: true
        }
      },
      submitHandler: function(form) {
        analyticsIdentifyAndTrack(form, "Webinar Subscribed");
        const formParent = $(form).parent();
        $(form).remove();
        const confirmMessage = '<span class="range-left-sm" >Thank you for subscribing!</br>You\'ll hear from us soon.</span>';
        const messageBox = `<div class="confirm-message"><img height="160px" src="${window.location.protocol}//${window.location.host}/img/logos/doug.png" alt="Doug"/>${confirmMessage}</div>`;
        formParent.append(messageBox);
      },
      invalidHandler: function(event, validator) {
        var errors = validator.numberOfInvalids();
        if (errors) {
          console.log("form returned invalid");
          $('#home-webinar-signup button').addClass('animated headShake');
        }
      }
    });
    $("#single-webinar-signup").validate({
      rules: {
        firstName: {
          required: true
        },
        lastName: {
          required: true
        },
        email: {
          required: true,
          email: true
        }
      },
      submitHandler: function(form) {
        analyticsIdentifyAndTrack(form, 'Webinar Subscribed');
        $('#single-webinar-signup button').addClass('disabled');
      },
      invalidHandler: function(event, validator) {
        var errors = validator.numberOfInvalids();
        if (errors) {
          console.log("form returned invalid");
          $('#single-webinar-signup button').addClass('animated headShake');
        }
      }
    });
    $('#request-demo-footer').on('click', function(event){
      event.preventDefault();
      analyticsIdentifyAndTrack([ { name: 'source', value: 'footer demo request' }], 'Demo Requested');
      Intercom('showNewMessage', "I'd like to see a demo of the Monax Platform");
    });
    $('#nav-register').on('click', function(event){
      event.preventDefault();
      analyticsIdentifyAndTrack([ { name: 'source', value: 'nav demo request' }], 'Demo Requested');
      Intercom('showNewMessage', "I'd like to see a demo of the Monax Platform");
    });


});
