for(var i= 0; i <= document.getElementsByClassName("bookView").length; i++){
  if (!document.getElementsByClassName("bookView")[i].contains("mystery"){
    document.getElementsByClassName("bookView")[i].style.display = "none";
  }
}
//this file is hide all the bookview divs that arent mystery