let lightColor = "#C3CDDC"
let darkColor = "#8F9EB8"

function coloring() {
    const color = document.querySelectorAll('.box')
    color.forEach(color => {
        getId = color.id
        arr = Array.from(getId)
        arr.shift()
        aside = eval(arr.pop())
        aup = eval(arr.shift())
        a = aside + aup

        if (a % 2 == 0) {
            color.style.backgroundColor = darkColor
        }
        if (a % 2 !== 0) {
            color.style.backgroundColor = lightColor
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

function insertImage() {
    document.querySelectorAll('.box').forEach(image => {
        if (image.innerText.length !== 0) {
            if (image.innerText == 'Wpawn' || image.innerText == 'Bpawn') {
                image.innerHTML = `${image.innerText}<img class='allimg allpawn' src="pieces/${image.innerText}.png" alt="">`
                image.style.cursor = 'pointer'

            }
            else {

                image.innerHTML = `${image.innerText}<img class='allimg' src="pieces/${image.innerText}.png" alt="">`
                image.style.cursor = 'pointer'
            }
        }
    })
}
insertImage()


//function to not remove the same team element
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
                    aside = eval(arr.pop())
                    aup = eval(arr.shift())
                    a = aside + aup
                    if (a % 2 == 0 && cadetblueColor == greenColor) {
                        i2.style.backgroundColor = '#8F9EB8'
                    }
                    if (a % 2 !== 0 && cadetblueColor == greenColor) {
                        i2.style.backgroundColor = '#C3CDDC'
                    }

                    // if (cadetblueColor == greenColor) {
                    //     i2.style.backgroundColor = 'rgb(253, 60, 60)'
                    // }
                }
                if (i2.style.backgroundColor == 'red' && i2.innerText.length !== 0) {


                    greenText = i2.innerText

                    cadetblueText = i1.innerText

                    cadetblueColor = ((Array.from(cadetblueText)).shift()).toString()
                    greenColor = ((Array.from(greenText)).shift()).toString()

                    getId = i2.id
                    arr = Array.from(getId)
                    arr.shift()
                    aside = eval(arr.pop())
                    aup = eval(arr.shift())
                    a = aside + aup
            
                    if (a % 2 == 0 && cadetblueColor == greenColor) {
                        i2.style.backgroundColor = '#8F9EB8'
                    }
                    if (a % 2 !== 0 && cadetblueColor == greenColor) {
                        i2.style.backgroundColor = '#C3CDDC'
                    }

                    // if (cadetblueColor == greenColor) {
                    //     i2.style.backgroundColor = 'rgb(253, 60, 60)'
                    // }
                }
            })
        }
    })
}

function checkpawn(){
    document.querySelectorAll('.box').forEach(checkpawn =>{
        id=checkpawn.id
        idnum = parseInt(id.substr(1,4))
        if (checkpawn.innerText == 'Wpawn' && 800<idnum && idnum<809) {
            checkpawn.innerText = "Wqueen"
        }
        if (checkpawn.innerText == 'Bpawn' && 100<idnum && idnum<109) {
            checkpawn.innerText = "Bqueen"
        }
    })
}

tog = 1
document.querySelectorAll('.box').forEach(item => {
    item.addEventListener('click', function () {
        // To delete the opposite element
        
        if (item.style.backgroundColor == 'green' && item.innerText.length == 0) {
            tog = tog + 1
            setTimeout(flip, 800);
            checkchecks()
        }
        if (item.style.backgroundColor == 'yellow' && item.innerText.length == 0) {
            tog = tog + 1
            setTimeout(flip, 800);
        }
        else if (item.style.backgroundColor == 'green' && item.innerText.length !== 0) {
            
            document.querySelectorAll('.box').forEach(i => {
                if (i.style.backgroundColor == 'cadetblue') {
                    cadetblueId = i.id
                    cadetblueText = i.innerText
                    
                    document.getElementById(cadetblueId).innerText = ''
                    item.innerText = cadetblueText
                    tog = tog + 1
                    setTimeout(flip, 800);
                    coloring()
                    insertImage()
                    checkpawn()
                    insertImage()
                    checkchecks()
                }
            })
        }
        getId = item.id
        arr = Array.from(getId)
        arr.shift()
        current = eval(arr.join(''))
        aside = eval(arr.pop())
        // console.log('aside = ' + aside)
        arr.push('0')
        aup = eval(arr.join(''))
        // console.log('aup = ' + aup)
        a = aside + aup
        // console.log('a = ' + a)


        // Function to display the available paths for all pieces
        function whosTurn(toggle) {
            // PAWN
            if (item.innerText == `${toggle}pawn`) {
                checkchecks()


                if (tog % 2 !== 0 && aup < 800) {
                    // For white side
                    if (aup == 200) {
                        //for pawn can move two squares on first move
                        if (document.getElementById(`b${a + 200}`).innerText.length == 0 && document.getElementById(`b${a + 100}`).innerText.length == 0) {
                            document.getElementById(`b${a + 200}`).style.backgroundColor = 'green'
                        }
                    }
                    if (document.getElementById(`b${a + 100}`).innerText.length == 0) {
                        document.getElementById(`b${a + 100}`).style.backgroundColor = 'green'
                    }
                    if (document.getElementById(`b${a + 100 + 1}`) && document.getElementById(`b${a + 100 + 1}`).innerText.length !== 0) {
                        document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = 'green'
                    }

                    if (document.getElementById(`b${a + 100 - 1}`) && document.getElementById(`b${a + 100 - 1}`).innerText.length !== 0) {
                        document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = 'green'

                    }
                    

                }

                if (tog % 2 == 0 && aup > 100) {
                    // For black side
                    if (aup == 700) {
                        //for pawn can move two squares on first move
                        if (document.getElementById(`b${a - 200}`).innerText.length == 0 && document.getElementById(`b${a - 100}`).innerText.length == 0) {
                            document.getElementById(`b${a - 200}`).style.backgroundColor = 'green'
                        }
                    }
                    if (document.getElementById(`b${a - 100}`).innerText.length == 0) {
                        document.getElementById(`b${a - 100}`).style.backgroundColor = 'green'
                    }
                    if (document.getElementById(`b${a - 100 + 1}`) && document.getElementById(`b${a - 100 + 1}`).innerText.length !== 0) {
                        document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'green'
                    }
                    if (document.getElementById(`b${a - 100 - 1}`) && document.getElementById(`b${a - 100 - 1}`).innerText.length !== 0) {
                        document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'green'

                    }
                }

                item.style.backgroundColor = 'cadetblue'
                reddish()

                    
            }
            
            // ROOK

            if (item.innerText == `${toggle}rook`) {
                checkchecks()


                for (let i = 1; i < 9; i++) {

                    if (document.getElementById(`b${a + i * 100}`) && document.getElementById(`b${a + i * 100}`).innerText == 0) {
                        document.getElementById(`b${a + i * 100}`).style.backgroundColor = 'green'
                    }
                    else if (document.getElementById(`b${a + i * 100}`) && document.getElementById(`b${a + i * 100}`).innerText !== 0) {
                        document.getElementById(`b${a + i * 100}`).style.backgroundColor = 'green'
                        break
                    }
                }

                for (let i = 1; i < 9; i++) {

                    if (document.getElementById(`b${a - i * 100}`) && document.getElementById(`b${a - i * 100}`).innerText == 0) {
                        document.getElementById(`b${a - i * 100}`).style.backgroundColor = 'green'
                    }
                    else if (document.getElementById(`b${a - i * 100}`) && document.getElementById(`b${a - i * 100}`).innerText !== 0) {
                        document.getElementById(`b${a - i * 100}`).style.backgroundColor = 'green'
                        break
                    }
                }

                for (let i = 1; i < 9; i++) {

                    if (document.getElementById(`b${a + i}`) && document.getElementById(`b${a + i}`).innerText == 0) {
                        document.getElementById(`b${a + i}`).style.backgroundColor = 'green'
                    }
                    else if (document.getElementById(`b${a + i}`) && document.getElementById(`b${a + i}`).innerText !== 0) {
                        document.getElementById(`b${a + i}`).style.backgroundColor = 'green'
                        break
                    }
                }

                for (let i = 1; i < 9; i++) {

                    if (document.getElementById(`b${a - i}`) && document.getElementById(`b${a - i}`).innerText == 0) {
                        document.getElementById(`b${a - i}`).style.backgroundColor = 'green'
                    }
                    else if (document.getElementById(`b${a - i}`) && document.getElementById(`b${a - i}`).innerText !== 0) {
                        document.getElementById(`b${a - i}`).style.backgroundColor = 'green'
                        break
                    }
                }

                item.style.backgroundColor = 'cadetblue'
                reddish()

            }



            // BISHOP

            if (item.innerText == `${toggle}bishop`) {

                checkchecks()

                for (let i = 1; i < 9; i++) {
                    if (document.getElementById(`b${a + i * 100 + i}`) && document.getElementById(`b${a + i * 100 + i}`).innerText.length == 0) {
                        document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = 'green'
                    }
                    else if (document.getElementById(`b${a + i * 100 + i}`) && document.getElementById(`b${a + i * 100 + i}`).innerText.length !== 0) {
                        document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = 'green'
                        break
                    }
                }
                for (let i = 1; i < 9; i++) {
                    if (document.getElementById(`b${a - i * 100 + i}`) && document.getElementById(`b${a - i * 100 + i}`).innerText.length == 0) {
                        document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = 'green'
                    }
                    else if (document.getElementById(`b${a - i * 100 + i}`) && document.getElementById(`b${a - i * 100 + i}`).innerText.length !== 0) {
                        document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = 'green'
                        break
                    }
                }
                for (let i = 1; i < 9; i++) {
                    if (document.getElementById(`b${a + i * 100 - i}`) && document.getElementById(`b${a + i * 100 - i}`).innerText.length == 0) {
                        document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = 'green'
                    }
                    else if (document.getElementById(`b${a + i * 100 - i}`) && document.getElementById(`b${a + i * 100 - i}`).innerText.length !== 0) {
                        document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = 'green'
                        break
                    }

                }
                for (let i = 1; i < 9; i++) {
                    if (document.getElementById(`b${a - i * 100 - i}`) && document.getElementById(`b${a - i * 100 - i}`).innerText.length == 0) {
                        document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = 'green'
                    }
                    else if (document.getElementById(`b${a - i * 100 - i}`) && document.getElementById(`b${a - i * 100 - i}`).innerText.length !== 0) {
                        document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = 'green'
                        break
                    }
                }
                item.style.backgroundColor = 'cadetblue'
                reddish()
            }



            // QUEEN

            if (item.innerText == `${toggle}queen`) {
                checkchecks()
                for (let i = 1; i < 9; i++) {

                    if (document.getElementById(`b${a + i * 100}`) && document.getElementById(`b${a + i * 100}`).innerText == 0) {
                        document.getElementById(`b${a + i * 100}`).style.backgroundColor = 'green'
                    }
                    else if (document.getElementById(`b${a + i * 100}`) && document.getElementById(`b${a + i * 100}`).innerText !== 0) {
                        document.getElementById(`b${a + i * 100}`).style.backgroundColor = 'green'
                        break
                    }
                }
                for (let i = 1; i < 9; i++) {

                    if (document.getElementById(`b${a - i * 100}`) && document.getElementById(`b${a - i * 100}`).innerText == 0) {
                        document.getElementById(`b${a - i * 100}`).style.backgroundColor = 'green'
                    }
                    else if (document.getElementById(`b${a - i * 100}`) && document.getElementById(`b${a - i * 100}`).innerText !== 0) {
                        document.getElementById(`b${a - i * 100}`).style.backgroundColor = 'green'
                        break
                    }
                }
                for (let i = 1; i < 9; i++) {

                    if (document.getElementById(`b${a + i}`) && document.getElementById(`b${a + i}`).innerText == 0) {
                        document.getElementById(`b${a + i}`).style.backgroundColor = 'green'
                    }
                    else if (document.getElementById(`b${a + i}`) && document.getElementById(`b${a + i}`).innerText !== 0) {
                        document.getElementById(`b${a + i}`).style.backgroundColor = 'green'
                        break
                    }
                }
                for (let i = 1; i < 9; i++) {

                    if (document.getElementById(`b${a - i}`) && document.getElementById(`b${a - i}`).innerText == 0) {
                        document.getElementById(`b${a - i}`).style.backgroundColor = 'green'
                    }
                    else if (document.getElementById(`b${a - i}`) && document.getElementById(`b${a - i}`).innerText !== 0) {
                        document.getElementById(`b${a - i}`).style.backgroundColor = 'green'
                        break
                    }
                }
                for (let i = 1; i < 9; i++) {
                    if (document.getElementById(`b${a + i * 100 + i}`) && document.getElementById(`b${a + i * 100 + i}`).innerText.length == 0) {
                        document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = 'green'
                    }
                    else if (document.getElementById(`b${a + i * 100 + i}`) && document.getElementById(`b${a + i * 100 + i}`).innerText.length !== 0) {
                        document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = 'green'
                        break
                    }
                }
                for (let i = 1; i < 9; i++) {
                    if (document.getElementById(`b${a - i * 100 + i}`) && document.getElementById(`b${a - i * 100 + i}`).innerText.length == 0) {
                        document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = 'green'
                    }
                    else if (document.getElementById(`b${a - i * 100 + i}`) && document.getElementById(`b${a - i * 100 + i}`).innerText.length !== 0) {
                        document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = 'green'
                        break
                    }
                }
                for (let i = 1; i < 9; i++) {
                    if (document.getElementById(`b${a + i * 100 - i}`) && document.getElementById(`b${a + i * 100 - i}`).innerText.length == 0) {
                        document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = 'green'
                    }
                    else if (document.getElementById(`b${a + i * 100 - i}`) && document.getElementById(`b${a + i * 100 - i}`).innerText.length !== 0) {
                        document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = 'green'
                        break
                    }

                }
                for (let i = 1; i < 9; i++) {
                    if (document.getElementById(`b${a - i * 100 - i}`) && document.getElementById(`b${a - i * 100 - i}`).innerText.length == 0) {
                        document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = 'green'
                    }
                    else if (document.getElementById(`b${a - i * 100 - i}`) && document.getElementById(`b${a - i * 100 - i}`).innerText.length !== 0) {
                        document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = 'green'
                        break
                    }
                }
                item.style.backgroundColor = 'cadetblue'
                reddish()

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
                reddish()


            }

            // CASTLING
            if (item.innerText == `${toggle}king`)
            {
                // SHORT CASTLE
                if(item.id == 'b105' || item.id == 'b805'){
                    if (document.getElementById(`b${current+1}`).innerText == '' && document.getElementById(`b${current+2}`).innerText == '') {
                        if (document.getElementById(`b${current+3}`).innerText == `${toggle}rook` && item.style.backgroundColor !== "red") {
                            document.getElementById(`b${current+2}`).style.backgroundColor = 'yellow';
                            reddish()
                        }
                    }
                    // LONG CASTLE
                    if ( document.getElementById(`b${current-1}`).innerText == '' && document.getElementById(`b${current-2}`).innerText == '' && document.getElementById(`b${current-3}`).innerText == ''){
                        if (document.getElementById(`b${current-4}`).innerText == `${toggle}rook` && item.style.backgroundColor !== "red") {
                            document.getElementById(`b${current-2}`).style.backgroundColor = 'yellow';
                            reddish()
                        }
                    }
                    if (document.getElementById(`b${current+2}`).style.backgroundColor == 'yellow' || document.getElementById(`b${current-2}`).style.backgroundColor == 'yellow') {
                        checkchecks()                    
                    }
                }
                item.style.backgroundColor = 'cadetblue'
            }

            // KING


            if (item.innerText == `${toggle}king`) {

                if (document.getElementById(`b${a + 1}`)) {
                    document.getElementById(`b${a + 1}`).style.backgroundColor = 'green'
                    cantgothere(`b${a + 1}`)
                }
                if (document.getElementById(`b${a - 1}`)) {
                    document.getElementById(`b${a - 1}`).style.backgroundColor = 'green'
                    cantgothere(`b${a - 1}`)
                }
                if (document.getElementById(`b${a + 100}`)) {
                    document.getElementById(`b${a + 100}`).style.backgroundColor = 'green'
                    cantgothere(`b${a + 100}`)
                }
                if (document.getElementById(`b${a - 100}`)) {
                    document.getElementById(`b${a - 100}`).style.backgroundColor = 'green'
                    cantgothere(`b${a - 100}`)
                }
                if (document.getElementById(`b${a - 100 + 1}`)) {
                    document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'green'
                    cantgothere(`b${a - 100 + 1}`)
                }
                if (document.getElementById(`b${a - 100 - 1}`)) {
                    document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'green'
                    cantgothere(`b${a -100 - 1}`)
                }
                if (document.getElementById(`b${a + 100 + 1}`)) {
                    document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = 'green'
                    cantgothere(`b${a + 100 + 1}`)
                }
                if (document.getElementById(`b${a + 100 - 1}`)) {
                    document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = 'green'
                    cantgothere(`b${a + 100 - 1}`)
                }
                item.style.backgroundColor = 'cadetblue'
                reddish()
            }
            function cantgothere(location) {
                var king = document.getElementById(`${location}`)
                var kingid = king.id
                // var king = document.getElementById(`b${a + 1}`)
                // var kingid = document.getElementById(`b${a + 1}`).id
                array = Array.from(kingid)
                array.shift()
                kingid = eval(array.join(''))
                // WHITE KING
                // Pawns
                if (item.innerText == 'Wking') 
                {
            
                    // Cant go there coz Black King
                    if (document.getElementById(`b${kingid + 1}`)) {
                        if (document.getElementById(`b${kingid + 1}`).innerText == "Bking") {
                            king.style.backgroundColor = "red"
                        }
                    }
                    if (document.getElementById(`b${kingid + 1}`) && document.getElementById(`b${kingid + 1 + 100}`)) {
                        if (document.getElementById(`b${kingid + 1 + 100}`).innerText == "Bking") {
                            king.style.backgroundColor = "red"
                        }
                    }
                    if (document.getElementById(`b${kingid + 1}`) && document.getElementById(`b${kingid + 1 - 100}`)) {
                        if (document.getElementById(`b${kingid + 1 - 100}`).innerText == "Bking") {
                            king.style.backgroundColor = "red"
                        }
                    }
                    // Pawns
                    if (document.getElementById(`b${kingid + 100 + 1}`)) 
                    {
                        if (document.getElementById(`b${kingid + 100 + 1}`).innerText == 'Bpawn') 
                        {
                            king.style.backgroundColor = 'red'
                        }
                    }
                    if (document.getElementById(`b${kingid + 100 - 1}`)) 
                    {
                        if (document.getElementById(`b${kingid + 100 - 1}`).innerText == 'Bpawn') 
                        {
                            king.style.backgroundColor = 'red'
                        }
                    }
                    // ROOK and QUEEN
                    for (let i = 1; i < 9; i++) {
                        if (document.getElementById(`b${kingid + i * 100}`) && document.getElementById(`b${kingid + i * 100}`).innerText == 0) {
                        }
                        else if (document.getElementById(`b${kingid + i * 100}`) && document.getElementById(`b${kingid + i * 100}`).innerText !== 0) {
                            if (document.getElementById(`b${kingid + i * 100}`).innerText == 'Bqueen' || document.getElementById(`b${kingid + i * 100}`).innerText == 'Brook') {   
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
                            if (document.getElementById(`b${kingid - i * 100}`).innerText == 'Bqueen' || document.getElementById(`b${kingid - i * 100}`).innerText == 'Brook') {   
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
                            if (document.getElementById(`b${kingid - i}`).innerText == 'Bqueen' || document.getElementById(`b${kingid - i}`).innerText == 'Brook') {   
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
                            if (document.getElementById(`b${kingid + i}`).innerText == 'Bqueen' || document.getElementById(`b${kingid + i}`).innerText == 'Brook') {   
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
                            if (document.getElementById(`b${kingid + i * 100 + i}`).innerText == 'Bqueen' || document.getElementById(`b${kingid + i * 100 + i}`).innerText == 'Bbishop') {   
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
                            if (document.getElementById(`b${kingid - i * 100 + i}`).innerText == 'Bqueen' || document.getElementById(`b${kingid - i * 100 + i}`).innerText == 'Bbishop') {   
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
                            if (document.getElementById(`b${kingid + i * 100 - i}`).innerText == 'Bqueen' || document.getElementById(`b${kingid + i * 100 - i}`).innerText == 'Bbishop') {   
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
                            if (document.getElementById(`b${kingid - i * 100 - i}`).innerText == 'Bqueen' || document.getElementById(`b${kingid - i * 100 - i}`).innerText == 'Bbishop') {   
                                king.style.backgroundColor = 'red'
                                break
                            }
                            else{break}
                        }
                    }
            
                    // KNIGHT
                    if (document.getElementById(`b${kingid + 100 + 2}`)) {
                        if (document.getElementById(`b${kingid + 100 + 2}`).innerText == 'Bknight') 
                        {
                            king.style.backgroundColor = 'red'
                        }
                    }
                    if (document.getElementById(`b${kingid - 100 + 2}`)) {
                        if (document.getElementById(`b${kingid - 100 + 2}`).innerText == 'Bknight') 
                        {
                            king.style.backgroundColor = 'red'
                        }
                    }
                    if (document.getElementById(`b${kingid + 200 + 1}`)) {
                        if (document.getElementById(`b${kingid + 200 + 1}`).innerText == 'Bknight') 
                        {
                            king.style.backgroundColor = 'red'
                        }
                    }
                    if (document.getElementById(`b${kingid + 200 - 1}`)) {
                        if (document.getElementById(`b${kingid + 200 - 1}`).innerText == 'Bknight') 
                        {
                            king.style.backgroundColor = 'red'
                        }
                    }
                    if (document.getElementById(`b${kingid - 2 + 100}`)) {
                        if (document.getElementById(`b${kingid - 2 + 100}`).innerText == 'Bknight') 
                        {
                            king.style.backgroundColor = 'red'
                        }
                    }
                    if (document.getElementById(`b${kingid - 2 - 100}`)) {
                        if (document.getElementById(`b${kingid - 2 - 100}`).innerText == 'Bknight') 
                        {
                            king.style.backgroundColor = 'red'
                        }
                    }
                    if (document.getElementById(`b${kingid - 200 + 1}`)) {
                        if (document.getElementById(`b${kingid - 200 + 1}`).innerText == 'Bknight') 
                        {
                            king.style.backgroundColor = 'red'
                        }
                    }
                    if (document.getElementById(`b${kingid - 200 - 1}`)) {
                        if (document.getElementById(`b${kingid - 200 - 1}`).innerText == 'Bknight') 
                        {
                            king.style.backgroundColor = 'red'
                        }
                    }
                }
                // BLACK KING
                // Pawns
                if (item.innerText == 'Bking') 
                {
                    // Cant go there coz White King
                    if (document.getElementById(`b${kingid + 1}`)) {
                        if (document.getElementById(`b${kingid + 1}`).innerText == "Wking") {
                            king.style.backgroundColor = "red"
                        }
                    }
                    if (document.getElementById(`b${kingid + 1}`) && document.getElementById(`b${kingid + 1 + 100}`)) {
                        if (document.getElementById(`b${kingid + 1 + 100}`).innerText == "Wking") {
                            king.style.backgroundColor = "red"
                        }
                    }
                    if (document.getElementById(`b${kingid + 1}`) && document.getElementById(`b${kingid + 1 - 100}`)) {
                        if (document.getElementById(`b${kingid + 1 - 100}`).innerText == "Wking") {
                            king.style.backgroundColor = "red"
                        }
                    }
                    // Pawns
                    if (document.getElementById(`b${kingid - 100 + 1}`)) 
                    {
                        if (document.getElementById(`b${kingid - 100 + 1}`).innerText == 'Wpawn') 
                        {
                            king.style.backgroundColor = 'red'
                        }
                    }
                    if (document.getElementById(`b${kingid - 100 - 1}`)) 
                    {
                        if (document.getElementById(`b${kingid - 100 - 1}`).innerText == 'Wpawn') 
                        {
                            king.style.backgroundColor = 'red'
                        }
                    }
                    // ROOK and QUEEN
                    for (let i = 1; i < 9; i++) {
                        if (document.getElementById(`b${kingid + i * 100}`) && document.getElementById(`b${kingid + i * 100}`).innerText == 0) {
                        }
                        else if (document.getElementById(`b${kingid + i * 100}`) && document.getElementById(`b${kingid + i * 100}`).innerText !== 0) {
                            if (document.getElementById(`b${kingid + i * 100}`).innerText == 'Wqueen' || document.getElementById(`b${kingid + i * 100}`).innerText == 'Wrook') {   
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
                            if (document.getElementById(`b${kingid - i * 100}`).innerText == 'Wqueen' || document.getElementById(`b${kingid - i * 100}`).innerText == 'Wrook') {   
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
                            if (document.getElementById(`b${kingid - i}`).innerText == 'Wqueen' || document.getElementById(`b${kingid - i}`).innerText == 'Wrook') {   
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
                            if (document.getElementById(`b${kingid + i}`).innerText == 'Wqueen' || document.getElementById(`b${kingid + i}`).innerText == 'Wrook') {   
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
                            if (document.getElementById(`b${kingid + i * 100 + i}`).innerText == 'Wqueen' || document.getElementById(`b${kingid + i * 100 + i}`).innerText == 'Wbishop') {   
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
                            if (document.getElementById(`b${kingid - i * 100 + i}`).innerText == 'Wqueen' || document.getElementById(`b${kingid - i * 100 + i}`).innerText == 'Wbishop') {   
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
                            if (document.getElementById(`b${kingid + i * 100 - i}`).innerText == 'Wqueen' || document.getElementById(`b${kingid + i * 100 - i}`).innerText == 'Wbishop') {   
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
                            if (document.getElementById(`b${kingid - i * 100 - i}`).innerText == 'Wqueen' || document.getElementById(`b${kingid - i * 100 - i}`).innerText == 'Wbishop') {   
                                king.style.backgroundColor = 'red'
                                break
                            }
                            else{break}
                        }
                    }
                
                    // KNIGHT
                    if (document.getElementById(`b${kingid + 100 + 2}`)) {
                        if (document.getElementById(`b${kingid + 100 + 2}`).innerText == 'Wknight') 
                        {
                            king.style.backgroundColor = 'red'
                        }
                    }
                    if (document.getElementById(`b${kingid - 100 + 2}`)) {
                        if (document.getElementById(`b${kingid - 100 + 2}`).innerText == 'Wknight') 
                        {
                            king.style.backgroundColor = 'red'
                        }
                    }
                    if (document.getElementById(`b${kingid + 200 + 1}`)) {
                        if (document.getElementById(`b${kingid + 200 + 1}`).innerText == 'Wknight') 
                        {
                            king.style.backgroundColor = 'red'
                        }
                    }
                    if (document.getElementById(`b${kingid + 200 - 1}`)) {
                        if (document.getElementById(`b${kingid + 200 - 1}`).innerText == 'Wknight') 
                        {
                            king.style.backgroundColor = 'red'
                        }
                    }
                    if (document.getElementById(`b${kingid - 2 + 100}`)) {
                        if (document.getElementById(`b${kingid - 2 + 100}`).innerText == 'Wknight') 
                        {
                            king.style.backgroundColor = 'red'
                        }
                    }
                    if (document.getElementById(`b${kingid - 2 - 100}`)) {
                        if (document.getElementById(`b${kingid - 2 - 100}`).innerText == 'Wknight') 
                        {
                            king.style.backgroundColor = 'red'
                        }
                    }
                    if (document.getElementById(`b${kingid - 200 + 1}`)) {
                        if (document.getElementById(`b${kingid - 200 + 1}`).innerText == 'Wknight') 
                        {
                            king.style.backgroundColor = 'red'
                        }
                    }
                    if (document.getElementById(`b${kingid - 200 - 1}`)) {
                        if (document.getElementById(`b${kingid - 200 - 1}`).innerText == 'Wknight') 
                        {
                            king.style.backgroundColor = 'red'
                        }
                    }
                }
            }
        }

        
        // Toggling the turn

        if (tog % 2 !== 0) {
            // document.getElementById('tog').innerText = "White's Turn"
            whosTurn('W')
        }
        if (tog % 2 == 0) {
            // document.getElementById('tog').innerText = "Black's Turn"
            whosTurn('B')
        }

        // winning()
        numOfKings = 0
        document.querySelectorAll('.box').forEach(win => {
            if (win.innerText == 'Wking' || win.innerText == 'Bking') {
                numOfKings += 1
            }
        })
        if (numOfKings == 1) {
            setTimeout(() => {
                if (tog % 2 == 0) {
                    document.getElementById("winner-name").innerText = `${whiteName} Wins!`
                    document.getElementById("winner-screen-container").style.scale = "1"
                    clearInterval(blackinterval)
                }
                else if (tog % 2 !== 0) {
                    document.getElementById("winner-name").innerText = `${blackName} Wins!`
                    document.getElementById("winner-screen-container").style.scale = "1"
                    clearInterval(whiteinterval)
                }
            }, 1200)
        }
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
                        checkpawn()
                        insertImage()
                        coloring()
                    }
                })
            })
        }
    })
})

// CASTLING MOVEMENT
var whiteking = document.getElementById('b105')
var blackking = document.getElementById('b805')
whiteking.addEventListener('click', function(){
    //SHORT CASTLE WHITE
    if (whiteking.innerText == 'Wking' && document.getElementById('b106').innerText == '' && document.getElementById('b107').innerText=='' && whiteking.style.backgroundColor == 'cadetblue' ) {
        document.getElementById('b107').addEventListener('click', function() {
            if( document.getElementById('b107').innerText == '' && whiteking.innerText == 'Wking'){
                document.getElementById('b107').innerText = 'Wking'
                whiteking.innerText = ''
                document.getElementById('b108').innerText = ''
                document.getElementById('b106').innerText = 'Wrook'
                coloring()
                insertImage()
            }
        })
    }
    //LONG CASTLE WHITE
    if (whiteking.innerText == 'Wking' && document.getElementById('b103').innerText == '' && document.getElementById('b104').innerText == '' && document.getElementById('b102').innerText=='' && whiteking.style.backgroundColor == 'cadetblue' ) {
        document.getElementById('b103').addEventListener('click', function() {
            if( document.getElementById('b103').innerText == '' && whiteking.innerText == 'Wking'){
                document.getElementById('b103').innerText = 'Wking'
                whiteking.innerText = ''
                document.getElementById('b101').innerText = ''
                document.getElementById('b104').innerText = 'Wrook'
                coloring()
                insertImage()
            }
        })
    }
})
blackking.addEventListener('click', function(){
    //SHORT CASTLE BLACK
    if (blackking.innerText == 'Bking' && document.getElementById('b806').innerText == '' && document.getElementById('b807').innerText=='' && blackking.style.backgroundColor == 'cadetblue' ) {
        document.getElementById('b807').addEventListener('click', function() {
            if( document.getElementById('b807').innerText == '' && blackking.innerText == 'Bking'){
                document.getElementById('b807').innerText = 'Bking'
                blackking.innerText = ''
                document.getElementById('b808').innerText = ''
                document.getElementById('b806').innerText = 'Brook'
                coloring()
                insertImage()
            }
        })
    }
    //LONG CASTLE BLACK
    if (blackking.innerText == 'Bking' && document.getElementById('b803').innerText == '' && document.getElementById('b804').innerText == '' && document.getElementById('b802').innerText=='' && blackking.style.backgroundColor == 'cadetblue' ) {
        document.getElementById('b803').addEventListener('click', function() {
            if( document.getElementById('b803').innerText == '' && blackking.innerText == 'Bking'){
                document.getElementById('b803').innerText = 'Bking'
                blackking.innerText = ''
                document.getElementById('b801').innerText = ''
                document.getElementById('b804').innerText = 'Brook'
                coloring()
                insertImage()
            }
        })
    }
})




function checkchecks(){
    // DETECT CHECKS
    document.querySelectorAll('.box').forEach(king =>{
        var kingid = king.id
        array = Array.from(kingid)
        array.shift()
        kingid = eval(array.join(''))
        checkking('W','B')
        checkking('B','W')

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


// Prevents from selecting multiple elements
z = 0
document.querySelectorAll('.box').forEach(ee => {
    ee.addEventListener('click', function () {
        z = z + 1
        if (z % 2 == 0 && ee.style.backgroundColor !== 'green') {
            coloring()
        }
    })
})
var doflip = true;
function toggleflip(){
    if (doflip) {
        doflip = false;
        document.getElementById('flipbtn').style.backgroundColor = 'green'
        document.getElementById('flipbtn').innerHTML = 'Start'

    }
    else {
        doflip = true;
        document.getElementById('flipbtn').style.backgroundColor = 'red'
        document.getElementById('flipbtn').innerHTML = 'Stop'
    }
}

// Board auto flip
function flip() {
    if (doflip) {
        if (tog % 2 !== 0 && tog!==1) {
            board = document.getElementById('board')         
            board.style.transform = 'rotate(0deg)'
            document.querySelectorAll('.box').forEach(image => {
                image.style.transform='rotate(0deg)'
            })
        }
        if (tog % 2 == 0) {
            board = document.getElementById('board') 
            board.style.transform = 'rotate(180deg)'
            document.querySelectorAll('.box').forEach(image => {
                image.style.transform='rotate(180deg)'
            })
        }
    }

    //  Toggling turns
    if (tog % 2 !== 0) {
        clearInterval(blackinterval)
        whiteinterval = setInterval(startclockwhite,1000);
    }
    if (tog % 2 == 0) {
        clearInterval(whiteinterval)
        blackinterval = setInterval(startclockblack,1000);
    }
}
flip()
function removewinnerscreen(){
    document.getElementById("winner-screen-container").style.scale = "0"
}
function reloadd(){
    location.reload();
}
clearInterval(whiteinterval)
clearInterval(blackinterval)