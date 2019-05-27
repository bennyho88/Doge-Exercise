document.getElementById("doge").innerHTML = "Woof!";

document.getElementById("doge").onmouseover = function() {mouseOver()};
document.getElementById("doge").onmouseout = function() {mouseOut()};

function mouseOver() {
    document.getElementById("doge").innerHTML = "Woof Woof!";
}

function mouseOut() {
    document.getElementById("doge").innerHTML = "Woof!";
}

document.getElementById("doge").addEventListener("click", picture);
function picture() {
if (document.getElementById("picture").style.display === "block") {
document.getElementById("picture").style.display = "none";
} else {
document.getElementById("picture").style.display = "block";
}
}
