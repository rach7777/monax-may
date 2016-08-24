$(function() {
$('a[href*=#]:not([href=#])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
      || location.hostname == this.hostname) {

    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});
});
$('.owl-carousel').owlCarousel({
  loop: true,
  autoPlay: 3000, //Set AutoPlay to 3 seconds
  stopOnHover: true,
  margin: 10,
  navigation: false,
  items: 3,
  itemsDesktop: [1000,2],
  itemsDesktopSmall: [900,2],
  itemsTablet: [600,2],
  itemsMobile: false,
})