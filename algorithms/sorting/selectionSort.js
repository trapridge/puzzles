/*
 0 1 2 3 4 5 6 7 8
[4,6,2,1,5,7,8,3,9]

 1 6 2 4 5 7 8 3 9  (1)
 -     -
 1 2 6 4 5 7 8 3 9  (2)   
   - -  
 1 2 3 4 5 7 8 6 9  (3)
     -         -
 1 2 3 4 5 7 8 6 9  (4)
       -
 1 2 3 4 5 7 8 6 9  (5)
         -
 1 2 3 4 5 6 8 7 9  (6)
           -   -
 1 2 3 4 5 6 7 8 9  (7)          
             - -
*/

function selectionSort(arr, isFirstCb) {
  for(let i = 0; i < arr.length-2; i++) {
    let minIndex = i;
    for(let j = i+1; j < arr.length-1; j++) {
      // A[j] < A[minIndex]
      if(cb(A[j], A[minIndex])) {
        minIndex = j;  
      } 
    }
    if(minIndex > i) {
      let temp = A[i];
      A[i] = A[minIndex];
      A[minIndex] = temp;  
    }
    console.log(arr);
  }
}

 
               
                
               