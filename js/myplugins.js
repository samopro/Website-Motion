$(document).ready(function() {

  // Show Active Link in The NavBar
  $('nav ul a').click(function() {
    $('a').removeClass('active');
    $(this).addClass('active');
  });

  // Smooth Scrolling
  $('nav a[href^="#"]').on('click', function(event) {

      var target = $(this.getAttribute('href'));

      if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
          scrollTop: target.offset().top - 20 // Correct The Offset
        }, 1000);
      }

  });

  /****  Scroll Button  *** */

  //Show & Hide Scroll Button
  var scrollButton = $('#scroll-top');
  $(window).scroll(function () {
    // console.log($(this).scrollTop());
    ($(this).scrollTop() >= 500) ? scrollButton.show() : scrollButton.hide();
  });

  // Click On Button To Scroll To top
  scrollButton.click(function () {
    $('html, body').animate({scrollTop:0}, 1000);
  });

});
