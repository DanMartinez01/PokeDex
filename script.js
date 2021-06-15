
// API


async function getPokemon(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    if (response.status !== 200) {
        window.pokemon.textContent = "Pokemon not found :("
        window.tipo.textContent = ""
        window.moves.textContent = ""
        window.image.setAttribute("src", "https://www.pngkit.com/png/detail/715-7157813_wigglytuff-dream-world.png");

    }
    else {
        const data = await response.json();
        return data;
    }
    return data;

}





async function init() {//esta funcion inicializa el primero
    const pokemon = await getPokemon(132);
    updatePokemon(pokemon)
}
init()


function updatePokemon(pokemon) {
    window.search.value = "";//para limpiar la barra despues de cada ejecucion
    window.pokemon.textContent = pokemon.name;
    window.tipo.textContent = pokemon.types[0].type.name;
    window.moves.textContent = pokemon.moves[0].move.name;
    window.image.setAttribute("src", pokemon.sprites.other.dream_world.front_default); //image:id de img
}


window.search.addEventListener("change", async () => {
    window.search.value = window.search.value.toLocaleLowerCase();
    const pokemon = await getPokemon(window.search.value) //el valor ingresado se convierte en la const pokemon
    updatePokemon(pokemon)

})

