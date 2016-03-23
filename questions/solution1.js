function solution(arr) {
  'use strict'

  // special case 1: empty array
  if(arr.length === 0) return -1

  // special case 2: first index is equilibrium index
  if(0 === sum(arr.slice(1, arr.length))) return 0

  // special case 3: last index is equilibrium index
  if(0 === sum(arr.slice(0, arr.length - 1))) return arr.length - 1

  // general case
  let prevLowSum = null, prevHighSum = null
  for(let i = 1; i < arr.length - 1; i++) {
    let lowSum = prevLowSum !== null ? (prevLowSum + arr[i - 1]) : sum(arr.slice(0, i))
    let highSum = prevHighSum !== null ? (prevHighSum - arr[i]) : sum(arr.slice(i + 1, arr.length))

    // check for equilibrium index
    if(lowSum === highSum) {
      return i
    }
    prevLowSum = lowSum
    prevHighSum = highSum
  }

  return -1

  function sum(arr) {
    return arr.reduce(function(prev, next) {
      return prev + next
    }, 0)
  }
}
