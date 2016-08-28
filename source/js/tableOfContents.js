require('jquery.toc');

// Add proper attributes to Body
$('body').attr('data-spy', 'scroll');
$('body').attr('data-target', "#toc-container");
$('body').attr('data-offset', 120);

// Setup Sidebar Nav
$('#main-content').toc();
$('#toc-container').attr('role', 'navigation');
$('#toc-container').addClass('hidden-xs hidden-sm col-md-2 col-lg-2 col-lg-offset-2');
$('#toc-container ul').first().attr('id', 'sidebar-nav').addClass('nav nav-stacked');
$('#toc-container ul').not(':first').addClass('nav nav-stacked sub-menus');

// sidebar collapse
$('#toc-container ul li').not('.active').children('ul').slideUp(50);
$('#toc-container').on('activate.bs.scrollspy', function() {
  $('#toc-container ul li').not('.active').children('ul').slideUp();
  $('#toc-container ul li.active ul').slideDown();
});

// smooth scrolling
$('#toc-container ul a').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top - 65)
    }, 750 );
    event.preventDefault();
});