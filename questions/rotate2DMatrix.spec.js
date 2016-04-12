describe('rotate2DMatrix', () => {
  'use strict'

  const rotate = require('./rotate2DMatrix.js')

  it('should rotate a non-jagged 2d array', () => {
    expect(rotate([[1, 2], [3, 4]])).toEqual([[3, 1], [4, 2]]);
    expect(rotate([[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]))
      .toEqual([[1, 1, 1], [2, 2, 2], [3, 3, 3], [4, 4, 4], [5, 5, 5]]);
  })

})
