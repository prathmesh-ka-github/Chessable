//!     RED COUNTER
var rmin = playtime - 1;
var rsec = 60;
var redinterval = 0;
function startclockred() {
    if (rsec == 0 && rmin == 0) {
        document.getElementById("rsec").innerHTML = rsec;
        document.getElementById("rmin").innerHTML = rmin;
        var redking = 0
        if (redking == 0 && redlost == 1) {
            setTimeout(() => {
                alert('Red eliminated by king capture!!')
            }, 500)
            document.querySelectorAll('.box').forEach(remove => {
                removeId = remove.innerText
                arr = Array.from(removeId)
                firstletter = arr.shift()
                if (firstletter == "R") {
                    remove.innerText = ''
                }
            })
            document.getElementById("red-player-name").style.textDecoration = "line-through";
            redlost = 0
        }
        if (tog == 1 && redlost == 0) {
            tog = 2
            clocks()
        }
        if (tog == 2 && bluelost == 0) {
            tog = 3
            clocks()
        }
        if (tog == 3 && yellowlost == 0) {
            tog = 4
            clocks()
        }
    } else {
        rsec--;
        if (rsec < 60) {
            document.getElementById("rsec").innerHTML = rsec;
            document.getElementById("rmin").innerHTML = rmin;
        }
        if (rsec < 0) {
            rmin--;
            rsec = 59;
            document.getElementById("rsec").innerHTML = rsec;
            document.getElementById("rmin").innerHTML = rmin;
        }
    }
}
//!      BLUE COUNTER
var bmin = playtime - 1;
var bsec = 60;
var blueinterval = 0;
function startclockblue() {
    if (bsec == 0 && bmin == 0) {
        var blueking = 0
        if (blueking == 0 && bluelost == 1) {
            setTimeout(() => {
                alert('Blue eliminated by timeout!!')
            }, 500)
            document.querySelectorAll('.box').forEach(remove => {
                removeId = remove.innerText
                arr = Array.from(removeId)
                firstletter = arr.shift()
                if (firstletter == "B") {
                    remove.innerText = ''
                }
            })
            document.getElementById("blue-player-name").style.textDecoration = "line-through";
            bluelost = 0
        }

        if (tog == 1 && redlost == 0) {
            tog = 2
            clocks()
        }
        if (tog == 2 && bluelost == 0) {
            tog = 3
            clocks()
        }
        if (tog == 3 && yellowlost == 0) {
            tog = 4
            clocks()
        }
    } else {
        bsec--;
        if (bsec < 60) {
            document.getElementById("bsec").innerHTML = bsec;
            document.getElementById("bmin").innerHTML = bmin;
        }
        if (bsec < 0) {
            bmin--;
            bsec = 59;
            document.getElementById("bsec").innerHTML = bsec;
            document.getElementById("bmin").innerHTML = bmin;
        }
    }
}
//!      YELLOW COUNTER
var ymin = playtime - 1;
var ysec = 60;
var yellowinterval = 0;
function startclockyellow() {
    if (ysec == 0 && ymin == 0) {
        var yellowking = 0

        if (yellowking == 0 && yellowlost == 1) {
            setTimeout(() => {
                alert('Yellow eliminated by king capture!!')
            }, 500)
            document.querySelectorAll('.box').forEach(remove => {
                removeId = remove.innerText
                arr = Array.from(removeId)
                firstletter = arr.shift()
                if (firstletter == "Y") {
                    remove.innerText = ''
                }
            })
            document.getElementById("yellow-player-name").style.textDecoration = "line-through";
            yellowlost = 0
        }
        if (tog == 1 && redlost == 0) {
            tog = 2
            clocks()
        }
        if (tog == 2 && bluelost == 0) {
            tog = 3
            clocks()
        }
        if (tog == 3 && yellowlost == 0) {
            tog = 4
            clocks()
        }
    } else {
        ysec--;
        if (ysec < 60) {
            document.getElementById("ysec").innerHTML = ysec;
            document.getElementById("ymin").innerHTML = ymin;
        }
        if (ysec < 0) {
            ymin--;
            ysec = 59;
            document.getElementById("ysec").innerHTML = ysec;
            document.getElementById("ymin").innerHTML = ymin;
        }
    }
}
//!      GREEN COUNTER
var gmin = playtime - 1;
var gsec = 60;
var greeninterval = 0;
function startclockgreen() {
    if (gsec == 0 && gmin == 0) {
        var greenking = 0
        if (greenking == 0 && greenlost == 1) {
            setTimeout(() => {
                alert('Green eliminated by king capture!!')
            }, 500)
            document.querySelectorAll('.box').forEach(remove => {
                removeId = remove.innerText
                arr = Array.from(removeId)
                firstletter = arr.shift()
                if (firstletter == "G") {
                    remove.innerText = ''
                }
            })
            document.getElementById("green-player-name").style.textDecoration = "line-through";
            greenlost = 0
        }
        if (tog == 1 && redlost == 0) {
            tog = 2
            clocks()
        }
        if (tog == 2 && bluelost == 0) {
            tog = 3
            clocks()
        }
        if (tog == 3 && yellowlost == 0) {
            tog = 4
            clocks()
        }
    } else {
        gsec--;
        if (gsec < 60) {
            document.getElementById("gsec").innerHTML = gsec;
            document.getElementById("gmin").innerHTML = gmin;
        }
        if (gsec < 0) {
            gmin--;
            gsec = 59;
            document.getElementById("gsec").innerHTML = gsec;
            document.getElementById("gmin").innerHTML = gmin;
        }
    }
}