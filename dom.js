document.getElementById("doge").innerHTML = "Woof!";

document.getElementById("doge").onmouseover = function() {mouseOver()};
document.getElementById("doge").onmouseout = function() {mouseOut()};

function mouseOver() {
    document.getElementById("doge").innerHTML = "Woof Woof!";
}

function mouseOut() {
    document.getElementById("doge").innerHTML = "Woof!";
}

document.getElementById("doge").addEventListener("click", function(){
    var x = document.createElement("IMG");
    x.setAttribute("src", "doge.png");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    document.body.appendChild(x);
    
})

