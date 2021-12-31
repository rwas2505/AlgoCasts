// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  var myGrid = [...Array(n)].map(e => Array(n));
  
  var counter = 1;
  var startRow = 0;
  var endRow = n-1;
  var startColumn = 0;
  var endColumn = n-1;

  while (startRow <= endRow && startColumn <= endColumn){
    for (i = startColumn; i <= endColumn; i++){
    myGrid[startRow][i] = counter;
    counter++;
    console.log(`Counter: ${counter}`)
    }
    startRow++;
  
    for (i = startRow; i <= endRow; i++){
      myGrid[i][endColumn] = counter;
      counter++;
    }
  
    endColumn--;
  
    for (i = endColumn; i >= startColumn; i--){
      myGrid[endRow][i] = counter;
      counter++;
    }
  
    endRow--;
  
  
    for (i = endRow; i >= startRow; i--){
      myGrid[i][startColumn] = counter;
      counter++;
    
    }
  
    startColumn++;
  }

  return myGrid;
}




module.exports = matrix;
