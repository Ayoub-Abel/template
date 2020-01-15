/* Setting Interval time loop of images */
$(document).ready(function(){
    $('.carousel').carousel({
        interval:5000
    });
});


/* animation button go to top */
var btn = $('#top-btn');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '2000');
});
 

/* event */

