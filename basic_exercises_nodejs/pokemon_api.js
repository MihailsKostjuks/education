const loadPokemon = (pokemon_id, callback) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_id}`)
        .then(res => res.json())
        .then(data => {callback(data)})
}

loadPokemon(1, (pokemon_data) => {
    console.log(pokemon_data);
})


// the same concept but without functions:
// fetch(`https://pokeapi.co/api/v2/pokemon/2`)
//     .then(res => res.json()).then(data => console.log(data));