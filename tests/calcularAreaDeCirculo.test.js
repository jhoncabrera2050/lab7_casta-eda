const {calcularAreaDeCirculo} = require('../utils/for_testing')

describe('calcularAreaDeCirculo', () => {
    test('of one value is the value itself', () => {
        expect(calcularAreaDeCirculo(1)).toBe(3.141592653589793)
    })
})