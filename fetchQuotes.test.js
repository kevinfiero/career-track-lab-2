const { fetchQuotes } = require('./fetchQuotes');
const request = require('superagent');

describe('fetchQuotes', () =>{

    it('retrieve single Futurama quote', async() =>  {

        const expected =   {
            character: expect.any(String),
            quote: expect.any(String),
            image: expect.any(String)
          }

        const result = await fetchQuotes();
        expect(result).toEqual(expected);
    });

});