// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  var dict = {};

  for (i=0; i < str.length; i++){
    if (str[i] in dict){
      dict[str[i]] += 1
    } else{
      dict[str[i]] = 1
    }
  }

  let max = 0;
  let maxKey = "";

  for(let char in dict){
    if (dict[char] > max){
      max = dict[char];
      maxKey = char;
    };
  }

  return maxKey;
}

module.exports = maxChar;
