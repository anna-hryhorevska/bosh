$(document).ready(function(){
  $('#menu-toggle, #menu-toggle-bottom').click(function () {
    $('#mobile-navigation').addClass('open');
  });
  $('#close-menu').click(function () {
    $('#mobile-navigation').removeClass('open');
  });
  $('#mobile-navigation a').click(function() {
    $('#mobile-navigation').removeClass('open');
  });
})