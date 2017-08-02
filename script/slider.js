$(document).ready(function() {

//make the slider slide

  var speed = 500; //transition speed - fade

  //add active class to first slide
  $('.slide').first().addClass('active');

  // hide all slides
  $('.slide').hide();

  // but show only active class slide
  $('.active').show();

  // Switch to next slide
  function nextSlide() {

    $('.active').removeClass('active').addClass('oldActive');
    if($('.oldActive').is(':last-child')){
      $('.slide').first().addClass('active');
    } else {
      $('.oldActive').next().addClass('active');
    }
    $('.oldActive').removeClass('oldActive');
    $('.slide').fadeOut(speed);
    $('.active').fadeIn(speed);

  }

  // Switch to prev slide
  function prevSlide() {
    $('.active').removeClass('active').addClass('oldActive');
    if($('.oldActive').is(':first-child')){
      $('.slide').last().addClass('active');
    } else {
      $('.oldActive').prev().addClass('active');
    }
    $('.oldActive').removeClass('oldActive');
    $('.slide').fadeOut(speed);
    $('.active').fadeIn(speed);
  }

  // Next Event Handler
  $('#next').click(nextSlide);// call function nextSlide

  // Prev Event Handler
  $('#prev').click(prevSlide);// call function prevSlide


});
