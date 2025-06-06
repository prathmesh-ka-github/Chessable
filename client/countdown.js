//      BLACK COUNTER
var bmin = playtime - 1;
var bsec = 60;
var blackinterval = 0;
function startclockblack() {
    if (bsec == 0 && bmin == 0) {
        document.getElementById("bsec").innerHTML = bsec;
        document.getElementById("bmin").innerHTML = bmin;
        document.getElementById("winner-name").innerText = `${whiteName} Wins By timeout!`
        document.getElementById("winner-screen-container").style.scale = "1"
        clearInterval(blackinterval)
        // window.alert(whiteName + " wins by timeout!!!")
        // location.reload()
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
//      WHITE COUNTER
var wmin = playtime - 1;
var wsec = 60;
var whiteinterval = 0;
function startclockwhite() {
    if (wsec == 0 && wmin == 0) {
        document.getElementById("wsec").innerHTML = wsec;
        document.getElementById("wmin").innerHTML = wmin;
        document.getElementById("winner-name").innerText = `${blackName} Wins By timeout!`
        document.getElementById("winner-screen-container").style.scale = "1"
        clearInterval(whiteinterval)
        // location.reload()
    } else {
        wsec--;
        if (wsec < 60) {
            document.getElementById("wsec").innerHTML = wsec;
            document.getElementById("wmin").innerHTML = wmin;
        }
        if (wsec < 0) {
            wmin--;
            wsec = 59;
            document.getElementById("wsec").innerHTML = wsec;
            document.getElementById("wmin").innerHTML = wmin;
        }
    }
}