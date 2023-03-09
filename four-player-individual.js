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