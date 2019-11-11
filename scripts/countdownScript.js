/*function countdown(){
  var currentDate = new Date;
  var datePlusThree = currentDate;
  datePlusThree.setFullYear(currentDate.getFullYear() + 3 )
}*/

function deadlineCounter(){
  var deadline =  new Date("dec 31, 2022 23:59:59").getTime();/*gettime() gets the number of seconds since the beginnning of time*/
  var now = new Date().getTime();
  var difference = deadline - now;
  var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hours = Math.floor((difference % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);
}

function deadlineUpdate(){
  setTimeout(function(){
    for(var i = 0; i < document.getElementByClass("saleCountdown").length; i++){
      deadlineCounter();
    document.getElementByClass("saleCountdown")[i].innerHTML = ("Sale ends in: " + days + ":" + hours + ":" + minutes + ":" + "seconds");
  }
}, 1000);
}
