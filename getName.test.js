const { getName } = require('./getName');
const spot = { name: 'spot', age: 5, weight: '20 lbs' }
const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };

describe('get names from objects', () => {
  it('returns spot\'s name from spot object', () => {
    const name = getName(spot)
    expect(name).toEqual('spot')
  });
  it('returns Aang\'s name from character object', () => {
    const name = getName(character)
    expect(name).toEqual('Aang')
  });
});