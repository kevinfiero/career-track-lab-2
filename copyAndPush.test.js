const { copyAndPush } = require('./copyAndPush');

describe('copyAndPush function', () => {
    it('return new array with pushed item', () => {
        const expected = [1, 2, 3, 4]
        const numbers = [1, 2, 3]
        const result = copyAndPush(numbers, 4)
        expect(result).toEqual(expected)
    })
    it('original array is unchanged', () => {
        const expected = [1, 2, 3]
        const numbers = [1, 2, 3]
        copyAndPush(numbers, 4)
        expect(numbers).toEqual(expected)
    })
    
});