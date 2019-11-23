//we need to recreate all the arrays storing the book information from the cookie
var prices = getCookie("cart").split('|').map(function(item) { return parseFloat(item).toFixed(2);}); 
// prices was cast to a float with 2 decimal places
var titles = getCookie("titles").split('|');
//titles is just strings

buildTotal();

  /*this function will put together all the main content of the cart.html page. to begin it will be empty
  and this function will be called.
  this function will loop though the cart array and wee which values are greater than one and change the
  innerHTML of a div to say how many of that item is in the cart and the cost of the amount of that item that
  being bought, items that have zero in the cart amount should not be listed.
  at the bottom of the list books that were added to the cart there will be a total amt charged
  
  there should be buttons next to each listed cart item that apears to decrement the amount that you want by 1
  to ensure that the whole page is updated this function should be called again, it will reset the contents of the
  div holding out cart total*/
  function buildTotal(){
    var cart = getCookie("cart").split('|').map(function(item) { return parseInt(item, 10);});
    /*cart needs to be turned back into an int array. this is done in the function to ensure that the cart in the cookie
    and the cart in the array we will be working with have the same information i copied and pasted this
    from the individual book page*/

    document.getElementById("carttotal").innerHTML = "";
    //the innerhtml must be set to nothing to completely reset it, when the page is first made it wouldnt do anything

    var total = 0.00;
    var tax;
    var grandTotal;

    for(var i = 0; i < cart.length; i++){
        if(cart[i] > 0){
            total += (cart[i] * prices[i]);
            document.getElementById("carttotal").innerHTML +=  titles[i] + " X " + cart[i] + " = " (cart[i] * prices[i])
             + `<input type='button' value='Remove (1)' class='removebutton' onclick='removeOne(${cart[i]})'>` + "<br>";
        }
    }
    tax = (total * .04).toFixed(2); //4% tax
    grandTotal = tax + total;
    document.getElementById("carttotal").innerHTML += "<hr>" + "Total: " + total + "<br>" + "Tax: " + tax + "<br>" + "Grand Total: " + grandTotal;
    document.cookie = `grandtotal=${grandTotal};path=/;`//saves the total for later use
  }

  function removeOne(bookId){
    cart[bookId]--;
    document.cookie = `cart=${cart.join('|')};path=/;`;//we need to send the updated cart back to the cookie
    buildTotal();
  /*this function is only ever called in the build total function so im assuming it should have access to the cart array in it.
    the index of the book we are removing one from is passed in
  calling buuild total here kind of makes it recursive, i hope it doesnt make problems in the future but the remove button should only be 
  clicked after it is done writing all the elements.
  */
  }

  function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
  }

  function cartCheck(){
  var tempCart = getCookie("cart");
  tempCart = tempCart.split('|').map(function(item) { return parseInt(item, 10);});
  var sum = tempCart.reduce(function(a, b) { return a + b; }, 0);
  if(sum == 0) 
      alert("There is nothing in the cart, please add something");
  else
      window.location.assign("cart.html");}

