//!     RED COUNTER
var rmin = playtime - 1;
var rsec = 60;
var redinterval = 0;
function startclockred() {
    if (rsec == 0 && rmin == 0) {
        document.getElementById("rsec").innerHTML = rsec;
        document.getElementById("rmin").innerHTML = rmin;
        window.alert(blueName + ' and ' + greenName + " wins by timeout!!!")
        location.reload()
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
//      BLUE COUNTER
var bmin = playtime - 1;
var bsec = 60;
var blueinterval = 0;
function startclockblue() {
    if (bsec == 0 && bmin == 0) {
        document.getElementById("bsec").innerHTML = bsec;
        document.getElementById("bmin").innerHTML = bmin;
        window.alert(redName + ' and ' + yellowName + " wins by timeout!!!")
        location.reload()
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
//      GREEN COUNTER
var ymin = playtime - 1;
var ysec = 60;
var yellowinterval = 0;
function startclockyellow() {
    if (ysec == 0 && ymin == 0) {
        document.getElementById("ysec").innerHTML = ysec;
        document.getElementById("ymin").innerHTML = ymin;
        window.alert(redName + ' and ' + yellowName + " wins by timeout!!!")
        location.reload()
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
//      GREEN COUNTER
var gmin = playtime - 1;
var gsec = 60;
var greeninterval = 0;
function startclockgreen() {
    if (gsec == 0 && gmin == 0) {
        document.getElementById("gsec").innerHTML = gsec;
        document.getElementById("gmin").innerHTML = gmin;
        window.alert(blueName + ' and ' + greenName + " wins by timeout!!!")
        location.reload()
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