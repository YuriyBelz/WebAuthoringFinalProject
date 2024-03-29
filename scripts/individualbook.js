/*this should execute when the page initially loads getting the value
of the book that you want to display from the cookie and setting
it to display*/

document.getElementsByTagName("h1")[0].innerText += getCookie("chosenLink");
document.getElementsByClassName("bookViewlarge")[parseInt(getCookie("chosenLink"),10)].style.display = "block";
cartItemCount();

/*this function will add to the cart
whenever the button is pressed the element on the array corresponding to 
the book on the array will increment by one

things to note: 
i think it might be problematic for the memory usage to retrieve the cookie and
map it every time the cart is used but i didnt want to make it into an array that just exists
when the page is active because i it would have to be put back into the cookie when you choose
to leave the page using an anchor tag, im not 100% sure of this is true that it would be a problem
but i think that when you click on an anchor it might not run a script in an onclick event
it just goes to the link first and forgets the script
*/


function addToCart(bookId){
    var cartCount = getCookie("cartCount");
    var tempCart = getCookie("cart");//the cart comes in as a string
    tempCart = tempCart.split('|').map(function(item) { return parseInt(item, 10);});// the array as a string is split at the '|', then cast to a number array using map
    cartCount = parseInt(cartCount);
    tempCart[bookId]++;// increment the book that was selected
    cartCount++;
    tempCart = tempCart.join('|');//temp cart is a string again
    document.cookie = `cart=${tempCart};path=/;`; // tempCart is put back into the cookie
    document.cookie = `cartCount=${cartCount};path=/;`;
    cartItemCount();
}

function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
  }

  function cartItemCount(){
    var count = getCookie("cartCount");//the cart comes in as a string
    count = parseInt(count);
    document.getElementById("cartNavLink").innerText ='Cart' + '(' + count + ')';
  }
  