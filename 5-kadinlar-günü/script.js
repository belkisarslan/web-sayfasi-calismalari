const boxA = document.querySelector('.boxA')
const boxB = document.querySelector('.boxB')
const boxC = document.querySelector('.boxC')
const boxD = document.querySelector('.boxD')
const circle = document.querySelector('.circle')
const h1 = document.querySelector('.h1')

const waitA = ms => new Promise(resolve => setTimeout(resolve, ms))

waitA(1000).then(() => {
    boxA.classList.add('show')
    return waitA(1000)
})

const waitB = ms => new Promise(resolve => setTimeout(resolve, ms))

waitB(2000).then(() => {
    boxB.classList.add('show')
    return waitB(2000)
})

const waitC = ms => new Promise(resolve => setTimeout(resolve, ms))

waitC(3000).then(() => {
    boxC.classList.add('show')
    return waitC(3000)
})

const waitD = ms => new Promise(resolve => setTimeout(resolve, ms))

waitD(4000).then(() => {
    boxD.classList.add('show')
    return waitD(4000)
})

const waitCircle = ms => new Promise(resolve => setTimeout(resolve, ms))

waitCircle(5000).then(() => {
    circle.classList.add('show')
    return waitA(5000)
})

const waitH1 = ms => new Promise(resolve => setTimeout(resolve, ms))

waitH1(7000).then(() => {
    h1.classList.add('show')
    return waitH1(7000)
})