

if(!document.cookie){
  // need this conditional to check if the cookie has already been created, we wouldnt want to to reset the cart array 
  
  var titles = ["United States History",
                "Cat in the Hat", 
                "Oh, the Places You'll Go!",
                "Sherlock Holmes",
                "Hitchhiker's Guide to the Galaxy",
                "Fahrenheit 451",
                "The Big Sleep",
                "The Greatest Generation",
                "Dune"];
  var prices = [24.99, 8.99, 8.99, 14.99, 19.99, 11.99, 9.99, 9.99, 19.99 ];
  var cart = [0,0,0,0,0,0,0,0,0];

  prices = prices.join('|');
  titles = titles.join('|');
  cart = cart.join('|');

  document.cookie = `cart=${cart};path=/;`;
  document.cookie = `titles=${titles};path=/;`;
  document.cookie = `prices=${prices};path=/;`;
  /*the cookie can only store strings so any time the cookie needs to be used it needs to be found in the long string that makes up the cookie,
   the arrays that make up the things we want to store are turned into strings with a '|' between them using the join method, after being retreived
   from the cookie they should be split up using .split('|') and recast to their correct type
  
   in the cookie prices and titles arrays the values should not change*/
}
//------------------------------------------------------------------------

var slideIndex = 0;
showFeaturedSlides();
showSaleSlides();

//------------------------------------------------------------------------

deadlineCounter();

//-------------------------------------------------------------------------

function showFeaturedSlides() {
  var i;
  var slides = document.getElementsByClassName("featuredSlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showFeaturedSlides, 2000); 
}
function showSaleSlides() {
  var i;
  var slides = document.getElementsByClassName("saleSlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSaleSlides, 2000); 
}

//---------------------------countdown--------------------------------

function deadlineCounter(){

  var deadline =  new Date("January 1, 2020").getTime();/*gettime() gets the number of seconds since the beginnning of time*/

  setInterval(function(){

     var now = new Date().getTime();
  var difference = deadline - now;
  var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hours = Math.floor((difference % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById("saleCountdown").textContent = "Sale ends in: D:" + days + " H:" + hours + " M:" + minutes + " S:" + seconds;

  }, 1000);
}

//------------------------------cart check-------------------------------------------

/*this function shouls be called whenever the cart is clicked, it checks if there is anything in the cart by looping through the cart array and 
checking if there is anything in the aray other than zero. if there is anthying then it takes you to the cart page. if not then it alerts you 
that there is nothing in it*/

function cartCheck(){
  var tempCart = getCookie("cart");
  tempCart = tempCart.split('|').map(function(item) { return parseInt(item, 10);});
  var sum = tempCart.reduce(function(a, b) { return a + b; }, 0);
  if(sum == 0) 
      alert("There is nothing in the cart, please add something");
  else
      window.location.assign("cart.html");
}

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}
