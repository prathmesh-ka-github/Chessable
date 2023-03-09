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
            color.style.backgroundColor = '#8F9EB8'
        }
        if (a % 2 !== 0) {
            color.style.backgroundColor = '#C3CDDC'
        }
        if ( current >1000 && current<1016 || current>1204 && current<1213 || current>1404 && current<1413) {
            if (a % 2 !== 0) {
                color.style.backgroundColor = '#8F9EB8'
            }
            if (a % 2 == 0) {
                color.style.backgroundColor = '#C3CDDC'
            }
        }
        
    })
}
coloring()

// INSERTING PNGs IN THE LIs
function insertImage() {
    document.querySelectorAll('.box').forEach(image => {
        if (image.innerText.length !== 0) {
            if (image.innerText == 'Rpawn' || image.innerText == 'Bpawn' || image.innerText == 'Ypawn'|| image.innerText == 'Gpawn') {
                image.innerHTML = `${image.innerText} <img class='allimg allpawn' src="four-player-pieces/${image.innerText}.png" alt="">`
                image.style.cursor = 'pointer'

            }
            else {

                image.innerHTML = `${image.innerText} <img class='allimg' src="four-player-pieces/${image.innerText}.png" alt="">`
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




tog = 1
document.querySelectorAll('.box').forEach(item => {
    item.addEventListener('click', function(){
        
        if (item.style.backgroundColor == 'green' && item.innerText.length == 0) {
            tog = tog + 1
        }
        if (item.style.backgroundColor == 'yellow' && item.innerText.length == 0) {
            tog = tog + 1
        }
        
        else if (item.style.backgroundColor == 'green' && item.innerText.length !== 0) {
            
            document.querySelectorAll('.box').forEach(i => {
                if (i.style.backgroundColor == 'cadetblue') {
                    cadetblueId = i.id
                    cadetblueText = i.innerText
                    
                    document.getElementById(cadetblueId).innerText = ''
                    item.innerText = cadetblueText
                    coloring()
                    insertImage()
                    tog = tog + 1
                    setTimeout(flip, 800);
                    checkpawn()
                    insertImage()
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
            console.log('a = ' + a)
            console.log(item.innerText)
        // Function to display the available paths for all piece
        function whosTurn(toggle) {
            console.log('function whose turn active')
            //  PAWN
            if (item.innerText == `${toggle}pawn`) 
            {
                console.log('Red pawn selected')
                if (tog == 1 && aup > 100) {
                    // For red side
                    if (document.getElementById(`b${a - 100}`).innerText.length == 0) {
                        document.getElementById(`b${a - 100}`).style.backgroundColor = 'green'
                    }
                    if (aside < 8 && document.getElementById(`b${a - 100 + 1}`).innerText.length !== 0) {
                        document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'green'
                    }

                    if (aside > 1 && document.getElementById(`b${a - 100 + 1}`).innerText.length !== 0) {
                        document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'green'
                    }
                }
                item.style.backgroundColor = 'cadetblue'
            }

            if (item.innerText == `${toggle}knight`) {
                if (aside < 7 && aup < 800) {
                    document.getElementById(`b${a + 100 + 2}`).style.backgroundColor = 'green'
                }
                if (aside < 7 && aup > 200) {
                    document.getElementById(`b${a - 100 + 2}`).style.backgroundColor = 'green'
                }
                if (aside < 8 && aup < 700) {
                    document.getElementById(`b${a + 200 + 1}`).style.backgroundColor = 'green'
                }
                if (aside > 1 && aup < 700) {
                    document.getElementById(`b${a + 200 - 1}`).style.backgroundColor = 'green'
                }
                if (aside > 2 && aup < 800) {
                    document.getElementById(`b${a - 2 + 100}`).style.backgroundColor = 'green'
                }
                if (aside > 2 && aup > 100) {
                    document.getElementById(`b${a - 2 - 100}`).style.backgroundColor = 'green'
                }
                if (aside < 8 && aup > 200) {
                    document.getElementById(`b${a - 200 + 1}`).style.backgroundColor = 'green'
                }
                if (aside > 1 && aup > 200) {
                    document.getElementById(`b${a - 200 - 1}`).style.backgroundColor = 'green'
                }
                item.style.backgroundColor = 'cadetblue'
            }
        }


        //toggling the turn
        if (tog == 1) {
            whosTurn('R')
        }
        if (tog == 2) {
            whosTurn('B')
        }
        if (tog == 3) {
            whosTurn('Y')
        }
        if (tog == 4) {
            whosTurn('G')
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
                        checkpawn()
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















document.querySelectorAll('.box').forEach(tile=> {
    tile.addEventListener('click',function(){
        getId = tile.id
        arr = Array.from(getId)
        arr.shift()

        current = arr.join('')
        current = parseInt(arr.join(''))

        aside = eval(arr.pop())
        aup = eval(arr.shift())
        a = aside + aup

        // console.log(current)

    })
})