const h1 = document.querySelector('.container')

const waitContainer = ms => new Promise(resolve => setTimeout(resolve, ms))

waitContainer(1500).then(() => {
    h1.classList.add('show')
    return waitContainer(1500)
})
