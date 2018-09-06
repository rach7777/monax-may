console.log("custom.js loaded");

$(document).ready(function() {
  // ANALYTICS
  const analyticsIdentifyAndTrack = (form, eventName) => {
    const serialized = Array.isArray(form) ? form : $(form).serializeArray();
    const formData = {};
    serialized.forEach((input) => formData[input.name] = input.value);
    if (typeof analytics.user === 'function') formData.userId = analytics.user().id(); // added function check for local environment bug fix
    const method = formData.userId ? 'PUT' : 'POST';
    $.ajax({
      url: 'https://analytics.monax.io/monaxioregistry',
      method,
      data: formData,
    }).done((userId) => {
      formData.userId = userId;
      analytics.identify(
        userId,
        formData,
        { integrations: { Intercom: false } },
      );
      analytics.track(`${eventName}_${formData.source}`, formData);
    }).fail((err) => {
      console.log('Error requesting lead creation');
    });
    return formData;
  };


  // ========== GLOBAL ELEMENTS =============== //

  // DEFINE CONFIRMATION/SUCCESS POPUP ON FORMS
  const successPopup = $.alert({
      lazyOpen: true,
      theme: 'modern',
      closeIcon: true,
      animation: 'scale',
      title: "Thanks, we'll be in touch soon!",
      content: '<img class="img-responsive img-center" style="max-height:150px;" src="/img/assets/doug/doug_lo.png">',
      buttons: {
          close: {
              text: 'Great!',
              btnClass: 'btn btn-primary',
              keys: ['enter'],
          },
      },
      scrollToPreviousElement: false,
      backgroundDismiss: true,
  });

  // DOCUMENTS - '.dip-opacity' EFFECT
  $('.container-docs').hover(function(){
    if ($(window).width() > 750) {
      $(this).toggleClass("active");
    }
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

  // ELEMENTS - TABS
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


  // ========== ANIMATIONS =============== //

  // DETECT ANIMATION AOS FINISHED
  // Find all animation float elements
  var $animationContainer = $(".animate-after-aos");
  $($animationContainer).each( function( index ) {
    // calculate the animation delay
    var animationTimeout = ( $($animationContainer[index]).data('aos-delay') + $($animationContainer[index]).data('aos-duration') );
    // if it's already on screen, animate
    if ($($animationContainer[index]).hasClass("aos-animate")) {
      // init float animation
      setTimeout(function(){
        $($animationContainer[index]).addClass('next-animation');
      }, animationTimeout);
    } else {
    // otherwise, watch for class change
      var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
          if (mutation.attributeName === "class") {
            var attributeValue = $(mutation.target).prop(mutation.attributeName);
            if (attributeValue.includes("aos-animate")) {
              // init float animation
              setTimeout(function(){
                $(mutation.target).addClass('next-animation');
              }, animationTimeout);
              // don't watch for any more changes
              observer.disconnect();
            }
          }
        });
      });
      observer.observe($animationContainer[index], {
        attributes: true
      });
    }
  });


  // ========== NAV =============== //

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

  // NAV - REGISTER CTA ['REQUEST DEMO' FOR NOW]
  $('#nav-register').on('click', function(event){
    event.preventDefault(); // Change @@@
    analyticsIdentifyAndTrack([ { name: 'source', value: 'nav demo request' }], 'Demo Requested');
    Intercom('showNewMessage', "I'd like to see a demo of the Monax Platform");
  });


  // ========== GLOBAL SECTIONS =============== //

  // GLOBAL - HERO HEADER NEWSLETTER
  $("#hero-newsletter-form").validate({
    rules: {
      email: {
        required: true,
        email: true
      }
    },
    submitHandler: function(form) {
      analyticsIdentifyAndTrack(form, "Newsletter Subscribed");
      $('#hero-newsletter-form button').attr('disabled', 'disabled').html("Subscribed <i class='fa fa-check'></i>");
      successPopup.open();
      return false;
    },
    invalidHandler: function(event, validator) {
      var errors = validator.numberOfInvalids();
      if (errors) {
        console.log("form returned invalid");
        $('#hero-newsletter-form button').addClass('animated headShake');
      }
    }
  });

  // GLOBAL - HERO HEADER SIGNUP
  $("#hero-signup-form").validate({
    rules: {
      email: {
        required: true,
        email: true
      }
    },
    submitHandler: function(form) {
      analyticsIdentifyAndTrack(form, "Demo Requested");
      $('#hero-signup-submit').attr('disabled', 'disabled').html("Requested <i class='fa fa-check'></i>");
      successPopup.open();
      return false;
    },
    invalidHandler: function(event, validator) {
      var errors = validator.numberOfInvalids();
      if (errors) {
        console.log("form returned invalid");
        $('#hero-signup-submit').addClass('animated headShake');
      }
    }
  });

  // GLOBAL - MAIN CTA SECTION
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
  // validate main CTA section
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
      $("#main-cta-section button").addClass('disabled'); // Change @@@
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

  // GLOBAL - FOOTER NEWSLETTER
  $("#footer-newsletter-form").validate({
    rules: {
      email: {
        required: true,
        email: true
      }
    },
    submitHandler: function(form) {
      analyticsIdentifyAndTrack(form, "Newsletter Subscribed");
      $('#footer-newsletter-form button').attr('disabled', 'disabled').html("Subscribed <i class='fa fa-check'></i>");
      successPopup.open();
      return false;
    },
    invalidHandler: function(event, validator) {
      var errors = validator.numberOfInvalids();
      if (errors) {
        console.log("form returned invalid");
        $('#footer-newsletter-form button').addClass('animated headShake');
      }
    }
  });

  // GLOBAL - FOOTER REQUEST DEMO @@@ [REMOVE?]
  $('#request-demo-footer').on('click', function(event){
    event.preventDefault(); // Change @@@
    analyticsIdentifyAndTrack([ { name: 'source', value: 'footer demo request' }], 'Demo Requested');
    Intercom('showNewMessage', "I'd like to see a demo of the Monax Platform");
  });


  // ========== HOME =============== //

  // HOMEPAGE - ELEMENTS - CTA SECTION
  const $ctaOptions = $('#home-cta-options');
  const $ctaWebinarForm = $('#home-cta-webinar-signup');
  const $ctaDemoForm = $('#home-cta-request-demo');

  // HOMEPAGE - TOP - ANIMATION
  setTimeout(function(){
    $('#home-animation').addClass('active');
    $('#home-animation .img-to-float.delay-0').addClass('animate-float');
    setTimeout(function(){
      $('#home-animation .img-to-float.delay-1').addClass('animate-float');
    }, 750);
  }, 300);

  // HOMEPAGE - CTA - WEBINAR SIGNUP
  $('#home-cta-trigger-webinar-form').on('click', function(e) {
    e.preventDefault();
    if ( ! $ctaOptions.hasClass('form-triggered') ) {
      $ctaWebinarForm.slideToggle();
      $ctaOptions.addClass('form-triggered');
    } else {
      if ( $ctaWebinarForm.is(":visible") ) {
          $ctaWebinarForm.slideToggle();
          $ctaOptions.removeClass('form-triggered');
      } else {
        $ctaWebinarForm.show();
        $ctaDemoForm.hide();
      }
    }
  });
  $ctaWebinarForm.validate({
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
      $(form).slideToggle();
      $('#home-cta-trigger-webinar-form').unbind( "click" ).attr('disabled', 'disabled').html("Subscribed <i class='fa fa-check'></i>");
      $ctaOptions.removeClass('form-triggered');
      successPopup.open();
      return false;
    },
    invalidHandler: function(event, validator) {
      var errors = validator.numberOfInvalids();
      if (errors) {
        console.log("form returned invalid");
        $('#home-cta-webinar-signup button').addClass('animated headShake');
      }
    }
  });

  // HOMEPAGE - CTA - REQUEST A DEMO
  $('#home-cta-trigger-demo-form').on('click', function(e) {
    e.preventDefault();
    if ( ! $ctaOptions.hasClass('form-triggered') ) {
      $ctaDemoForm.slideToggle();
      $ctaOptions.toggleClass('form-triggered');
    } else {
      if ( $ctaDemoForm.is(":visible") ) {
          $ctaDemoForm.slideToggle();
          $ctaOptions.removeClass('form-triggered');
      } else {
        $ctaWebinarForm.hide();
        $ctaDemoForm.show();
      }
    }
  });
  $ctaDemoForm.validate({
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
      analyticsIdentifyAndTrack(form, "Demo Requested");
      $(form).slideToggle();
      $('#home-cta-trigger-demo-form').unbind( "click" ).attr('disabled', 'disabled').html("Requested <i class='fa fa-check'></i>");
      $ctaOptions.removeClass('form-triggered');
      successPopup.open();
      return false;
    },
    invalidHandler: function(event, validator) {
      var errors = validator.numberOfInvalids();
      if (errors) {
        console.log("form returned invalid");
        $('#home-cta-request-demo button').addClass('animated headShake');
      }
    }
  });

  // HOMEPAGE - WEBINAR SECTION [UNUSED AT THIS MOMENT]
  // $("#single-webinar-signup").validate({
  //   rules: {
  //     firstName: {
  //       required: true
  //     },
  //     lastName: {
  //       required: true
  //     },
  //     email: {
  //       required: true,
  //       email: true
  //     }
  //   },
  //   submitHandler: function(form) {
  //     analyticsIdentifyAndTrack(form, 'Webinar Subscribed');
  //     $('#single-webinar-signup button').addClass('disabled');
  //   },
  //   invalidHandler: function(event, validator) {
  //     var errors = validator.numberOfInvalids();
  //     if (errors) {
  //       console.log("form returned invalid");
  //       $('#single-webinar-signup button').addClass('animated headShake');
  //     }
  //   }
  // });


  // ========== COMPANY =============== //

  // HANDLE COMPANY HISTORY SELECT
  $(function(){
    var timelineContainer = $('.timeline-date-container');
  	var dateEntries = $('.timeline-date-entry');
  	var dateInfoArr = $('.timeline-info-container').find('.timeline-content');
    // date clicked
  	$(dateEntries).click(function(){
  		var dateSelected = $(this);
			var dateIndex = $(dateEntries).index(dateSelected);
			var matchedDate = $(dateInfoArr).eq(dateIndex);
  		$(dateSelected).add(dateInfoArr[dateIndex]).addClass('active');
  		$(dateEntries).not(dateSelected).add($(dateInfoArr).not(matchedDate)).removeClass('active');
  	});
    // hover on dates
    $(timelineContainer).hover(function(){
      if ($(window).width() > 750) {
        $(this).toggleClass("active");
      }
    });
  });


  // COMPANY TEAM LOCATION SELECT
  $(function(){
  	var locations = $('.js-select-city');
    var locationsContainer = $('.locations-container');
    var teamContainer = $('.team-container');
  	$(locations).click(function(){
      if ($(window).width() > 750) {
    		var elem = $(this);
    		var selectLocationRef = $(this).data("select");
        console.log(selectLocationRef);
        if ( ! $(elem).hasClass('toggleActive') ) {
        // Toggle new elem
          $(elem).add($(locationsContainer)).addClass('toggleActive');
      		$(locations).not(elem).removeClass('toggleActive');
          $(teamContainer).attr('data-selected', selectLocationRef);
        } else {
        // Untoggle elem
          $(elem).add($(locationsContainer)).removeClass('toggleActive');
          $(locationsContainer).removeClass('active');
          $(teamContainer).attr('data-selected', "");
        }
      }
  	});
    $(locationsContainer).mouseenter(function(){
      if ($(window).width() > 750) {
        $(this).addClass("active");
      }
    });
    $(locationsContainer).mouseleave(function(){
      if ($(window).width() > 750) {
        $(this).removeClass("active");
      }
    });
  });


});
