// add correct role and data to body
$('body').attr('role', 'flatdoc');
$('body').attr('data-spy', 'scroll');
$('body').attr('data-target', "#toc-container");
$('body').attr('data-offset', 120);

// Get the TOC container locked
$('#toc-container').bind("DOMSubtreeModified",function(){
  $('#toc-container').addClass('hidden-xs hidden-sm col-md-2 col-lg-2 col-lg-offset-2');
  $('#toc-container li.level-0 ul').first().attr('role', 'navigation').attr('id', 'sidebar-nav').addClass('nav nav-stacked');
  $('#toc-container li.level-0 ul').not(':first').addClass('nav nav-stacked sub-menus');

  // smooth scrolling
  $('#toc-container ul a').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: ($($anchor.attr('href')).offset().top - 65)
      }, 750 );
      event.preventDefault();
  });
});