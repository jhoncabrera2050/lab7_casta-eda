const {area} = require('../utils/for_testing')

describe('area', () => {
    test('of one value is the value itself', () => {
        expect(area(5,2)).toBe(5)
    })
})