deadlineCounter();

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
