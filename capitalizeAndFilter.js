const capitalizeAndFilter = pokemon => {
    
    let result = pokemon.map(val => {
        return val.charAt(0).toUpperCase() + val.slice(1);
    });

    result = result.filter(val => {
        return val.charAt(0)!=='F'
    });

    return result;
}

module.exports = {
    capitalizeAndFilter
}