// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const arr = str.split(" ");
  var final = [];

  for (word of arr){
    word = word[0].toUpperCase() + word.slice(1);
    final.push(word);
  }

  return final.join(" ");
}

module.exports = capitalize;
