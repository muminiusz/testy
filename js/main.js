// const arrowIcon = document.querySelector ('.fas')
// const btn = document.querySelector('.arrow')
// const img = document.querySelector('.item1')

// function showImage() {
//     img.classList.toggle("show")

//     if(img.classList.contains('show')) {
//         arrowIcon.style.rotate = "180deg"
//     } else {
//         arrowIcon.style.rotate = "0deg"
//     }
// }

// btn.addEventListener ("click", showImage)

const sizeUp = document.querySelector('.size-up')
const sizeDown = document.querySelector('.size-down')
const color = document.querySelector('.color')
const p = documenty.querySelector('p')

function changeColor() {
    p.style.color = 'gold'
}

color.addEventListener('click', changeColor)