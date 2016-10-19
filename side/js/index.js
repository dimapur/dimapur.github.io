// open mobile menu
$('.js-toggle-menu').click(function(e){
  e.preventDefault();
  $('.mobile-header-nav').slideToggle();
  $(this).toggleClass('open');

});

$('.has-submenu a').click(function(){
  $(this).next('.submenu').toggleClass('open');
  $(this).parent().toggleClass('open');
});