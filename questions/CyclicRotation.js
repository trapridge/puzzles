function solution(A, K) {
  'use strict'
    
  // return non-rotateable array right away
  if(A.length < 2) return A
    
  // rotate
  for(let i = 0; i < K; i++) A.unshift(A.pop())
    
  return A
}
