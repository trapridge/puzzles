// slow
function solution(X, Y, D) {
  'use strict';
    
  let jumps = 0;
  while(true) {
    if(X >= Y) return jumps;
    X += D; jumps++;
  }
}

// 0(1)
function solution(X, Y, D) {
  'use strict';
  
  return Math.ceil((Y - X) / D);
}
