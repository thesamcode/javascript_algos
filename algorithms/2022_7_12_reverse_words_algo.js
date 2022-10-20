

/* 
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/

const str1 = "hello";
const expected1 = "olleh";

const str2 = "hello world";
const expected2 = "olleh dlrow";

const str3 = "abc def ghi";
const expected3 = "cba fed ihg";

/**
 * Reverses the letters in each words in the given space separated
 * string of words. Does NOT reverse the order of the words themselves.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str Contains space separated words.
 * @returns {string} The given string with each word's letters reversed.
 */
// function reverseWords(str) {
//     newStr = str.split(" ");
//     let result = "";
//     let newResult = "";
    
//     for(var i = str.length-1; i>=0; i--){
//         result += newstr[i]

// function reverseString(str) {
//     var newString = "";
//     for (var i=str.length-1; i>=0; i--){
//         if (str[i] != ' '){
//             newString += str[i];
//         }
//         else
//     }
//     return newString;
// }



// }

// OLGAS SOLUTION FOR FIRST ONE

function reverseWords(str) {    
  var new_arr = str.split(" ")    
  var result = []    
  for (let i = 0; i < new_arr.length; i++){        
    result[i] = new_arr[i].split('').reverse().join('')            
  }    result.join(' ')    
  return result    }
  



