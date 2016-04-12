module.exports = function rotate2dMatrixBy90degreesClockwise(matrix) {
  'use strict'

  let res = new Array(matrix[0].length)
  for(let i = 0; i < res.length; i++) {
    res[i] = new Array(matrix.length)
  }
  
  let tR = 0, tC = matrix.length - 1
  for(let sR = 0; sR < matrix.length; sR++) {
    for(let sC = 0; sC < matrix[sR].length; sC++) {
      res[tR++][tC] = matrix[sR][sC]
    }
    tR = 0
    tC--
  }
  
  return res
}
