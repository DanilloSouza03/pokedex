
const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;


function convertPokemonToLi(pokemon) { 
    return `
            <li class="pokemon">
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        <li class="type">grass</li>
                        <li class="type">poison</li>
                    </ol>

                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png" alt="${pokemon.name}">
                </div> 
            </li>
    `
}

const pokemonList = document.getElementById('pokemonList')

fetch(url) // requisição HTTP
    .then((response) => response.json()) // Convertendo o body para JSON
    .then((jsonBody) => jsonBody.results) // Pegando o resultado da promise
    .then((pokemons) => { //  Resultado Array com os 10 pokemons
        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            pokemonList.innerHTML += convertPokemonToLi(pokemon) // concatenando novos li
        }
    })
    .catch((error) => console.log(error))

