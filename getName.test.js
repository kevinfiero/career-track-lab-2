const spot = { name: 'spot', age: 5, weight: '20 lbs' }
const { getName } = require('./getName');

describe('get names from objects', () => {
  it('returns spot\'s name from spot object', () => {
    const name = getName(spot)
    expect(name)
      .toEqual('spot')
  });
});