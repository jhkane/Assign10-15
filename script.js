// This is use of a variable and the console
var myName = "John Kane";
console.log(myName);

//alert box greeting
function first() {
document.getElementById("Greeting").innerHTML = alert("welcome to my cheat sheet");
}

//calling the element and function with a button click.

function nameChange() {
document.getElementById("name").innerHTML = "John Kane";
}


// This is an array set, which is listed on the webpage through the script.

var cars = ["Saab", "Volvo", "BMW"];

document.getElementById("demo").innerHTML = cars;

// example of an object, with the model listed on the page through the script.

var auto = {type:"BMW", model: "300", color:"blue"};

document.getElementById("demo2").innerHTML = auto.model;

// a simple math operation with variables

var a,b;
a = 5;
b = 10;
var result = a * b;
document.getElementById("demo3").innerHTML = result;