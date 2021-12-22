// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  var dictA = {};
var dictB = {};
  
  var sanitizedStringA = stringA.replace(/[^\w]/g, "").toLowerCase();

  var sanitizedStringB = stringB.replace(/[^\w]/g, "").toLowerCase();

   for (i=0; i < sanitizedStringA.length; i++){
    if (sanitizedStringA[i] in dictA){
      dictA[sanitizedStringA[i]] += 1
    } else{
      dictA[sanitizedStringA[i]] = 1
    }
  }

  for (i=0; i < sanitizedStringB.length; i++){
    if (sanitizedStringB[i] in dictB){
      dictB[sanitizedStringB[i]] += 1
    } else{
      dictB[sanitizedStringB[i]] = 1
    }
  }

  var lengthA = Object.keys(dictA).length;
  var lengthB = Object.keys(dictB).length;

  var validLengths = lengthA === lengthB;

  const test = {a: 1, b: 2, c: 3};
  
var result = true;
  
for (const [key, value] of Object.entries(dictA)) {

  if (dictB[key] != value){
    result = false;
  }
}

  return result && validLengths;
}

module.exports = anagrams;
