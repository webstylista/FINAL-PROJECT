$(document).ready(function() {

  //show '#about' modal
  $('.open-about').click(function() {
    $('#about').slideDown(800);
    $('#header').fadeOut(600);
    $('footer').hide();
  });

  //close '#about' modal
  $('.close').click(function() {
    $('#about').slideUp(800);
    $('#header').fadeIn(600);
    $('footer').show();
  });

  //show '#soaps' modal
  $('.open-soaps').click(function() {
    $('#soaps').slideDown(800);
    $('#header').fadeOut(600);
    $('footer').hide();
  });

  //close '#soaps' modal
  $('.close').click(function() {
    $('#soaps').slideUp(800);
    $('#header').fadeIn(600);
    $('footer').show();
  });

  //show '#shop' modal
  $('.open-shop').click(function() {
    $('#shop').slideDown(800);
    $('#header').fadeOut(600);
    $('footer').hide();
  });

  //close '#shop' modal
  $('.close').click(function() {
    $('#shop').slideUp(800);
    $('#header').fadeIn(600);
    $('footer').show();
  });

  //show '#enquire' modal
  $('.open-enquire').click(function() {
    $('#enquire').slideDown(800);
    $('#header').fadeOut(600);
    $('footer').hide();
  });

  //show 'thank you' message on form submit in '#enquire' modal
  $('.show-thanks').click(function() {

      var thanks = function(event) {
      event.preventDefault();
      $('#enquire h2').text("Thank you for your enquiry.")
      $('form').hide();
      $('#enquire p').hide();
      }

      $('form').submit(thanks);
  });

  //close '#enquire' modal
  $('.close').click(function() {
    $('#enquire').slideUp(800);
    $('#header').fadeIn(600);
    $('footer').show();
  });

});
