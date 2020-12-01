const { name } = require('./getName');

describe('get names from objects', () => {
  it('returns spot\'s name from object', () => {
    expect(name)
      .toEqual('spot')
  });
});