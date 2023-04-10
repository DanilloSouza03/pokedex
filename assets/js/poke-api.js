
const pokeApi = {}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    return fetch(url) // requisição HTTP
        .then((response) => response.json()) // Convertendo o body para JSON
        .then((jsonBody) => jsonBody.results) // Pegando o resultado da promise
        .catch((error) => console.error(error)) 
}
