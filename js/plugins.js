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


/* events */



window.onscroll = () =>{
console.log(window.scrollY+ window.innerHeight);
}
/*
window.onscroll = () =>{
console.log(window.screenX+ window.innerWidth);
}*/

/* Start Services Event scroll */
myClass = document.getElementsByClassName("more");

const myInterScrollFunc1 = (currentPos) =>{
for(let i = 0; i < 4; i++){
  if(i !== currentPos){
    myClass[i].style.height = '0%';
    myClass[i].children[0].style.opacity = '0'; 
  }
}
}
const myInterScrollFunc2 = (currentPos) =>{
myClass[currentPos].style.height = '100%';
myClass[currentPos].children[0].style.opacity = '1';
}

const myScrollFunc = () => {
let y = window.scrollY; 
let x = window.screenX + window.innerWidth;
switch(true){
  case ((y >= 1596 && y < 2026) && (x <= 425) || (y >= 2420 && y < 1996) && (x <= 768)):
    myInterScrollFunc1(0);
    myInterScrollFunc2(0);
    break;
  case ((y >= 2026 && y < 2471) && (x <= 425) || (y >= 2420 && y < 1996) && (x <= 768)):
    myInterScrollFunc1(1);
    myInterScrollFunc2(1);
  break; 
  case ((y >= 2471 && y < 2901) && (x <= 425) || (y >= 2821 && y < 2420 ) && (x <= 768)):
    myInterScrollFunc1(2);
    myInterScrollFunc2(2);
  break; 
  case ((y >= 2901 && x <= 425) || (y >= 2821 && y < 2420) && (x <= 768)):
    myInterScrollFunc1(3);
    myInterScrollFunc2(3);
  break; 
  default:
}
} 
window.addEventListener("scroll", myScrollFunc);
/* End Services Event scroll */

/* Start Statistics Event counter */
var counter = 0;
var intervalId = null;

function countUp() {
counter +=5;
if(counter >  3500)
finish();
else if(counter >  2500){	
  document.getElementsByClassName("stat")[3].children[1].textContent = counter;
}
else if(counter >  1200){
  document.getElementsByClassName("stat")[0].children[1].textContent = counter;
}
else if(counter >  600){
  document.getElementsByClassName("stat")[1].children[1].textContent = counter;
}else{
  document.getElementsByClassName("stat")[2].children[1].textContent = counter;
}
}

function start(){
intervalId = setInterval(countUp, 15);
}

function finish() { 
clearInterval(intervalId);
}

const myCounter = () =>{
let y = window.scrollY + window.innerHeight;
if(y >= 4247)
start();
}

addEventListener("scroll", myCounter);
/* End Statistics Event count */


