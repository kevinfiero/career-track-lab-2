const { capitalizeAndFilter } = require('./capitalizeAndFilter');
const pokemon = ['flareon', 'Squirtle', 'fearow', 'pikachu', 'Mew', 'zapdos', 'Feraligatr', 'furret', 'steelix', 'feebas'];

describe('capitalizeAndFilter', () =>{
    it('capitalizeAndFilter', () => {
        const result = capitalizeAndFilter(pokemon);
        const expected = ['Squirtle', 'Pikachu', 'Mew', 'Zapdos', 'Steelix'];
        expect(result).toEqual(expected);
    });
});