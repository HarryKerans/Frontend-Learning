var buttont = document.getElementById("button");

buttont.addEventListener("mouseover", buttonEvent);
buttont.addEventListener("mouseout", buttonEvent);
buttont.addEventListener("click", buttonEvent);

function buttonEvent (e) {
    var target = e.target;
    var rndcol = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")
    if (e.type == "click") {
        buttont.style.color = rndcol;
        return;
    }

    e.type == "mouseover" ? buttont.style.fontWeight = 'bold': buttont.style.fontWeight = "normal"
    

}