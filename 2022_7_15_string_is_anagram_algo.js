
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