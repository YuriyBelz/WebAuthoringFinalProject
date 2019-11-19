/*this should execute when the page initially loads getting the value
of the book that you want to display from the cookie and setting
it to display*/
document.getElementById("individualbookheader").textContent += document.cookie.chosenLink ;
document.getElementsByClassName("bookviewlarge")[document.cookie.chosenLink].style.display = "show";

/*this function will add to the cart
whenever the button is pressed the element on the array corresponding to 
the book on the array will increment by one*/
function addToCart(bookId){
    document.cookie.cart[bookId]++;
}