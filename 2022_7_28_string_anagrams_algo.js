
/*****************************************************************************/

/* 
  String Anagrams
  Given a string,
  return array where each element is a string representing a different anagram (a different sequence of the letters in that string).
  Ok to use built in methods
*/
/**
 * Add params if needed for recursion.
 * Generates all anagrams of the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {Array<string>} All anagrams of the given str.
 */

 const two_str1 = "lim";
 const two_expected1 = ["ilm", "iml", "lim", "lmi", "mil", "mli"];
 // Order of the output array does not matter
 
 function generateAnagrams(str) {}
 
 function generateAnagrams(str, solutions = [], partial = "") {
     if (!str){
         solutions.push(partial)
     }
 
     for (let i=0; i<str.length; i++){
         let leftSlice = str.slice(0, i)
         let rightSlice = str.slice(i+1)
         generateAnagrams(leftSlice + rightSlice, solutions, partial + str[i])
     }
     return solutions
 }
 
 console.log(generateAnagrams(two_str1));