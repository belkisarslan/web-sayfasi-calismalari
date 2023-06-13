fetch('movies.json').then((data) => {
    return data.json()
}).then((completeData) => {
    
    let data1 = ''
    completeData.results.map(function(items){
        data1 += 
        `<div class="card" style="background-image: url('https://image.tmdb.org/t/p/original${items.poster_path}');">
        <h3>${items.title}</h3>
        <p>Vote: ${items.vote_average}</p>
        </div>
        `
    })
    document.getElementById('container').innerHTML = data1
    const cards = document.querySelectorAll('.card')
    cards.forEach(card => {
        card.addEventListener('click', () => {
            removeActive()
            card.classList.add('active')
        })
    
    })
    
    const removeActive = () =>{
        cards.forEach(card => {
            card.classList.remove('active')
        })
    }

}).catch((err)=>{
    console.log(err)
})


