// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  var colCount = n * 2 - 1;
  var rowCount = n;

  for (row = 0; row < rowCount; row ++) {
    var level = '';
    for (col = 0; col < colCount; col++){
      if (col === n-1){
        level += "#";
      } else if (col <= n-1+row && col >= n-1-row){
        level += "#"
      } else {
        level += " ";
      }
    }
    console.log(level)  
  }
}

module.exports = pyramid;
