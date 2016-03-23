/*
[1,2,3,4,5,6,7,8]
       4
 .....
   2
       
                  77            
[3,6,7,9,11,23,45,77,78,88,99,140]
 0 1 2 3 4  5  6  7  8  9  10 11
 L----------------------------H
            23
               L--------------H
                     78
               L--H
               45 
                  *
                  77

(0+12)/2 = 6
12+(12-0)/2 =6
*/

// O(logN)
function binSearchItrAnyIndexOf(sortedArr, needle) {
  let low = 0, 
      high = sortedArr.length - 1

  while(low <= high) {
    let mid = Math.floor((low + high) / 2),
        candidate = sortedArr[mid]

    if(candidate === needle) return mid
    else if(candidate < needle) low = mid + 1
    else high = mid - 1
  }
  return -1
}

// O(logN)
function binSearchRecAnyIndexOf(sortedArr, high, low, needle) {
  if(high < low) return -1

  let mid = Math.floor((low + high) / 2),
      candidate = sortedArr[mid]

  if(candidate === needle) {
    return mid
  }
  else if(candidate < needle) {
    return binSearchRecAnyIndexOf(sortedArr, high, mid + 1, needle)
  }
  else {
    return binSearchRecAnyIndexOf(sortedArr, mid - 1, low, needle)
  }
  
}