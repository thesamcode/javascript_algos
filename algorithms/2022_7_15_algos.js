
/* 
  Given a string that may have extra spaces at the start and the end,
  return a new string that has the extra spaces at the start and the end trimmed (removed)
  do not remove any other spaces.
*/

const str1 = "   hello world     ";
const expected1 = "hello world";

const str2 = "   hello     world     ";
const expected2 = "hello     world";

/**
 * Trims any leading or trailing white space from the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given string with any leading or trailing white space
 *    stripped.
 */

// create a variable "" , front variable for front space count and a end variable for an end space count
//  if no space at index 0 && if no space at str.length - 1, then loop through whole string & add to variable **then return word (characters)
// if none at front, but space at end, then loop through str.length - (length of spaces on end+1) (run a loop starting at the end to figure out the # of spaces at the end.)
//  if space on front and the end,
// loop through the characters in the string front to back (if there is a space when loop[ing from the front, it is not added to the string variable) and make the stopping point the length
//        of the original string - the number of spaces from the reverse loop that is ignoring spaces.

//if we run a reverse loop, create a string that does not include the end spaces, now we have a string variable, with only spaces at the front. 
// loop through that temp string variable (if there is not space at the front), otherwise just create the string as is.


var exp = ""
var temp1 = ""
function trim(str) {
    if (str[0] != " " && str[str.length-1]!= " ") {
        return str
    }
    else if (str[0] != " " && str[str.length-1] === " ") {
        for (i=str.length-1; i>0; i--) {
            if (str[i] != " ") {
                exp += str[i];
            }
        }
        return exp
    }
    else (str[0] === " " && str[str.length-1] === " ") {
        for (i=0; i<str.length; i++) {
            if (str[i] != " ") {
                temp += str[i];
            }
        }
        for (j=temp.length-1; j>0; j--) {
            if (temp[j] != " ") {
                exp += temp[j];
            }
        }
        return exp
    }
}

function trim(str){

// const list = str.split("");
const list = str;
console.log(str[5]);
for (var i = 0; i<list.length; i++){
    if (list[i] != " "){
        var first = i;
        break;
    }
}
for (var j = list.length - 1; j > -1; j--){
    if (list[j] != " "){
        var last = j;
        break;
    }
}
}

const newString = str.slice(first, last+1);

console.log(first)
console.log(last)

return newString





// JOSEPH'S SOLUTION

// function trim(str) {
//     var start = -1
//     var finish = -1
//     var newStr = ""
//     for(var i = 0; i < str.length; i++){
//         if(str[i] != " " && start == -1){
//             start = i
//         }
//         if(str[i] != " " && start != -1){
//             finish = i
//         }
//     }
//     console.log(start, finish)
//     for(var j = start;j<=finish;j++){
//         newStr += str[j]
//     }
//     return newStr
// }

// console.log(trim(str2))




/*****************************************************************************/

/* 
  An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
  typically using all the original letters exactly once.
  Is there a quick way to determine if they aren't an anagram before spending more time?
  Given two strings
  return whether or not they are anagrams
*/

const two_strA1 = "yes";
const two_strB1 = "eys";
const two_expected1 = true;

const two_strA2 = "yes";
const two_strB2 = "eYs";
const two_expected2 = true;

const two_strA3 = "no";
const two_strB3 = "noo";
const two_expected3 = false;

const two_strA4 = "silent";
const two_strB4 = "listen";
const two_expected4 = true;

/**
 * Determines whether s1 and s2 are anagrams of each other.
 * Anagrams have all the same letters but in different orders.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} Whether s1 and s2 are anagrams.
 */



// ADITYA SOLUTION

// * pseudocode:
//  * - trim to make sure all spaces are gone, if input has any spaces
//  * - check if same length, if not return false
//  * - make everything lowercase
//  * - split string into array
//  * - sort array
//  * - join array back to string
//  * - check if strings are equal
//  * - return boolean
//  */
// function isAnagram(s1, s2) {

//     let string1 = s1.trim();
//     let string2 = s2.trim();
//     if (string1.length != string2.length){
//         return false;
//     }
//     string1 = string1.toLowerCase();
//     string2 = string2.toLowerCase();

//     let list1 = string1.split("");
//     let list2 = string2.split("");

//     list1 = list1.sort();
//     list2 = list2.sort();

//     string1 = list1.join("");
//     string2 = list2.join("");

//     if (string1 == string2){
//         return true;
//     } else {
//         return false;
//     }

// }

// TYLER'S COMPLETE SOLUTION

function isAnagram(s1, s2) {
    if (s1.length !== s2.length){
        return false
    }

    let freqObj1 = {}
    let freqObj2 = {}

    s1 = s1.toLowerCase()
    s2 = s2.toLowerCase()

    for (let i=0; i<s1.length; i++){
        if (freqObj1.hasOwnProperty(s1[i])){
            freqObj1[s1[i]]++
        } else {
            freqObj1[s1[i]] = 1
        }

        if (freqObj2.hasOwnProperty(s2[i])){
            freqObj2[s2[i]]++
        } else {
            freqObj2[s2[i]] = 1
        }
    }

    for (const char in freqObj1) {
        // compare to see if the character is in the obj
        if (!freqObj2.hasOwnProperty(char)){
            return false
        }

        // compare the number of times they shown up
        if (freqObj1[char] !== freqObj2[char]){
            return false
        }
    }
    return true
}

console.log(isAnagram(two_strA1, two_strB1));