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

document.querySelectorAll('.box').forEach(item=> {
    item.addEventListener('click',function(){
        getId = item.id
        arr = Array.from(getId)
        arr.shift()

        current = arr.join('')
        current = parseInt(arr.join(''))

        aside = eval(arr.pop())
        aup = eval(arr.shift())
        a = aside + aup
        console.log(current)
    })
})