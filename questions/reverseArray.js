module.exports = function reverse(arr) {
  'use strict'

  let i = 0, 
      len = arr.length,
      j = len - 1,
      half = len / 2
      
  while(i < half) {
    let temp = arr[j]
    arr[j] = arr[i]
    arr[i] = temp
    i++
    j--
  }
  return arr
}
