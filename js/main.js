const btnPlus = document.querySelector('.sizeUp')
const btnMinus = document.querySelector('.sizeDown')
const btnColor = document.querySelector('.color')
const text = document.querySelector('p')

let sizeText = 36


const bigger = () => {
    sizeText += 5
    text.style.fontSize = sizeText + 'px'

}

const smaller = () => {
    if(sizeText <=21) return
    sizeText -= 5
    text.style.fontSize = sizeText + 'px'
}

const changeColor = () => {
   const r = Math.floor(Math.random() * 255)
   const g = Math.floor(Math.random() * 255)
   const b = Math.floor(Math.random() * 255)

   text.style.color = `rgb(${r}, ${g}, ${b})`
}


btnPlus.addEventListener('click', bigger)
btnMinus.addEventListener('click', smaller)
btnColor.addEventListener('click', changeColor)