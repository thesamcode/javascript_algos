

/* 
String: Rotate String
Create a standalone function that accepts a string and an integer,
and rotates the characters in the string to the right by that given
integer amount.
*/

const str = "Hello World";

const rotateAmnt1 = 0;
const expected1 = "Hello World";

const rotateAmnt2 = 1;
const expected2 = "dHello Worl";

const rotateAmnt3 = 2;
const expected3 = "ldHello Wor";

const rotateAmnt4 = 4;
const expected4 = "orldHello W";

const rotateAmnt5 = 13; 130/11 = 11 r 9
const expected5 = "ldHello Wor";

// create temp variable
// loop backwards the index number of characters in argument
//
// include spaces
// as it loops it pushes letter to the end of the temp variable string
// Then 

function rotateStr(str, amnt) {}
temp=" "
if (amnt>=(str.length)){
    amnt = ((amnt % str.length)-str.length)
}
for (i=str.length-1; i>=0; i--);

    console.log(str[i])
    /// need ot finish





function rotateStr(str, amnt) {
    end = ""
    start = ""

    amnt = amnt % str.length

    for(let i = str.length - amnt; i < str.length; i++){
        end += str[i]
    console.log(end)
    }

    for(let j = 0; j < str.length - amnt; j++){
        start += str[j]
    console.log(start)
    }

    return str = end + start
}

console.log(rotateStr(str, rotateAmnt5))
/* 
Explanation: this is 2 more than the length so it ends up being the same
as rotating it 2 characters because after rotating every letter it gets back
to the original position.
*/

/**
 * Rotates a given string's characters to the right by the given amount,
 * wrapping characters to the beginning.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @param {number} amnt The amount of characters in the given str to rotate to the
 *    right.
 * @returns {string} The string rotated by the given amount.
 */
// function rotateStr(str, amnt) {}


/* 
  Create the function isRotation(str1,str2) that
  returns whether the second string is a rotation of the first.
*/

const two_strA1 = "ABCD";
const two_strB1 = "CDAB";
// Explanation: if you start from A in the 2nd string, the letters are in the same order, just rotated
const two_expected1 = true;

const two_strA2 = "ABCD";
const two_strB2 = "CDBA";
// Explanation: all same letters in 2nd string, but out of order
const two_expected2 = false;

const two_strA3 = "ABCD";
const two_strB3 = "BCDAB";
// Explanation: same letters in correct order but there is an extra letter.
const two_expected3 = false;

/**
 * Determines whether the second string is a rotated version of the first.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} Whether the second string is a rotated version of the 1st.
 */

// create function that takes in two strings
// loop through string 1 the length of the string
// call rotate string using the index as the amount
// check to see if it matches string 2
// if it matches string 2 then return true
//return false
function isRotation(s1, s2) {
    if(s1.length != s2.length) return false

    for (let i=0; i<s1.length; i++){
        // console.log(s1[i]);
        let output = rotateStr(s1, i+1)
        if (output === s2){
            return true
        }
    }
    return false
}

isRotation(two_strA1, two_strB1)


function isRotation(s1, s2) {
    if(s1.length != s2.length) return false
    
    return (s2 + s2).includes(s1)

}

isRotation(two_strA1, two_strB1)