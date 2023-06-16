fetch('https://jsonplaceholder.typicode.com/photos').then((data) => {
    return data.json()
}).then((completeData) => {
    
    let data1 = ''
    completeData.map(function(item){
        data1 += 
        `<div class="box" style="background-image: url('${item.url}');">
        <h3>${item.title}</h3>
        </div>
        `
    })
    document.getElementById('container').innerHTML = data1
    checkBoxes()
})

window.addEventListener('scroll', checkBoxes)

function checkBoxes() {
const boxes = document.querySelectorAll('.box')
const triggerBottom = (window.innerHeight / 6) * 4
//console.log((window.innerHeight / 6) * 4)

boxes.forEach((box) => {
const boxTop = box.getBoundingClientRect().top

if (boxTop < triggerBottom) {
  box.classList.add('show')
} else {
  box.classList.remove('show')
}
})
}


