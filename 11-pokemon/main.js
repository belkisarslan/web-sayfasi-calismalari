const searchInput = document.querySelector("#poke-input")
const searchBtn = document.querySelector(".btn-search")
const pokeContainer = document.querySelector(".poke-container")
const pokeCount = 151

const colors = {
    fire: "#FDDFDF",
    grass: "#DEFDE0",
    electric: "#FCF7DE",
    water: "#DEF3FD",
    ground: "#f4e7da",
    rock: "#d5d5d4",
    fairy: "#fceaff",
    poison: "#d6b3ff",
    bug: "#f8d5a3",
    dragon: "#97b3e6",
    psychic: "#eaeda1",
    flying: "#F5F5F5",
    fighting: "#E6E0D4",
    normal: "#F5F5F5",
    ice: "#e0f5ff ",
}


const initPokemon = async() => {
    for(let i=1; i<=pokeCount; i++){
        await getPokemon(i)
    }
}

const getPokemon = async(id) => {
    let url = `https://pokeapi.co/api/v2/pokemon/${id}`
    let res = await fetch(url)
    let data = await res.json()
    createPokemonBox(data)
}

const createPokemonBox = (pokemon) => {
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
    const id = pokemon.id.toString().padStart(3,"0")
    const type = pokemon.types[0].type.name
    const color = colors[type]
    
    const pokeElement = document.createElement('div')
    pokeElement.classList.add('poke-box')
    pokeElement.style.backgroundColor = `${color}`

    pokeElement.innerHTML = `
    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png" alt="${name}">
    <h4 class="poke-name">${name}</h4>   
    <p class="poke-id">#${id}</p>  
    <p class="poke-type">Type: ${type}</p>  
    
    `
    pokeContainer.appendChild(pokeElement)
}

initPokemon()

searchInput.addEventListener("input", function(e){
    const pokeNames = document.querySelectorAll(".poke-name")
    const search = searchInput.value.toLowerCase()
    
    
    pokeNames.forEach((pokeName)=>{
      pokeName.parentElement.style.display = "block"
      
      if(!pokeName.innerHTML.toLowerCase().includes(search)){
        pokeName.parentElement.style.display = "none"
      }
    })
})