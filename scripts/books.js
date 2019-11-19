

//-----------------------------getting to individual books --------------------------------------

function morebookdetail (bookId) {
    document.cookie = `chosenLink=${bookId};path=/;`;
    
    window.location.assign("individualbook.html");
    /*this should to the same thing as clicking on an anchor tag,
    I chose to do it this way because i think there were some problems 
    caused by the anchor because it would try to go to the next page
    before it ran the script*/
}
/*when you click on a books page link it will make that single book the chosen link
the chosen link will specify which individual book page to go to and then change the
display to show.
it should only ever show one book because by default all the books are hidden
by choosing a link it will set a value to the chosenlink and on the individual
books page it wll check that value and then change its css to display

 there are add to cart buttons on the books and because there are only 9 different books  pressing the add to
cart button will increment the corresponding array element in the cookie by one 
going to the cart page will show everything that you added by iterating through the array
and calculates a total for the user*/


//-----------------------------refine functions-----------------------------------------------------------------

function refine(refineGenre){
	reset()
	for(var i= 0; i <= document.getElementsByClassName("bookView").length; i++){
	  if (!document.getElementsByClassName("bookView")[i].classList.contains(refineGenre)){
		document.getElementsByClassName("bookView")[i].style.display = "none";
	  }
	}
}

function reset(){
	for(var i= 0; i < document.getElementsByClassName("bookView").length; i++){
		document.getElementsByClassName("bookView")[i].style.display = "block";
	}
}