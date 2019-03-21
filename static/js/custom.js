
$(document).ready(function() {
  // ANALYTICS
  const analyticsIdentifyAndTrack = (form, eventName) => {
    const serialized = Array.isArray(form) ? form : $(form).serializeArray();
    const formData = { [eventName]: true };
    serialized.forEach((input) => formData[input.name] = input.value);
    if (typeof analytics.user === 'function') formData.userId = analytics.user().id(); // added function check for local environment bug fix
    const method = formData.userId ? 'PUT' : 'POST';
    var analyticsURL = 'https://analytics.monax.io/monaxioregistry'
    if (window.location.hostname.includes("staging")) {
      analyticsURL = analyticsURL + '?sentfrom=staging'
    }
    $.ajax({
      url: analyticsURL,
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

  // DEFINE CONFIRMATION/SUCCESS POPUP ON FORMS - UNUSED
  // const successPopup = $.alert({
  //     lazyOpen: true,
  //     theme: 'modern',
  //     closeIcon: true,
  //     animation: 'scale',
  //     title: "Thanks, we'll be in touch soon!",
  //     content: '<img class="img-responsive img-center" style="max-height:150px;" src="/img/assets/doug/doug_lo.png">',
  //     buttons: {
  //         close: {
  //             text: 'Great!',
  //             btnClass: 'btn btn-primary',
  //             keys: ['enter'],
  //         },
  //     },
  //     scrollToPreviousElement: false,
  //     backgroundDismiss: true,
  // });

  // DEFINE REQUEST A DEMO POPUP FROM NAV
  const requestDemoPopup = $.dialog({
      lazyOpen: true,
      theme: 'monax-mobile-only',
      closeIcon: true,
      animation: 'scale',
      title: ' ',
      content: 'url:/html/nav_signup.html',
      onContentReady: function () {
        $("#nav-signup").validate({
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
            analyticsIdentifyAndTrack(form, 'Demo Requested');
            // get form data and pass onto Calendly
            var formDataArr = {};
            $.each( $(form).serializeArray(), function(i, field) {
                formDataArr[field.name] = field.value;
            });
            const qString = "?name=" + encodeURIComponent( formDataArr['firstName'] + " " + formDataArr['lastName'] ) + "&email=" + encodeURIComponent( formDataArr['email'] ) + "&a1=" + encodeURIComponent( formDataArr['company'] );
            var calendlyUrl = 'https://calendly.com/monax/demo' + qString;
            // redirect for mobile
            window.location.href = calendlyUrl;

            // // vars
            // const formFields = $('#nav-signup .form-fields');
            // // animate Doug
            // const successMessageCont = $(formFields).next();
            // const successDoug = $(successMessageCont).find('.success-doug-img');
            // const successText = $(successMessageCont).find('.success-text');
            // // $(successText).html('Requested <i class="fa fa-check"></i>'); // enable to customize success message text
            // const successInfo = $(successMessageCont).find('.success-info');
            // // $(successInfo).html('custom success text'); // enable to customize success information
            // $(formFields).slideToggle(400, function() {
            //   setTimeout(function(){
            //     $(successMessageCont).animate({width:'toggle'},600, function() {
            //       setTimeout(function(){
            //         $(successInfo).slideToggle(800, function() {
            //           setTimeout(function(){ requestDemoPopup.close(); }, 2400);
            //         });
            //       }, 400);
            //     });
            //   }, 200);
            // });

            // prevent redirect
            return false;
          },
          invalidHandler: function(event, validator) {
            var errors = validator.numberOfInvalids();
            if (errors) {
              console.log("form returned invalid");
              $('#nav-signup button').addClass('animated headShake');
            }
          }
        });
      },
      scrollToPreviousElement: false,
      backgroundDismiss: true,
      columnClass: 'col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 col-xs-12',
      containerFluid: true, // this will add 'container-fluid' instead of 'container'
  });

  // NAV SIGNUP REQUEST A DEMO FORM ON DESKTOP
  $("#nav-signup-desktop").validate({
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
      analyticsIdentifyAndTrack(form, 'Demo Requested');
      // get form data and pass onto Calendly
      var formDataArr = {};
      $.each( $(form).serializeArray(), function(i, field) {
          formDataArr[field.name] = field.value;
      });
      const qString = "?name=" + encodeURIComponent( formDataArr['firstName'] + " " + formDataArr['lastName'] ) + "&email=" + encodeURIComponent( formDataArr['email'] ) + "&a1=" + encodeURIComponent( formDataArr['company'] );
      var calendlyUrl = 'https://calendly.com/monax/demo' + qString;
      // popup for desktops
      Calendly.showPopupWidget( calendlyUrl );

      // vars
      const formFields = $('#nav-signup-desktop .form-fields');
      // animate Doug
      const successMessageCont = $(formFields).next();
      const successDoug = $(successMessageCont).find('.success-doug-img');
      const successText = $(successMessageCont).find('.success-text');
      // $(successText).html('Requested <i class="fa fa-check"></i>'); // enable to customize success message text
      const successInfo = $(successMessageCont).find('.success-info');
      // $(successInfo).html('custom success text'); // enable to customize success information
      $(formFields).slideToggle(400, function() {
        setTimeout(function(){
          $(successMessageCont).animate({width:'toggle'},600, function() {
            setTimeout(function(){ $(successInfo).slideToggle(800); }, 400);
          });
        }, 200);
      });

      // prevent redirect
      return false;
    },
    invalidHandler: function(event, validator) {
      var errors = validator.numberOfInvalids();
      if (errors) {
        console.log("form returned invalid");
        $('#nav-signup-desktop button').addClass('animated headShake');
      }
    }
  });


  // GLOBAL - ELEMENTS - CTA_TWO_BUTTON SECTION
  const $ctaOptions = $('#cta-options');
  const $ctaWebinarForm = $('#cta-webinar-signup');
  const $ctaDemoForm = $('#cta-request-demo');

  // GLOBAL CTA_TWO_BUTTON - WEBINAR SIGNUP
  $('#cta-trigger-webinar-form').on('click', function(e) {
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
      // animate Doug
      const successMessageCont = $($ctaOptions).next().find('.success-message-container');
      const successDoug = $(successMessageCont).find('.success-doug-img');
      const successText = $(successMessageCont).find('.success-text');
      // $(successText).html('Requested <i class="fa fa-check"></i>'); // enable to customize success message text
      const successInfo = $(successMessageCont).find('.success-info');
      // $(successInfo).html('custom success text'); // enable to customize success information
      $($ctaOptions).slideToggle();
      $(form).slideToggle(400, function() {
        setTimeout(function(){
          $(successMessageCont).animate({width:'toggle'},600, function() {
            setTimeout(function(){ $(successInfo).slideToggle(800); }, 400);
          });
        }, 200);
        // remove form
        $(form).remove();
      });
      // prevent redirect
      return false;
    },
    invalidHandler: function(event, validator) {
      var errors = validator.numberOfInvalids();
      if (errors) {
        console.log("form returned invalid");
        $('#cta-webinar-signup button').addClass('animated headShake');
      }
    }
  });

  // GLOBAL - CTA_TWO_BUTTON - REQUEST A DEMO
  $('#cta-trigger-demo-form').on('click', function(e) {
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
      // get form data and pass onto Calendly
      var formDataArr = {};
      $.each( $(form).serializeArray(), function(i, field) {
          formDataArr[field.name] = field.value;
      });
      const qString = "?name=" + encodeURIComponent( formDataArr['firstName'] + " " + formDataArr['lastName'] ) + "&email=" + encodeURIComponent( formDataArr['email'] ) + "&a1=" + encodeURIComponent( formDataArr['company'] );
      var calendlyUrl = 'https://calendly.com/monax/demo' + qString;
      // redirect if mobile, otherwise show popup form
      if( $(window).width() < 768 ) {
        window.location.href = calendlyUrl;
      } else {
        Calendly.showPopupWidget( calendlyUrl );
      }

      // animate Doug
      const successMessageCont = $($ctaOptions).next().find('.success-message-container');
      const successDoug = $(successMessageCont).find('.success-doug-img');
      const successText = $(successMessageCont).find('.success-text');
      // $(successText).html('Requested <i class="fa fa-check"></i>'); // enable to customize success message text
      const successInfo = $(successMessageCont).find('.success-info');
      // $(successInfo).html('custom success text'); // enable to customize success information
      $($ctaOptions).slideToggle();
      $(form).slideToggle(400, function() {
        setTimeout(function(){
          $(successMessageCont).animate({width:'toggle'},600, function() {
            setTimeout(function(){ $(successInfo).slideToggle(800); }, 400);
          });
        }, 200);
        // remove form
        $(form).remove();
      });

      // prevent redirect
      return false;
    },
    invalidHandler: function(event, validator) {
      var errors = validator.numberOfInvalids();
      if (errors) {
        console.log("form returned invalid");
        $('#cta-request-demo button').addClass('animated headShake');
      }
    }
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
    if ( ! $(this).hasClass('active') ) {
      $(this).addClass('active');
      $('.btn-tab-select').not(this).removeClass('active');
      // if clicked on active deselectable btn, deselect it
    } else if ( $(this).hasClass('deselectable') ) {
      $(this).removeClass('active').blur();
    }
    // reset animations
    setTimeout(function(){
      AOS.refreshHard();
    }, 600);
  });


  // EXPLAINERS TAB SELECT
  $(function(){
    var explainerCategoryTabs = $('.js-select-explainers');
    // filterizr object
    var articleContainer = $('.article-container').filterizr({
      layout: 'sameSize'
    });
  	$(explainerCategoryTabs).click(function(e){
  		var selectCategoryRef = $(this).data("filter");
      if ( $(this).hasClass('active') ) {
        articleContainer.filterizr('filter', selectCategoryRef);
      } else {
        articleContainer.filterizr('filter', 'all');
      }
      // prevent redirect
      return false;
  	});
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

  // NAV - REGISTER CTA ['REQUEST DEMO']
  $('#nav-register').on('click', function(event){
    // open a popup on mobile devices, open rollout box on desktop
    if ( $(window).width() > 982 ) {
      $(this).parent().parent(".dropdown").toggleClass("open");
    } else {
      requestDemoPopup.open();
    }
    // prevent redirect
    event.preventDefault();
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
      // animate Doug
      const successMessageCont = $(form).next().find('.success-message-container');
      const successDoug = $(successMessageCont).find('.success-doug-img');
      const successText = $(successMessageCont).find('.success-text');
      // $(successText).html('Requested <i class="fa fa-check"></i>'); // enable to customize success message text
      const successInfo = $(successMessageCont).find('.success-info');
      // $(successInfo).html('custom success text'); // enable to customize success information
      $(form).slideToggle(400, function() {
        $(form).parent().removeClass('flex-container');
        setTimeout(function(){
          $(successMessageCont).animate({width:'toggle'},600, function() {
            setTimeout(function(){ $(successInfo).slideToggle(800); }, 400);
          });
        }, 200);
        // remove form
        $(form).remove();
      });
      // prevent redirect
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
      // get form data and pass onto Calendly
      var formDataArr = {};
      $.each( $(form).serializeArray(), function(i, field) {
          formDataArr[field.name] = field.value;
      });
      const qString = "?email=" + encodeURIComponent( formDataArr['email'] );
      var calendlyUrl = 'https://calendly.com/monax/demo' + qString;
      // redirect if mobile, otherwise show popup form
      if( $(window).width() < 768 ) {
        window.location.href = calendlyUrl;
      } else {
        Calendly.showPopupWidget( calendlyUrl );
      }

      // animate Doug
      const successMessageCont = $(form).closest('.signup-container').find('.success-message-container');
      const successDoug = $(successMessageCont).find('.success-doug-img');
      const successText = $(successMessageCont).find('.success-text');
      // $(successText).html('Requested <i class="fa fa-check"></i>'); // enable to customize success message text
      const successInfo = $(successMessageCont).find('.success-info');
      // $(successInfo).html('custom success text'); // enable to customize success information
      $(form).slideToggle(400, function() {
        $(form).parent().removeClass('flex-container');
        setTimeout(function(){
          $(successMessageCont).animate({width:'toggle'},600, function() {
            setTimeout(function(){ $(successInfo).slideToggle(800); }, 400);
          });
        }, 200);
        // remove form
        $(form).remove();
      });

      // prevent redirect
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

  // GLOBAL - SECONDARY_CTA SIGNUP
  $("#secondary-cta").validate({
    rules: {
      email: {
        required: true,
        email: true
      }
    },
    submitHandler: function(form) {
      analyticsIdentifyAndTrack(form, "Demo Requested");
      // get form data and pass onto Calendly
      var formDataArr = {};
      $.each( $(form).serializeArray(), function(i, field) {
          formDataArr[field.name] = field.value;
      });
      const qString = "?email=" + encodeURIComponent( formDataArr['email'] );
      var calendlyUrl = 'https://calendly.com/monax/demo' + qString;
      // redirect if mobile, otherwise show popup form
      if( $(window).width() < 768 ) {
        window.location.href = calendlyUrl;
      } else {
        Calendly.showPopupWidget( calendlyUrl );
      }

      // animate Doug
      const successMessageCont = $(form).closest('.signup-container').find('.success-message-container');
      const successDoug = $(successMessageCont).find('.success-doug-img');
      const successText = $(successMessageCont).find('.success-text');
      // $(successText).html('Requested <i class="fa fa-check"></i>'); // enable to customize success message text
      const successInfo = $(successMessageCont).find('.success-info');
      // $(successInfo).html('custom success text'); // enable to customize success information
      $(form).slideToggle(400, function() {
        $(form).parent().removeClass('flex-container');
        setTimeout(function(){
          $(successMessageCont).animate({width:'toggle'},600, function() {
            setTimeout(function(){ $(successInfo).slideToggle(800); }, 400);
          });
        }, 200);
        // remove form
        $(form).remove();
      });

      // prevent redirect
      return false;
    },
    invalidHandler: function(event, validator) {
      var errors = validator.numberOfInvalids();
      if (errors) {
        console.log("form returned invalid");
        $('#secondary-cta-submit').addClass('animated headShake');
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
    // if main cta reveal hidden fields
    $("#main-cta-section .hide-until-active").slideDown();
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
      },
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
      // force user to choose at least one option
      if ( ! $("#main-cta-section .select-wrap.chosen").length ) {
        $("#main-cta-section .select-wrap").addClass('select-error');
        // $("#main-cta-section .hide-until-active").slideDown();
        console.log('no options chosen');
        return false;
      }
      const { industry, agreementsType, frequency } = analyticsIdentifyAndTrack(form, "Demo Requested");

      // if calendly is enabled, show popup/redirect, otherwise show thankyou message
      if ( $(form).data('enableCalendly') ){
        // get form data and pass onto Calendly
        var formDataArr = {};
        $.each( $(form).serializeArray(), function(i, field) {
            formDataArr[field.name] = field.value;
        });
        const qString = "?name=" + encodeURIComponent( formDataArr['firstName'] + " " + formDataArr['lastName'] ) + "&email=" + encodeURIComponent( formDataArr['email'] ) + "&a1=" + encodeURIComponent( formDataArr['company'] ) + "&a2=" + encodeURIComponent( formDataArr['industry'] );
        var calendlyUrl = 'https://calendly.com/monax/demo' + qString;

        // redirect if mobile, otherwise show popup form
        if( $(window).width() < 768 ) {
          window.location.href = calendlyUrl;
        } else {
          Calendly.showPopupWidget( calendlyUrl );
        }
      }

      // animate Doug
      const successMessageCont = $(form).next().find('.success-message-container');
      const successDoug = $(successMessageCont).find('.success-doug-img');
      const successText = $(successMessageCont).find('.success-text');
      // $(successText).html('Requested <i class="fa fa-check"></i>'); // enable to customize success message text
      const successInfo = $(successMessageCont).find('.success-info');
      // $(successInfo).html('custom success text'); // enable to customize success information
      $(form).slideToggle(400, function() {
        setTimeout(function(){
          $(successMessageCont).animate({width:'toggle'},600, function() {
            setTimeout(function(){ $(successInfo).slideToggle(800); }, 400);
          });
        }, 200);
        // remove form
        $(form).remove();
      });

      // prevent redirect
      return false;
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
      // animate Doug
      const successMessageCont = $(form).next();
      const successDoug = $(successMessageCont).find('.success-doug-img');
      const successText = $(successMessageCont).find('.success-text');
      // $(successText).html('Requested <i class="fa fa-check"></i>'); // enable to customize success message text
      const successInfo = $(successMessageCont).find('.success-info');
      // $(successInfo).html('custom success text'); // enable to customize success information
      $(form).slideToggle(400, function() {
        setTimeout(function(){
          $(successMessageCont).animate({width:'toggle'},600, function() {
            setTimeout(function(){ $(successInfo).slideToggle(800); }, 400);
          });
        }, 200);
        // remove form
        $(form).remove();
      });
      // prevent redirect
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

  // GLOBAL - FOOTER REQUEST DEMO [UNUSED]
  // $('#request-demo-footer').on('click', function(event){
  //   event.preventDefault();
  //   analyticsIdentifyAndTrack([ { name: 'source', value: 'footer demo request' }], 'Demo Requested');
  //   Intercom('showNewMessage', "I'd like to see a demo of the Monax Platform");
  // });




  // ========== HOMEPAGE =============== //

  // HOMEPAGE - TOP - ANIMATION
  setTimeout(function(){
    $('#home-animation').addClass('active');
    $('#home-animation .img-to-float.delay-0').addClass('animate-float');
    setTimeout(function(){
      $('#home-animation .img-to-float.delay-1').addClass('animate-float');
    }, 750);
  }, 300);

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



    // ========== PRICING =============== //

    // switch pricing period
    $('#billing-period-switch').change(function(){
      const frequency_array = $('span.frequency');
      if( this.checked ) {
        $.each( frequency_array, function(i, elm){
          // console.log(elm);
          $(elm).html( $(this).data('billedYearly') );
        });
      } else {
        $.each( frequency_array, function(i, elm){
          // console.log(elm);
          $(elm).html( $(this).data('billedMonthly') );
        });
      }
    })

    // reveal all features
    const triggerFeaturesArr = $('a[id*="trigger-all-features-table"]');
    $(triggerFeaturesArr).each(function(index){
      const featuresTableArr = $('div[id*="pricing-all-features"]');
      $(this).on('click', function(e) {
        e.preventDefault();
        if ( ! $(featuresTableArr).first().hasClass('active') ) {
          $(featuresTableArr).addClass('active');
          $(triggerFeaturesArr).html('Hide all features');
        } else {
          $(featuresTableArr).removeClass('active');
          $(triggerFeaturesArr).html('Show all features');
        }
      });
    });

    // pricing table 'request a demo' forms
    $('a[id*="pricing-trigger-demo"]').each(function(index){
      $(this).on('click', function(e) {
        e.preventDefault();
        if ( ! $(this).hasClass('form-triggered') ) {
          $(this).next().slideToggle();
          $(this).toggleClass('form-triggered');
        } else {
          $(this).next().slideToggle();
          $(this).toggleClass('form-triggered');
        }
      });
    });
    $('form[id*="pricing-demo-signup"]').each(function(index){
      $(this).validate({
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
          // get form data and pass onto Calendly
          var formDataArr = {};
          $.each( $(form).serializeArray(), function(i, field) {
              formDataArr[field.name] = field.value;
          });
          const qString = "?name=" + encodeURIComponent( formDataArr['firstName'] + " " + formDataArr['lastName'] ) + "&email=" + encodeURIComponent( formDataArr['email'] ) + "&a1=" + encodeURIComponent( formDataArr['company'] );
          var calendlyUrl = 'https://calendly.com/monax/demo' + qString;
          // redirect if mobile, otherwise show popup form
          if( $(window).width() < 768 ) {
            window.location.href = calendlyUrl;
          } else {
            Calendly.showPopupWidget( calendlyUrl );
          }

          // animate Doug
          const successMessageCont = $(form).next(); // .successmessagecontainer
          const successDoug = $(successMessageCont).find('.success-doug-img');
          const successText = $(successMessageCont).find('.success-text');
          // $(successText).html('Requested <i class="fa fa-check"></i>'); // enable to customize success message text
          const successInfo = $(successMessageCont).find('.success-info');
          // $(successInfo).html('custom success text'); // enable to customize success information
          $(form).prev().slideToggle(400);
          $(form).slideToggle(400, function() {
            setTimeout(function(){
              $(successMessageCont).animate({width:'toggle'},600, function() {
                setTimeout(function(){ $(successInfo).slideToggle(800); }, 400);
              });
            }, 200);
            // remove form
            $(form).remove();
          });

          // prevent redirect
          return false;
        },
        invalidHandler: function(event, validator) {
          var errors = validator.numberOfInvalids();
          if (errors) {
            console.log("form returned invalid");
            $(this).find('button').addClass('animated headShake');
          }
        }
      });
    })
});
