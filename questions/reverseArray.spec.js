describe('REVERSE', () => {
    'use strict'

    let reverse = require('./reverseArray.js')

    it('should reverse an array with even number of elements', () => {
        expect(reverse([1,2,3,4,5,6])).toEqual([6,5,4,3,2,1])
    })

    it('should reverse an array with odd number of elements', () => {
        expect(reverse([1,2,3,4,5,6,7])).toEqual([7,6,5,4,3,2,1])
    })
})