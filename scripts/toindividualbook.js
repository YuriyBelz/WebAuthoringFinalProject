if(!document.cookie){
    /*i guess you need to check if the cookie already exists, i thought 
    that it was a thing in javascript where it returns true or false if
    a variable has an assigned falue so if document.cookie hasnt been created
    yet then it shouls be false and come to this section here*/
    document.cookie = {
    chosenLink : -1,/*default value*/
    cart : [0,0,0,0,0,0,0,0,0]
    
};
/* in the future i might need to rework how the cookie works because this needs
to be done only when the browse books is first visited*/
}


/*when you click on a books page link it will make that digle book the chosen link
the chosen link will specify which individual book page to go to and then change the
display to show.
it should only ever show one book because by default all the books are hidden
by choosing a link it will set a value to the chosenlink and on the individual
books page it wll check that value and then change its css to display

the cart array might be used in the future, there are add to cart buttons on the
books and because there are only 9 different books so pressing the add to
cart button will increment the corresponding array element by one 
later we can make a cart page that just adds up everything in this array
and calculates a totoal for the user*/

function moreBookDetails (bookId) {
    document.cookie.chosenlink = bookId;
    /*idk how it will work but the user will click on the link and at the same
    time as it goes to the next page it shouls assign this value and retrieve
    it when it gets to the next page*/

    return true;
    /*stack overflow says that when a function has a return value in in an onclick
    call that is in an anchor tag that it shouls completely execute the function
    and then if it returns true it goes to the link in the href  */
}