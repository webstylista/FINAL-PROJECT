$(document).ready(function() {

  //open modals
  function openModal(event) {
    var formId = $(event.target).attr('data-form');
    $('#' + formId).slideDown(800);
    $('#header').fadeOut(600);
    $('footer').hide();
  }

  //show modal
  $('.open').click(openModal);

  //close modals
  $('.close').click(function() {
    $(this).parent().slideUp(800);
    $('#header').fadeIn(600);
    $('footer').show();
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

  //make the slider slide
  var slide = 0;
  $('button.left').click(function() {
    $('.slider-container').eq(slide).addClass('move-left');

    if (slide < 6) {
        slide++;
    } else {
        slide = 0;
        $('.slider-container').eq(slide).removeClass('move-left');
    }

  });

});
