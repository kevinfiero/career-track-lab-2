const capitalizeAndFilter = pokemon => {
    const length = pokemon.length;
    let i = length-1;
    console.log(length);
    for(i; i>=0; i--){
        pokemon[i] = pokemon[i].charAt(0).toUpperCase() + pokemon[i].slice(1);
        if(pokemon[i].charAt(0)==='F'){
            pokemon.splice(i, 1)
        }
    }
    return pokemon;
}

module.exports = {
    capitalizeAndFilter
}