$(document).ready(function() {

  var slideSpeed = 800;
  var fadeSpeed = 600;

  //open modals
  function openModal(event) {
    var formId = $(event.target).attr('data-form');
    $('#' + formId).slideDown(slideSpeed);
    $('#header').fadeOut(fadeSpeed);
    $('footer').hide();
  }

  //show modal
  $('.open').click(openModal);

  //close modals
  $('.close').click(function() {
    $(this).parent().slideUp(slideSpeed);
    $('#header').fadeIn(fadeSpeed);
    $('footer').show();
  });

  //show 'thank you' message on form submit in '#enquire' modal
  $('.show-thanks').click(function() {

      var thanks = function(event) {
        event.preventDefault();
        $('#enquire h2').text('Thank you for your enquiry.')
        $('form').hide();
        $('#enquire p').hide();
      }

      $('form').submit(thanks);
  });


});
