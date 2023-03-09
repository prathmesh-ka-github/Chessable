function coloring() {
    const color = document.querySelectorAll('.box')
    color.forEach(color => {

        getId = color.id
        arr = Array.from(getId)
        arr.shift()
        currentid = eval(arr.join(''))
        aside = eval(arr.pop())
        aup = eval(arr.shift())
        a = aside + aup
        currentid = currentid - 100
        console.log(currentid)
        if (currentid % 2 == 0) {
            color.style.backgroundColor = '#8F9EB8'
        }
        if (currentid % 2 !== 0) {
            color.style.backgroundColor = '#C3CDDC'
        }
    })
}
coloring()