/*NUMBER 1*/
//getting the first p tag using tagname method. this requires me to use for loop and printting in the console
var getPByTag = document.getElementsByTagName("p");
console.log(getPByTag[0]);

//directly printing to console bc ID is more specific and only apply to one that one tag
var getpByID = document.getElementById("first");
console.log(getpByID);


//going to have to use for loop bc it treats the elements like an array
var getPByClass = document.getElementsByClassName("special");
console.log(getPByClass[0]);


// NUMBER 2
//Note To Self: remember to call the classes like CSS .classname
//Also there are two different classes both named "special"
var qSelect = document.querySelector(".special");
console.log(qSelect);

var qSelectAll = document.querySelectorAll(".special");
console.log(qSelectAll);

//NUMBER 3
var h1Tag = document.getElementsByTagName("h1");
for(var i=0; i<h1Tag.length; i++){
    h1Tag[i].style.color = "blue";
}

//NUMBER 4
//made i=3 to make sure it only changed the 4th position/Index 3
var lastPTag = document.getElementsByTagName("p");
for(var i=3; i<lastPTag.length; i++){
    lastPTag[i].style.color="yellow";
}
