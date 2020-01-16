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
/*
window.onscroll = () =>{
  console.log(window.scrollY);}

window.onscroll = () =>{
  console.log(window.screenX+ window.innerWidth);
}*/
myClass = document.getElementsByClassName("more");
const EventScroll = () =>{

}
const myScrollFunc = function() {
let y = window.scrollY, x = window.screenX + window.innerWidth;

  switch(true){
    case ((y >= 1596 && y < 2026 && x <= 425) || (y >= 1375 && y < 1883 && x <= 767)):
      myClass[0].style.height = '100%';
      myClass[0].children[0].style.opacity = '1';
      myClass[1].style.height = '0%';
      myClass[1].children[0].style.opacity = '0';
      myClass[2].style.height = '0%';
      myClass[2].children[0].style.opacity = '0';
      myClass[3].style.height = '0%';
      myClass[3].children[0].style.opacity = '0';
      break;
    case ((y >= 2026 && y < 2471 && (x <= 425)) || (y >= 1883 && y < 2238 && x <= 767)):
      myClass[0].style.height = '0%';
      myClass[0].children[0].style.opacity = '0';
      myClass[1].style.height = '100%';
      myClass[1].children[0].style.opacity = '1';
      myClass[2].style.height = '0%';
      myClass[2].children[0].style.opacity = '0';
      myClass[3].style.height = '0%';
      myClass[3].children[0].style.opacity = '0';
    break; 
    case ((y >= 2471 && y < 2901 && (x <= 425)) || (y >= 2238 && y < 2648  && x <= 767)):
      myClass[0].style.height = '0%';
      myClass[0].children[0].style.opacity = '0';
      myClass[1].style.height = '0%';
      myClass[1].children[0].style.opacity = '0';
      myClass[2].style.height = '100%';
      myClass[2].children[0].style.opacity = '1';
      myClass[3].style.height = '0%';
      myClass[3].children[0].style.opacity = '0';
    break; 
    case ((y >= 2901 && x <= 425) || (y >= 2648 && x <= 767)):
      myClass[0].style.height = '0%';
      myClass[0].children[0].style.opacity = '0';
      myClass[1].style.height = '0%';
      myClass[1].children[0].style.opacity = '0';
      myClass[2].style.height = '0%';
      myClass[2].children[0].style.opacity = '0';
      myClass[3].style.height = '100%';
      myClass[3].children[0].style.opacity = '1';
    break; 
    default:
  }
} 
window.addEventListener("scroll", myScrollFunc);
