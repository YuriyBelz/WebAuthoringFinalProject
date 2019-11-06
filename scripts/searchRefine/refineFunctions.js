function child() {
	reset()
	 for(var i= 0; i <= document.getElementsByClassName("bookView").length; i++){
	  if (!document.getElementsByClassName("bookView")[i].classList.contains("child")){
		document.getElementsByClassName("bookView")[i].style.display = "none";
	  }
	}
}
function scifi(){
	reset()
	for(var i= 0; i <= document.getElementsByClassName("bookView").length; i++){
	  if (!document.getElementsByClassName("bookView")[i].classList.contains("scifi")){
		document.getElementsByClassName("bookView")[i].style.display = "none";
	  }
	}
}
function reset(){
	for(var i= 0; i < document.getElementsByClassName("bookView").length; i++){
		document.getElementsByClassName("bookView")[i].style.display = "block";
	}
}
function nonfic(){
	reset()
	for(var i= 0; i <= document.getElementsByClassName("bookView").length; i++){
	  if (!document.getElementsByClassName("bookView")[i].classList.contains("nonfic")){
		document.getElementsByClassName("bookView")[i].style.display = "none";
	  }
	}
}
function mystery(){
	reset()
	for(var i= 0; i <= document.getElementsByClassName("bookView").length; i++){
	  if (!document.getElementsByClassName("bookView")[i].classList.contains("mystery")){
		document.getElementsByClassName("bookView")[i].style.display = "none";
	  }
	}
}
function discount(){
	reset()
	for(var i= 0; i < document.getElementsByClassName("bookView").length; i++){
	  if (!document.getElementsByClassName("bookView")[i].classList.contains("discount")){
		document.getElementsByClassName("bookView")[i].style.display = "none";
	  }
	}
}
