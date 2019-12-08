//we need to recreate all the arrays storing the book information from the cookie
var prices = getCookie("prices").split('|').map(function(item) { return parseFloat(item).toFixed(2);}); 
// prices was cast to a string with 2 decimal places
var titles = getCookie("titles").split('|');
//titles is just strings
var grandTotal;
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
    //the innerhtml must be set to nothing to completely reset it when reloading after, when the page is first made it wouldnt do anything

    var total = 0.00;
    var tax  = 0.00;
    var shipping = 0.00;
      
    //get shipping value from radio buttons
    if (document.getElementById('r1').checked) {
    shipping= document.getElementById('r1').value;
    }else if (document.getElementById('r2').checked) {
    shipping= document.getElementById('r2').value;
    }  else if (document.getElementById('r3').checked) {
    shipping= document.getElementById('r3').value;
    } 
    shipping = parseFloat(shipping);  
    grandTotal = 0.00;
    for(var i = 0; i < cart.length; i++){
        if(cart[i] > 0){
            total += (cart[i] * prices[i]);
            document.getElementById("carttotal").innerHTML +=  
             titles[i] + 
            " X " +
            cart[i] +  
            " = $" +
            (cart[i] * prices[i]);
        }
    }
    tax = parseFloat(total * .04); //4% tax
    grandTotal = (tax + total + shipping);
    document.getElementById("carttotal").innerHTML += "<hr>" + "Total: $" + total.toFixed(2) + "<br>" + "Tax: $" + tax.toFixed(2) + "<br>" + "Shipping: $" + shipping.toFixed(2) + "<br>" +"Grand Total: $" + grandTotal.toFixed(2);
    document.cookie = `grandtotal=${grandTotal};path=/;`//saves the total for later use
  }

  function removeOne(bookId){
    var tempCart = getCookie("cart");//the cart comes in as a string
    tempCart = tempCart.split('|').map(function(item) { return parseInt(item, 10);});// the array as a string is split at the '|', then cast to a number array using map
    tempCart[bookId]--;// increment the book that was selected
    tempCart = tempCart.join('|');//temp cart is a string again
    document.cookie = `cart=${tempCart};path=/;`;//we need to send the updated cart back to the cookie
    buildTotal();
  /*this function is only ever called in the build total function so im assuming it should have access to the cart array in it.
    the index of the book we are removing one from is passed in
  calling buuild total here kind of makes it recursive, i hope it doesnt make problems in the future but the remove button should only be 
  clicked after it is done writing all the elements.
  */
  }

  function cartItemCount(){
    var count = getCookie("cartCount");//the cart comes in as a string
    count = parseInt(count);
    document.getElementById("cartNavLink").innerText ='Cart' + '(' + count + ')';
  }
  
  function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
  }


//empty cart and go to thankyou page
function completeOrder(){
    console.log("Order Submitted")
    var cart = [0,0,0,0,0,0,0,0,0];
    cart = cart.join('|');
  document.cookie = `cart=${cart};path=/;`; 
    document.cookie = `cartCount=${0};path=/;`;
cartItemCount();

    
}

