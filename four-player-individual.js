let lightColor = "#C3CDDC"
let darkColor = "#8F9EB8"

var redlost = 1
var bluelost = 1
var yellowlost = 1
var greenlost = 1
var noofplayer = 4

function coloring() {
    const color = document.querySelectorAll('.box')
    color.forEach(color => {

        getId = color.id
        arr = Array.from(getId)
        arr.shift()
        current = parseInt(arr.join(''))

        aside = eval(arr.pop())
        aup = eval(arr.shift())
        a = aside + aup
        if (a % 2 == 0) {
            color.style.backgroundColor = darkColor
        }
        if (a % 2 !== 0) {
            color.style.backgroundColor = lightColor
        }
        if ( current >1000 && current<1016 || current>1204 && current<1213 || current>1404 && current<1413) {
            if (a % 2 !== 0) {
                color.style.backgroundColor = darkColor
            }
            if (a % 2 == 0) {
                color.style.backgroundColor = lightColor
            }
        }
        
    })
    checkchecks()
}
coloring()

function boardtheme(light, dark) {
    lightColor = light
    darkColor = dark
    document.querySelectorAll(".box").forEach(box => {
        box.style.border = `0.1px solid ${dark}`
    })
    coloring()
}

// INSERTING PNGs IN THE LIs
function insertImage() {
    document.querySelectorAll('.box').forEach(image => {
        if (image.innerText.length !== 0) {
            if (image.innerText == 'Rpawn' || image.innerText == 'Bpawn' || image.innerText == 'Ypawn'|| image.innerText == 'Gpawn') {
                image.innerHTML = `${image.innerText}<img class='allimg allpawn' src="four-player-pieces/${image.innerText}.png">`
                image.style.cursor = 'pointer'

            }
            else {
                image.innerHTML = `${image.innerText}<img class='allimg' src="four-player-pieces/${image.innerText}.png">`
                image.style.cursor = 'pointer'
            }
        }
    })
}
insertImage()


function reddish() {
    document.querySelectorAll('.box').forEach(i1 => {
        if (i1.style.backgroundColor == 'cadetblue') {

            document.querySelectorAll('.box').forEach(i2 => {

                if (i2.style.backgroundColor == 'green' && i2.innerText.length !== 0) {


                    greenText = i2.innerText

                    cadetblueText = i1.innerText

                    cadetblueColor = ((Array.from(cadetblueText)).shift()).toString()
                    greenColor = ((Array.from(greenText)).shift()).toString()
                    
                    getId = i2.id
                    arr = Array.from(getId)
                    arr.shift()
                    current = parseInt(arr.join(''))
                    if (arr.length == 4) {
                        aside = parseInt(arr.slice(2).join(''))
                    }
                    else
                    {
                        aside = eval(arr.pop())
                    }            
                    aup = eval(arr.shift())
                    a = aside + aup
            
                    if (a % 2 == 0 && cadetblueColor == greenColor) {
                        i2.style.backgroundColor = '#8F9EB8'
                    }
                    if (a % 2 !== 0 && cadetblueColor == greenColor) {
                        i2.style.backgroundColor = '#C3CDDC'
                    }
                    if (cadetblueColor == greenColor) {
                        if ( current >1000 && current<1016 || current>1204 && current<1213 || current>1404 && current<1413) {
                            if (a % 2 !== 0) {
                                i2.style.backgroundColor = '#8F9EB8'
                            }
                            if (a % 2 == 0) {
                                i2.style.backgroundColor = '#C3CDDC'
                            }
                        }
                    }

                    // if (cadetblueColor == greenColor) {
                    //     i2.style.backgroundColor = 'rgb(253, 60, 60)'
                    // }
                }
            })
        }
    })
}
function clocks() {
    if (tog == 1) {
        clearInterval(greeninterval)
        clearInterval(blueinterval)
        clearInterval(yellowinterval)
        redinterval = setInterval(startclockred,1000);
        document.getElementById("G-time").style.boxShadow = "none";
        document.getElementById("B-time").style.boxShadow = "none";
        document.getElementById("Y-time").style.boxShadow = "none";
        document.getElementById("R-time").style.boxShadow = "0px 0px 30px #b54040";
    }
    if (tog == 2) {
        clearInterval(redinterval)
        clearInterval(yellowinterval)
        clearInterval(greeninterval)
        blueinterval = setInterval(startclockblue,1000);
        document.getElementById("G-time").style.boxShadow = "none";
        document.getElementById("Y-time").style.boxShadow = "none";
        document.getElementById("R-time").style.boxShadow = "none";
        document.getElementById("B-time").style.boxShadow = "0px 0px 30px #4085B6";
    }
    if (tog == 3) {
        clearInterval(blueinterval)
        clearInterval(redinterval)
        clearInterval(greeninterval)
        yellowinterval = setInterval(startclockyellow,1000);
        document.getElementById("B-time").style.boxShadow = "none";
        document.getElementById("R-time").style.boxShadow = "none";
        document.getElementById("G-time").style.boxShadow = "none";
        document.getElementById("Y-time").style.boxShadow = "0px 0px 30px #ca9a28";

    }
    if (tog == 4) {
        clearInterval(yellowinterval)
        clearInterval(redinterval)
        clearInterval(blueinterval)
        greeninterval = setInterval(startclockgreen,1000);
        document.getElementById("G-time").style.boxShadow = "0px 0px 30px #538e60";
        document.getElementById("R-time").style.boxShadow = "none";
        document.getElementById("B-time").style.boxShadow = "none";
        document.getElementById("Y-time").style.boxShadow = "none";
    }
}


tog = 1
document.querySelectorAll('.box').forEach(item => {
    item.addEventListener('click', function(){
        // console.log("tog - "+ tog)
        // console.log("blue lost - "+ bluelost)

        if (item.style.backgroundColor == 'green' && item.innerText.length == 0) {
            if (tog<4) { tog++ }
            else{tog = 1}
            clocks()
            checkchecks()
        }

        // To delete the opposite element
        else if (item.style.backgroundColor == 'green' && item.innerText.length !== 0) {
            document.querySelectorAll('.box').forEach(i => {
                if (i.style.backgroundColor == 'cadetblue') {
                    cadetblueId = i.id
                    cadetblueText = i.innerText
                    document.getElementById(cadetblueId).innerText = ''
                    item.innerText = cadetblueText
                    if (tog<4) {
                        tog++
                    }
                    else
                    {
                        tog = 1
                    }
                    clocks()
                    coloring()
                    insertImage()
                    checkchecks()
                }
            })
        }

        getId = item.id
        arr = Array.from(getId)
        arr.shift()
        current = eval(arr.join(''))

        // ASIDE Calculation all done and working as expected
        if (arr.length==3 && arr[1] == 0) {
            aside = parseInt(arr.slice(1).join(''))
        }
        if (arr.length==3 && arr[1] !== 0) {
            aside = parseInt(arr.slice(1).join(''))
        }
        if (arr.length==4 && arr[2] == 0) {
            aside = parseInt(arr.slice(2).join(''))
        }
        if (arr.length==4 && arr[2] !== 0) {
            aside = parseInt(arr.slice(2).join(''))
        }


        // AUP calculation all done and working as expected
        arr = Array.from(getId)
        arr.shift()
        arr.pop()
        if (arr.length==2 && arr[1] !== 0) {
            arr.pop()
            arr.push(0)
        }
        if (arr.length==3 && arr[2] !== 0) {
            arr.pop()
            arr.push(0)
        }
        if(arr.length == 4){
            arr.pop()
            arr.pop()
            arr.push('0')
        }

        arr.push('0')
        aup = eval(arr.join(''))
        a = current
        console.log(a)
        console.log("aup is " +aup)
        console.log("aside is " +aside)
        console.log('aup = ' + aup)

        // Function to display the available paths for all piece
        function whosTurn(toggle) {
            //  PAWN
            if (item.innerText == "Rpawn" && tog == 1) 
            {
                checkchecks()
                item.style.backgroundColor = 'cadetblue'

                if (tog == 1 && aup > 100) {
                    // For red side
                    if (a>1304 && aup == 1300) {
                        if (document.getElementById(`b${a - 200}`).innerText.length == 0 && document.getElementById(`b${a - 100}`).innerText.length == 0) {
                            document.getElementById(`b${a - 200}`).style.backgroundColor = 'green'
                        }
                        
                    }
                    if (document.getElementById(`b${a - 100}`) && document.getElementById(`b${a - 100}`).innerText.length == 0) {
                        document.getElementById(`b${a - 100}`).style.backgroundColor = 'green'
                    }
                    if (document.getElementById(`b${a - 100 + 1}`) && document.getElementById(`b${a - 100 + 1}`).innerText.length !== 0) {
                        document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'green'
                    }

                    if (document.getElementById(`b${a - 100 - 1}`) && document.getElementById(`b${a - 100 - 1}`).innerText.length !== 0) {
                        document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'green'
                    }
                }
            }
            if (item.innerText == "Bpawn" && tog == 2) 
            {   
                checkchecks()
                item.style.backgroundColor = 'cadetblue'
                if (tog == 2) {
                    // For blue side
                    if (aside == 3 ) {
                        if (document.getElementById(`b${a + 2}`).innerText.length == 0 && document.getElementById(`b${a + 1}`).innerText.length == 0) {
                            document.getElementById(`b${a + 2}`).style.backgroundColor = 'green'
                        }
                        
                    }
                    if (document.getElementById(`b${a + 1}`) && document.getElementById(`b${a + 1}`).innerText.length == 0) {
                        document.getElementById(`b${a + 1}`).style.backgroundColor = 'green'
                    }
                    if (document.getElementById(`b${a + 100 + 1}`) && document.getElementById(`b${a + 100 + 1}`).innerText.length !== 0) {
                        document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = 'green'
                    }

                    if (document.getElementById(`b${a - 100 + 1}`) && document.getElementById(`b${a - 100 + 1}`).innerText.length !== 0) {
                        document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'green'
                    }
                }
            }
            if (item.innerText == "Ypawn" && tog == 3) 
            {
                checkchecks()
                item.style.backgroundColor = 'cadetblue'

                if (tog == 3) {
                    // For yellow side
                    if (aup == 200) {
                        if (document.getElementById(`b${a + 200}`).innerText.length == 0 && document.getElementById(`b${a + 100}`).innerText.length == 0) {
                            document.getElementById(`b${a + 200}`).style.backgroundColor = 'green'
                        }
                        
                    }
                    if (document.getElementById(`b${a + 100}`) && document.getElementById(`b${a + 100}`).innerText.length == 0) {
                        document.getElementById(`b${a + 100}`).style.backgroundColor = 'green'
                    }
                    if (document.getElementById(`b${a + 100 + 1}`)&& document.getElementById(`b${a + 100 + 1}`).innerText.length !== 0) {
                        document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = 'green'
                    }

                    if (document.getElementById(`b${a + 100 - 1}`) && document.getElementById(`b${a + 100 - 1}`).innerText.length !== 0) {
                        document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = 'green'
                    }
                }
            }
            if (item.innerText == "Gpawn" && tog == 4) 
            {   
                checkchecks()
                item.style.backgroundColor = 'cadetblue'
                if (tog == 4) {
                    // For green side
                    if (aside == 14) {
                        if (document.getElementById(`b${a - 2}`).innerText.length == 0 && document.getElementById(`b${a - 1}`).innerText.length == 0) {
                            document.getElementById(`b${a - 2}`).style.backgroundColor = 'green'
                        }
                        
                    }
                    if (document.getElementById(`b${a - 1}`) && document.getElementById(`b${a - 1}`).innerText.length == 0) {
                        document.getElementById(`b${a - 1}`).style.backgroundColor = 'green'
                    }
                    if (document.getElementById(`b${a - 100 - 1}`) && document.getElementById(`b${a - 100 - 1}`).innerText.length !== 0) {
                        document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'green'
                    }
                    
                    if (document.getElementById(`b${a + 100 - 1}`) && document.getElementById(`b${a + 100 - 1}`).innerText.length !== 0) {
                        document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = 'green'
                    }
                }
            }
            // KNIGHT
            if (item.innerText == `${toggle}knight`) {
                checkchecks()
                if (document.getElementById(`b${a + 100 + 2}`)) {
                    document.getElementById(`b${a + 100 + 2}`).style.backgroundColor = 'green'
                }
                if (document.getElementById(`b${a - 100 + 2}`)) {
                    document.getElementById(`b${a - 100 + 2}`).style.backgroundColor = 'green'
                }
                if (document.getElementById(`b${a + 200 + 1}`)) {
                    document.getElementById(`b${a + 200 + 1}`).style.backgroundColor = 'green'
                }
                if (document.getElementById(`b${a + 200 - 1}`)) {
                    document.getElementById(`b${a + 200 - 1}`).style.backgroundColor = 'green'
                }
                if (document.getElementById(`b${a - 2 + 100}`)) {
                    document.getElementById(`b${a - 2 + 100}`).style.backgroundColor = 'green'
                }
                if (document.getElementById(`b${a - 2 - 100}`)) {
                    document.getElementById(`b${a - 2 - 100}`).style.backgroundColor = 'green'
                }
                if (document.getElementById(`b${a - 200 + 1}`)) {
                    document.getElementById(`b${a - 200 + 1}`).style.backgroundColor = 'green'
                }
                if (document.getElementById(`b${a - 200 - 1}`)) {
                    document.getElementById(`b${a - 200 - 1}`).style.backgroundColor = 'green'
                }

                item.style.backgroundColor = 'cadetblue'

            }

            // BISHOP
            if (item.innerText == `${toggle}bishop`) {
                checkchecks()

                for (let i = 1; i < 15; i++) {
                    if (document.getElementById(`b${a + i * 100 + i}`) && document.getElementById(`b${a + i * 100 + i}`).innerText.length == 0) {
                        document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = 'green'
                    }
                    else if (document.getElementById(`b${a + i * 100 + i}`)) {
                        if (document.getElementById(`b${a + i * 100 + i}`).innerText.length !== 0) {                            
                            document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = 'green'
                            break
                        }
                    }
                    else
                    {
                        break
                    }
                }


                for (let i = 1; i < 15; i++) {
                    if (document.getElementById(`b${a - i * 100 + i}`) && document.getElementById(`b${a - i * 100 + i}`).innerText.length == 0) {
                        document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = 'green'
                    }
                    else if (document.getElementById(`b${a - i * 100 + i}`)) {
                        if ( document.getElementById(`b${a - i * 100 + i}`).innerText.length !== 0) {
                            document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = 'green'
                            break
                        }
                    }
                    else {
                        break
                    }
                }


                for (let i = 1; i < 9; i++) {
                    if (document.getElementById(`b${a + i * 100 - i}`) && document.getElementById(`b${a + i * 100 - i}`).innerText.length == 0) {
                        document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = 'green'
                    }
                    else if (document.getElementById(`b${a + i * 100 - i}`)) {
                        if (document.getElementById(`b${a + i * 100 - i}`).innerText.length !== 0) {
                            document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = 'green'
                            break
                        }
                    }
                    else{break}

                }


                for (let i = 1; i < 9; i++) {
                    if (document.getElementById(`b${a - i * 100 - i}`) && document.getElementById(`b${a - i * 100 - i}`).innerText.length == 0) {
                        document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = 'green'
                    }
                    else if (document.getElementById(`b${a - i * 100 - i}`) ) {
                        if ( document.getElementById(`b${a - i * 100 - i}`).innerText.length !== 0) {
                            document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = 'green'
                            break
                        }
                    }
                    else{break}
                }
                item.style.backgroundColor = 'cadetblue'
            }

            // ROOK
            if (item.innerText == `${toggle}rook`) {
                checkchecks()
                for (let i = 1; i < 15; i++) {

                    if (document.getElementById(`b${a + i * 100}`) && document.getElementById(`b${a + i * 100}`).innerText == 0) {
                        document.getElementById(`b${a + i * 100}`).style.backgroundColor = 'green'
                    }
                    else if (document.getElementById(`b${a + i * 100}`) && document.getElementById(`b${a + i * 100}`).innerText !== 0) {
                        document.getElementById(`b${a + i * 100}`).style.backgroundColor = 'green'
                        break
                    }
                }

                for (let i = 1; i < 15; i++) {

                    if (document.getElementById(`b${a - i * 100}`) && document.getElementById(`b${a - i * 100}`).innerText == 0) {
                        document.getElementById(`b${a - i * 100}`).style.backgroundColor = 'green'
                    }
                    else if (document.getElementById(`b${a - i * 100}`) && document.getElementById(`b${a - i * 100}`).innerText !== 0) {
                        document.getElementById(`b${a - i * 100}`).style.backgroundColor = 'green'
                        break
                    }
                }

                for (let i = 1; i < 15; i++) {

                    if (document.getElementById(`b${a + i}`) && document.getElementById(`b${a + i}`).innerText == 0) {
                        document.getElementById(`b${a + i}`).style.backgroundColor = 'green'
                    }
                    else if (document.getElementById(`b${a + i}`) && document.getElementById(`b${a + i}`).innerText !== 0) {
                        document.getElementById(`b${a + i}`).style.backgroundColor = 'green'
                        break
                    }
                }

                for (let i = 1; i < 15; i++) {

                    if (document.getElementById(`b${a - i}`) && document.getElementById(`b${a - i}`).innerText == 0) {
                        document.getElementById(`b${a - i}`).style.backgroundColor = 'green'
                    }
                    else if (document.getElementById(`b${a - i}`) && document.getElementById(`b${a - i}`).innerText !== 0) {
                        document.getElementById(`b${a - i}`).style.backgroundColor = 'green'
                        break
                    }
                }

                item.style.backgroundColor = 'cadetblue'
            }


            // KING
            if (item.innerText == `${toggle}king`) {
                checkchecks()
                if (document.getElementById(`b${a + 1}`)) {

                    document.getElementById(`b${a + 1}`).style.backgroundColor = 'green'
                }
                if (document.getElementById(`b${a - 1}`)) {
                    
                    document.getElementById(`b${a - 1}`).style.backgroundColor = 'green'
                }
                if (document.getElementById(`b${a + 100}`)) {

                    document.getElementById(`b${a + 100}`).style.backgroundColor = 'green'
                }
                if (document.getElementById(`b${a - 100}`)) {

                    document.getElementById(`b${a - 100}`).style.backgroundColor = 'green'
                }
                if (document.getElementById(`b${a - 100 + 1}`)) {

                    document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'green'
                }
                if (document.getElementById(`b${a - 100 - 1}`)) {

                    document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'green'
                }
                if (document.getElementById(`b${a + 100 + 1}`)) {

                    document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = 'green'
                }
                if (document.getElementById(`b${a + 100 - 1}`)) {

                    document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = 'green'
                }
                item.style.backgroundColor = 'cadetblue'
            }


            // QUEEN

            if (item.innerText == `${toggle}queen`) {
                checkchecks()
                for (let i = 1; i < 15; i++) {

                    if (document.getElementById(`b${a + i * 100}`) && document.getElementById(`b${a + i * 100}`).innerText == 0) {
                        document.getElementById(`b${a + i * 100}`).style.backgroundColor = 'green'
                    }
                    else if (document.getElementById(`b${a + i * 100}`) && document.getElementById(`b${a + i * 100}`).innerText !== 0) {
                        document.getElementById(`b${a + i * 100}`).style.backgroundColor = 'green'
                        break
                    }
                }

                for (let i = 1; i < 15; i++) {

                    if (document.getElementById(`b${a - i * 100}`) && document.getElementById(`b${a - i * 100}`).innerText == 0) {
                        document.getElementById(`b${a - i * 100}`).style.backgroundColor = 'green'
                    }
                    else if (document.getElementById(`b${a - i * 100}`) && document.getElementById(`b${a - i * 100}`).innerText !== 0) {
                        document.getElementById(`b${a - i * 100}`).style.backgroundColor = 'green'
                        break
                    }
                }

                for (let i = 1; i < 15; i++) {

                    if (document.getElementById(`b${a + i}`) && document.getElementById(`b${a + i}`).innerText == 0) {
                        document.getElementById(`b${a + i}`).style.backgroundColor = 'green'
                    }
                    else if (document.getElementById(`b${a + i}`) && document.getElementById(`b${a + i}`).innerText !== 0) {
                        document.getElementById(`b${a + i}`).style.backgroundColor = 'green'
                        break
                    }
                }

                for (let i = 1; i < 15; i++) {

                    if (document.getElementById(`b${a - i}`) && document.getElementById(`b${a - i}`).innerText == 0) {
                        document.getElementById(`b${a - i}`).style.backgroundColor = 'green'
                    }
                    else if (document.getElementById(`b${a - i}`) && document.getElementById(`b${a - i}`).innerText !== 0) {
                        document.getElementById(`b${a - i}`).style.backgroundColor = 'green'
                        break
                    }
                }



                for (let i = 1; i < 15; i++) {
                    if (document.getElementById(`b${a + i * 100 + i}`) && document.getElementById(`b${a + i * 100 + i}`).innerText.length == 0) {
                        document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = 'green'
                    }
                    else if (document.getElementById(`b${a + i * 100 + i}`)) {
                        if (document.getElementById(`b${a + i * 100 + i}`).innerText.length !== 0) {
                            document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = 'green'
                            break
                        }
                    }
                    else
                    {
                        break
                    }
                }


                for (let i = 1; i < 15; i++) {
                    if (document.getElementById(`b${a - i * 100 + i}`) && document.getElementById(`b${a - i * 100 + i}`).innerText.length == 0) {
                        document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = 'green'
                    }
                    else if (document.getElementById(`b${a - i * 100 + i}`) ) {
                        if (document.getElementById(`b${a - i * 100 + i}`).innerText.length !== 0) {
                            document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = 'green'
                            break   
                        }
                    }
                    else {
                        break
                    }
                }


                for (let i = 1; i < 15; i++) {
                    if (document.getElementById(`b${a + i * 100 - i}`) && document.getElementById(`b${a + i * 100 - i}`).innerText.length == 0) {
                        document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = 'green'
                    }
                    else if (document.getElementById(`b${a + i * 100 - i}`) ) {
                        if (document.getElementById(`b${a + i * 100 - i}`).innerText.length !== 0) {
                            document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = 'green'
                            break   
                        }

                    }
                    else{
                        break
                    }

                }


                for (let i = 1; i < 15; i++) {
                    if (document.getElementById(`b${a - i * 100 - i}`) && document.getElementById(`b${a - i * 100 - i}`).innerText.length == 0) {
                        document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = 'green'
                    }
                    else if (document.getElementById(`b${a - i * 100 - i}`) ) {
                        if (document.getElementById(`b${a - i * 100 - i}`).innerText.length !== 0) {
                            document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = 'green'
                            break
                        }
                    }
                    else {
                        break
                    }
                }
                item.style.backgroundColor = 'cadetblue'
            }
        }

        //! Elimination()
        // RED KING ELIMINATED
        var redking = 0
        document.querySelectorAll('.box').forEach(win => {
            if (win.innerText == 'Rking') {
                redking = 1
            }
        })
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
            noofplayer--
        }

        // BLUE KING ELIMINATED
        var blueking = 0
        document.querySelectorAll('.box').forEach(win => {
            if (win.innerText == 'Bking') {
                blueking = 1
            }
        })
        if (blueking == 0 && bluelost == 1) {
            setTimeout(() => {
                alert('Blue eliminated by king capture!!')
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
            noofplayer--

        }
        // YELLOW KING ELIMINATED
        var yellowking = 0
        document.querySelectorAll('.box').forEach(win => {
            if (win.innerText == 'Yking') {
                yellowking = 1
            }
        })
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
            noofplayer--

        }
        // GREEN KING ELIMINATED
        var greenking = 0
        document.querySelectorAll('.box').forEach(win => {
            if (win.innerText == 'Gking') {
                greenking = 1
            }
        })
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
            noofplayer--
        }

        //! Eliminations 
        for (let i = 0; i < 2 ; i++) {                
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
            if (tog == 4 && greenlost == 0) {
                tog = 1
                clocks()
            }
        }

        //toggling the turn
        if (tog == 1 && redlost == 1) {
            whosTurn('R')
            whowins()
        }
        if (tog == 2 && bluelost == 1) {
            whosTurn('B')
            whowins()
        }
        if (tog == 3 && yellowlost == 1) {
            whosTurn('Y')
            whowins()
        }
        if (tog == 4 && greenlost == 1) {
            whosTurn('G')
            whowins()
        }
        //! Who wins
        function whowins(){
            if (noofplayer == 1) {
                console.log(tog)
                if (tog == 1) {
                    document.getElementById('winner-name-only').innerText = redName
                    document.getElementById('winner-name-only2').innerText = redName
                    document.getElementById('winner-name').style.color = "red"
                    document.getElementById('winner-screen-container').style.scale = "1"
                    clearInterval(redinterval)
                }
                if (tog == 2) {
                    document.getElementById('winner-name-only').innerText = blueName
                    document.getElementById('winner-name-only2').innerText = blueName
                    document.getElementById('winner-name').style.color = "blue"
                    document.getElementById('winner-screen-container').style.scale = "1"
                    clearInterval(blueinterval)
                }
                if (tog == 3) {
                    document.getElementById('winner-name-only').innerText = yellowName
                    document.getElementById('winner-name-only2').innerText = yellowName
                    document.getElementById('winner-name').style.color = "yellow"
                    document.getElementById('winner-screen-container').style.scale = "1"
                    clearInterval(yellowinterval)
                }
                if (tog == 4) {
                    document.getElementById('winner-name-only').innerText = greenName
                    document.getElementById('winner-name-only2').innerText = greenName
                    document.getElementById('winner-name').style.color = "green"
                    document.getElementById('winner-screen-container').style.scale = "1"
                    clearInterval(greeninterval)
                }
            }
        }
        reddish()
    })
})

// Moving the element
document.querySelectorAll('.box').forEach(select => {

    select.addEventListener('click', function () {
        if (select.style.backgroundColor == 'cadetblue') {
            cadetblueId = select.id
            cadetblueText = select.innerText
            document.querySelectorAll('.box').forEach(replace => {
                
                replace.addEventListener('click', function () {
                    if (replace.style.backgroundColor == 'green' && replace.innerText.length == 0) {
                        document.getElementById(cadetblueId).innerText = ''
                        replace.innerText = cadetblueText
                        coloring()
                        insertImage()
                    }
                })
            })
        }
    })
})



// Prvents from selecting multiple elements
z = 0
document.querySelectorAll('.box').forEach(ee => {
    ee.addEventListener('click', function () {
        z = z + 1
        if (z % 2 == 0 && ee.style.backgroundColor !== 'green') {
            coloring()
        }
    })
})

function reloadd(){
    location.reload();
}
function removewinnerscreen(){
    document.getElementById("winner-screen-container").style.scale = "0"
}
function checkchecks(){
    // DETECT CHECKS
    document.querySelectorAll('.box').forEach(king =>{
        var kingid = king.id
        array = Array.from(kingid)
        array.shift()
        kingid = eval(array.join(''))
        checkking('B','R','Y','G')
        checkking('Y','R','B','G')
        checkking('R','B','Y','G')
        checkking('G','R','Y','B')

        // checkking    

        function checkking(player, opponent1, opponent2, opponent3){
            if (king.innerText == `${player}king`) {
                
                // ROOK and QUEEN
                for (let i = 1; i < 9; i++) {
                    if (document.getElementById(`b${kingid + i * 100}`) && document.getElementById(`b${kingid + i * 100}`).innerText == 0) {
                    }
                    else if (document.getElementById(`b${kingid + i * 100}`) && document.getElementById(`b${kingid + i * 100}`).innerText !== 0) {
                        if (document.getElementById(`b${kingid + i * 100}`).innerText == `${opponent1}rook` || document.getElementById(`b${kingid + i * 100}`).innerText == `${opponent1}queen` || document.getElementById(`b${kingid + i * 100}`).innerText == `${opponent2}rook` || document.getElementById(`b${kingid + i * 100}`).innerText == `${opponent2}queen` || document.getElementById(`b${kingid + i * 100}`).innerText == `${opponent3}rook` || document.getElementById(`b${kingid + i * 100}`).innerText == `${opponent3}queen`) {   
                            king.style.backgroundColor = 'red'
                            break
                        }
                        else{break}
                    }
                }
                for (let i = 1; i < 9; i++) {
                    if (document.getElementById(`b${kingid - i * 100}`) && document.getElementById(`b${kingid - i * 100}`).innerText == 0) {
                    }
                    else if (document.getElementById(`b${kingid - i * 100}`) && document.getElementById(`b${kingid - i * 100}`).innerText !== 0) {
                        if (document.getElementById(`b${kingid - i * 100}`).innerText == `${opponent1}rook` || document.getElementById(`b${kingid - i * 100}`).innerText == `${opponent1}queen` || document.getElementById(`b${kingid - i * 100}`).innerText == `${opponent2}rook` || document.getElementById(`b${kingid - i * 100}`).innerText == `${opponent2}queen` || document.getElementById(`b${kingid - i * 100}`).innerText == `${opponent3}rook` || document.getElementById(`b${kingid - i * 100}`).innerText == `${opponent3}queen`) {   
                            king.style.backgroundColor = 'red'
                            break
                        }
                        else{break}
                    }
                }
                for (let i = 1; i < 9; i++) {
                    if (document.getElementById(`b${kingid - i}`) && document.getElementById(`b${kingid - i}`).innerText == 0) {
                    }
                    else if (document.getElementById(`b${kingid - i}`) && document.getElementById(`b${kingid - i}`).innerText !== 0) {
                        if (document.getElementById(`b${kingid - i}`).innerText == `${opponent1}rook` || document.getElementById(`b${kingid - i}`).innerText == `${opponent1}queen` || document.getElementById(`b${kingid - i}`).innerText == `${opponent2}rook` || document.getElementById(`b${kingid - i}`).innerText == `${opponent2}queen` || document.getElementById(`b${kingid - i}`).innerText == `${opponent3}rook` || document.getElementById(`b${kingid - i}`).innerText == `${opponent3}queen`) {   
                            king.style.backgroundColor = 'red'
                            break
                        }
                        else{break}
                    }
                }
                for (let i = 1; i < 9; i++) {
                    if (document.getElementById(`b${kingid + i}`) && document.getElementById(`b${kingid + i}`).innerText == 0) {
                    }
                    else if (document.getElementById(`b${kingid + i}`) && document.getElementById(`b${kingid + i}`).innerText !== 0) {
                        if (document.getElementById(`b${kingid + i}`).innerText == `${opponent1}rook` || document.getElementById(`b${kingid + i}`).innerText == `${opponent1}queen`|| document.getElementById(`b${kingid + i}`).innerText == `${opponent2}rook` || document.getElementById(`b${kingid + i}`).innerText == `${opponent2}queen` || document.getElementById(`b${kingid + i}`).innerText == `${opponent3}rook` || document.getElementById(`b${kingid + i}`).innerText == `${opponent3}queen`) {   
                            king.style.backgroundColor = 'red'
                            break
                        }
                        else{break}
                    }
                }   
                
                // BISHOP and QUEEN
                for (let i = 1; i < 9; i++) {
                    if (document.getElementById(`b${kingid + i * 100 + i}`) && document.getElementById(`b${kingid + i * 100 + i}`).innerText == 0) {
                    }
                    else if (document.getElementById(`b${kingid + i * 100 + i}`) && document.getElementById(`b${kingid + i * 100 + i}`).innerText !== 0) {
                        if (document.getElementById(`b${kingid + i * 100 + i}`).innerText == `${opponent1}queen` || document.getElementById(`b${kingid + i * 100 + i}`).innerText == `${opponent1}bishop` || document.getElementById(`b${kingid + i * 100 + i}`).innerText == `${opponent2}queen` || document.getElementById(`b${kingid + i * 100 + i}`).innerText == `${opponent2}bishop` || document.getElementById(`b${kingid + i * 100 + i}`).innerText == `${opponent3}queen` || document.getElementById(`b${kingid + i * 100 + i}`).innerText == `${opponent3}bishop`) {
                            king.style.backgroundColor = 'red'
                            break
                        }
                        else{break}
                    }
                }
                for (let i = 1; i < 9; i++) {
                    if (document.getElementById(`b${kingid - i * 100 + i}`) && document.getElementById(`b${kingid - i * 100 + i}`).innerText == 0) {
                    }
                    else if (document.getElementById(`b${kingid - i * 100 + i}`) && document.getElementById(`b${kingid - i * 100 + i}`).innerText !== 0) {
                        if (document.getElementById(`b${kingid - i * 100 + i}`).innerText == `${opponent1}queen` || document.getElementById(`b${kingid - i * 100 + i}`).innerText == `${opponent1}bishop` || document.getElementById(`b${kingid - i * 100 + i}`).innerText == `${opponent2}queen` || document.getElementById(`b${kingid - i * 100 + i}`).innerText == `${opponent2}bishop` || document.getElementById(`b${kingid - i * 100 + i}`).innerText == `${opponent3}queen` || document.getElementById(`b${kingid - i * 100 + i}`).innerText == `${opponent3}bishop`) {
                            king.style.backgroundColor = 'red'
                            break
                        }
                        else{break}
                    }
                }
                for (let i = 1; i < 9; i++) {
                    if (document.getElementById(`b${kingid + i * 100 - i}`) && document.getElementById(`b${kingid + i * 100 - i}`).innerText == 0) {
                    }
                    else if (document.getElementById(`b${kingid + i * 100 - i}`) && document.getElementById(`b${kingid + i * 100 - i}`).innerText !== 0) {
                        if (document.getElementById(`b${kingid + i * 100 - i}`).innerText == `${opponent1}queen` || document.getElementById(`b${kingid + i * 100 - i}`).innerText == `${opponent1}bishop` || document.getElementById(`b${kingid + i * 100 - i}`).innerText == `${opponent2}queen` || document.getElementById(`b${kingid + i * 100 - i}`).innerText == `${opponent2}bishop` || document.getElementById(`b${kingid + i * 100 - i}`).innerText == `${opponent3}queen` || document.getElementById(`b${kingid + i * 100 - i}`).innerText == `${opponent3}bishop`) {   
                            king.style.backgroundColor = 'red'
                            break
                        }
                        else{break}
                    }
                }
                for (let i = 1; i < 9; i++) {
                    if (document.getElementById(`b${kingid - i * 100 - i}`) && document.getElementById(`b${kingid - i * 100 - i}`).innerText == 0) {
                    }
                    else if (document.getElementById(`b${kingid - i * 100 - i}`) && document.getElementById(`b${kingid - i * 100 - i}`).innerText !== 0) {
                        if (document.getElementById(`b${kingid - i * 100 - i}`).innerText == `${opponent1}queen` || document.getElementById(`b${kingid - i * 100 - i}`).innerText == `${opponent1}bishop` || document.getElementById(`b${kingid - i * 100 - i}`).innerText == `${opponent2}queen` || document.getElementById(`b${kingid - i * 100 - i}`).innerText == `${opponent2}bishop` || document.getElementById(`b${kingid - i * 100 - i}`).innerText == `${opponent3}queen` || document.getElementById(`b${kingid - i * 100 - i}`).innerText == `${opponent3}bishop`) {   
                            king.style.backgroundColor = 'red'
                            break
                        }
                        else{break}
                    }
                }   
                
                // KNIGHT
                if (document.getElementById(`b${kingid + 100 + 2}`)) {
                    if (document.getElementById(`b${kingid + 100 + 2}`).innerText == `${opponent1}knight` || document.getElementById(`b${kingid + 100 + 2}`).innerText == `${opponent2}knight` || document.getElementById(`b${kingid + 100 + 2}`).innerText == `${opponent3}knight`) 
                    {
                        king.style.backgroundColor = 'red'
                    }
                }
                if (document.getElementById(`b${kingid - 100 + 2}`)) {
                    if (document.getElementById(`b${kingid - 100 + 2}`).innerText == `${opponent1}knight` || document.getElementById(`b${kingid - 100 + 2}`).innerText == `${opponent2}knight` || document.getElementById(`b${kingid - 100 + 2}`).innerText == `${opponent3}knight`) 
                    {
                        king.style.backgroundColor = 'red'
                    }
                }
                if (document.getElementById(`b${kingid + 200 + 1}`)) {
                    if (document.getElementById(`b${kingid + 200 + 1}`).innerText == `${opponent1}knight` || document.getElementById(`b${kingid + 200 + 1}`).innerText == `${opponent2}knight` || document.getElementById(`b${kingid + 200 + 1}`).innerText == `${opponent3}knight`) 
                    {
                        king.style.backgroundColor = 'red'
                    }
                }
                if (document.getElementById(`b${kingid + 200 - 1}`)) {
                    if (document.getElementById(`b${kingid + 200 - 1}`).innerText == `${opponent1}knight` || document.getElementById(`b${kingid + 200 - 1}`).innerText == `${opponent2}knight` || document.getElementById(`b${kingid + 200 - 1}`).innerText == `${opponent3}knight`) 
                    {
                        king.style.backgroundColor = 'red'
                    }
                }
                if (document.getElementById(`b${kingid - 2 + 100}`)) {
                    if (document.getElementById(`b${kingid - 2 + 100}`).innerText == `${opponent1}knight` || document.getElementById(`b${kingid - 2 + 100}`).innerText == `${opponent2}knight` || document.getElementById(`b${kingid - 2 + 100}`).innerText == `${opponent3}knight`) 
                    {
                        king.style.backgroundColor = 'red'
                    }
                }
                if (document.getElementById(`b${kingid - 2 - 100}`)) {
                    if (document.getElementById(`b${kingid - 2 - 100}`).innerText == `${opponent1}knight` || document.getElementById(`b${kingid - 2 - 100}`).innerText == `${opponent2}knight` || document.getElementById(`b${kingid - 2 - 100}`).innerText == `${opponent3}knight`) 
                    {
                        king.style.backgroundColor = 'red'
                    }
                }
                if (document.getElementById(`b${kingid - 200 + 1}`)) {
                    if (document.getElementById(`b${kingid - 200 + 1}`).innerText == `${opponent1}knight` || document.getElementById(`b${kingid - 200 + 1}`).innerText == `${opponent2}knight` || document.getElementById(`b${kingid - 200 + 1}`).innerText == `${opponent3}knight`) 
                    {
                        king.style.backgroundColor = 'red'
                    }
                }
                if (document.getElementById(`b${kingid - 200 - 1}`)) {
                    if (document.getElementById(`b${kingid - 200 - 1}`).innerText == `${opponent1}knight` || document.getElementById(`b${kingid - 200 - 1}`).innerText == `${opponent2}knight` || document.getElementById(`b${kingid - 200 - 1}`).innerText == `${opponent3}knight`) 
                    {
                        king.style.backgroundColor = 'red'
                    }
                }
            }
        }
    })   
}