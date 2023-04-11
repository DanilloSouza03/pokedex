
const pokeApi = {}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url).then((response) => response.json())

}

pokeApi.getPokemons = (offset = 0, limit = 17) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    
    return fetch(url) // requisição HTTP
        .then((response) => response.json()) // Convertendo o response para JSON
        .then((jsonBody) => jsonBody.results) // Pegando o resultado da promise
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
        .catch((error) => console.error(error)) 
}
