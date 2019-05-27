document.getElementById("doge").innerHTML = "Woof!";

document.getElementById("doge").onmouseover = function() {mouseOver()};
document.getElementById("doge").onmouseout = function() {mouseOut()};

function mouseOver() {
    document.getElementById("doge").innerHTML = "Woof Woof!";
}

function mouseOut() {
    document.getElementById("doge").innerHTML = "Woof!";
}