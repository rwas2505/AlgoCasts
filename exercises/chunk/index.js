// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//doesn't work yet, run in https://replit.com/languages/javascript
function chunk(array, size) {
  var temp = [];
  var result= [];

  for (i = 0; i < array.length; i += size){
    for (j = 0; j < size; j++){
      if (!array[i + j]){
        break;
      }
      temp.push(array[i + j]);
    }
    result.push(temp);
    temp = [];
  }
    
  return result;
}

module.exports = chunk;
