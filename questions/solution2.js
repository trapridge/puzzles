function solution(arr) {
  'use strict';

  return arr
  // track indices
  .map((value, index) => { 
    return {value, index};
  })
  // sort by value (keep order of equals)
  .sort((a, b) => {
    if(a.value === b.value) {
      return a.index - b.index;
    }
    return a.value - b.value; 
  })
  // find uniques by value
  .reduce((accu, curr) => {
    if (accu.map((e) => e.value).indexOf(curr.value) < 0) {
        accu.push(curr);
    }
    return accu;
  }, [])
  // sort by index
  .sort((a, b) => {
    return a.index - b.index;
  })
  // last item has the first covering prefix
  [arr.length - 1].index;
}
