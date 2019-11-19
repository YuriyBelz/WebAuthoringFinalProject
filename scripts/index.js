


  document.cookie = `cart=${[0,0,0,0,0,0,0,0,0]};path=/;`;
  document.cookie = `titles=${["United States History", "Cat in the Hat", 
          "Oh, the Places You'll Go!", "Sherlock Holmes",
          "Hitchhiker's Guide to the Galaxy","Fahrenheit 451",
          "The Big Sleep", "The Greatest Generation","Dune"]};path=/;`;
  document.cookie = `prices=${[24.99, 8.99, 8.99, 14.99, 19.99, 11.99, 9.99, 9.99, 19.99 ]};path=/;`;

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

//--------------------------------------------------------------------

function deadlineCounter(){

  var deadline =  new Date("January 1, 2020").getTime();/*gettime() gets the number of seconds since the beginnning of time*/

  setInterval(function(){

     var now = new Date().getTime();
  var difference = deadline - now;
  var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hours = Math.floor((difference % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById("saleCountdown").textContent = "Sale ends in: D:" + days + " H: " + hours + " M: " + minutes + " S: " + seconds;

  }, 1000);
}

//------------------------------cart check-------------------------------------------

/*this function shouls be called whenever the cart is clicked, it checks if there is anything in the cart by looping through the cart array and 
checking if there is anything in the aray other than zero. if there is anthying then it takes you to the cart page. if not then it alerts you 
that there is nothing in it*/

function cartCheck(){//
  var total;
  for(var i = 0; i < document.cookie.cart.length; i++){
    total += document.cookie.cart.length[i]; 
  }
  if(total != 0){
    window.location.href = "cart.html";
  }
  else{
    alert("There is nothing in your cart, please add something before checking it.");
  }
}
