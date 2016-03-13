function solution(N) {
  'use strict';
  
  let candidate = N.toString(2),
      pattern = /(?=1(0+)1)\d/g,
      results = [],
      match;

  // lookahead trick to do overlapping matching
  while ((match = pattern.exec(candidate)) !== null) { 
    results.push(match[1]);
  }

  results.sort((a, b) => {
      return b.length - a.length;
  });

  return results.length > 0 ? results[0].length : 0;
}

