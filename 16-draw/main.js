const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const increaseBtn = document.getElementById('increase')
const decreaseBtn = document.getElementById('decrease')
const clearBtn = document.getElementById('clear')
const colorInput = document.getElementById('color')
const sizeRange = document.getElementById('size')

let size = 8
let color = 'black'
let x
let y
let isPressed = false

function drawCircle(x, y) {
  ctx.beginPath()
  ctx.arc(x, y, size, 0, Math.PI * 2)
  ctx.fillStyle = color
  ctx.fill()
}
// drawCircle(100, 200)

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.strokeStyle = color
  ctx.lineWidth = size * 2
  ctx.stroke()
}
// drawLine(300, 300, 300, 500)

canvas.addEventListener('mousedown', (e) => {
  isPressed = true
  x = e.offsetX
  y = e.offsetY

  //console.log(isPressed, x, y)
})

canvas.addEventListener('mouseup', (e) => {
  isPressed = false
  x = undefined
  y = undefined

  //console.log(isPressed, x, y)
})

canvas.addEventListener('mousemove', (e) => {
  if (isPressed) {
    const x2 = e.offsetX
    const y2 = e.offsetY

    //console.log(x2, y2)
    drawCircle(x2, y2)
    drawLine(x, y, x2, y2)

    x = x2
    y = y2
  }
})

colorInput.addEventListener('change', (e) => (color = e.target.value))

increaseBtn.addEventListener('click', () => {
  size += 2

  if (size > 64) {
    size = 64
  }

  updateSizeOnScreen()
})

function updateSizeOnScreen() {
  sizeRange.innerText = size
}

decreaseBtn.addEventListener('click', () => {
  size -= 2

  if (size < 2) {
    size = 2
  }

  updateSizeOnScreen()
})

clearBtn.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
})

 const navIcon = document.querySelector(".nav-icon")
 const ul = document.querySelector("ul")

 navIcon.addEventListener("click", ()=>{
  if(ul.classList.contains("menu")){
    ul.classList.remove("menu")
    navIcon.style.color = "blue"
  }else{
    ul.classList.add("menu")
    navIcon.style.color = "rebeccapurple"
  }
 })

 const img1 = document.querySelector(".img1")
 const img2 = document.querySelector(".img2")
 const img3 = document.querySelector(".img3")
 const img4 = document.querySelector(".img4")
 const toolbar = document.querySelector(".toolbar")

 img1.addEventListener("click", ()=>{
  canvas.classList.add("img1-back")
  canvas.classList.remove("img2-back","img3-back","img4-back")
  toolbar.classList.add("toolbar-1")
  toolbar.classList.remove("toolbar-2","toolbar-3", "toolbar-4")
 })
 img2.addEventListener("click", ()=>{
  canvas.classList.add("img2-back")
  canvas.classList.remove("img1-back","img3-back","img4-back")
  toolbar.classList.add("toolbar-2")
  toolbar.classList.remove("toolbar-1","toolbar-3", "toolbar-4")
 })
 img3.addEventListener("click", ()=>{
  canvas.classList.add("img3-back")
  canvas.classList.remove("img1-back","img2-back","img4-back")
  toolbar.classList.add("toolbar-3")
  toolbar.classList.remove("toolbar-1","toolbar-2", "toolbar-4")
 })
 img4.addEventListener("click", ()=>{
  canvas.classList.add("img4-back")
  canvas.classList.remove("img1-back","img2-back","img3-back")
  toolbar.classList.add("toolbar-4")
  toolbar.classList.remove("toolbar-1","toolbar-2", "toolbar-3")
 })