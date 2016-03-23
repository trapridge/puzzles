function solution(A) {
  'use strict'

  return A.reduce((accu, curr) => {
    let index = accu.indexOf(curr)
    if(index > -1) accu.splice(index, 1)
    else accu.push(curr)
    return accu
  }, [])[0]
}

function solution2(A) {
  'use strict'

  A.sort((a, b) => a - b)
  for(let i = 0; i < A.length; i += 2) {
    if(A[i] !== A[i + 1]) return A[i]
  }
}

