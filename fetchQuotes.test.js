const { fetchQuotes } = require('./fetchQuotes');
const request = require('superagent');


describe('fetchQuotes', () =>{

    it('retrieve single Futurama quote', async() =>  {
        const expected =   {
            "character": "Bender",
            "quote": "I'm a fraud. A poor, lazy, sexy fraud.",
            "image": "https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png"
          }

        const result = await fetchQuotes();
        expect(result).toEqual(expected);
    });

});