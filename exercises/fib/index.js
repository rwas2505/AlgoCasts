// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  let currentNum = 1;
  let currentIndex = 1;
  let targetIndex = n;
  let sequence = [0,1];

  if (n <= 1){
    return sequence[n];
  }

  for (i = 2; i <= targetIndex; i++){
    currentIndex = i;

    currentNum = currentNum + sequence[currentIndex - 2];

    sequence.push(currentNum);
  }

  return sequence[targetIndex];
}

module.exports = fib;
