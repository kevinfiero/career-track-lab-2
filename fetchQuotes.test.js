const { fetchQuotes } = require('./fetchQuotes');
const { quoteData } = require('./quoteData.js')
const request = require('superagent');

jest.mock('superagent');

describe('fetchQuotes', () =>{

    it('retrieve single Futurama quote', async() =>  {
        request.get.mockResolvedValue(quoteData)
        const expected =   {
            character: expect.any(String),
            quote: expect.any(String),
            image: expect.any(String)
          }

        const result = await fetchQuotes();
        expect(result).toEqual(expected);
    });

});