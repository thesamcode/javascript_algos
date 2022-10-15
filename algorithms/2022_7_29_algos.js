
/* 
  Recursively find the lowest common multiple between two numbers
  "A common multiple is a number that is a multiple of two or more integers. 
  The common multiples of 3 and 4 are 0, 12, 24, .... 
  The least common multiple (LCM) of two numbers is the smallest
  number (not zero) that is a multiple of both."
  
  Try writing two columns of multiples as a starting point:
  starting with 15 and 25 and keep writing their multiples until you find the
  lowest common one then turn this in to a step by step instruction
  15 25
  30 50
  45 75
  60 
  75
  75 is the first common
*/

/**
 * Add params if needed for recursion
 * Finds the lowest common multiple of the two given ints.
 * @param {number} a
 * @param {number} b
 * @returns {number} The lowest common multiple of the given ints.
 */

const num1A = 1;
const num1B = 1;
const expected1 = 1;

const num2A = 5;
const num2B = 10;
const expected2 = 10;

const num3A = 10;
const num3B = 5;
const expected3 = 10;

const num4A = 6;
const num4B = 8;
const expected4 = 24;

const num5A = 15;
const num5B = 25;
const expected5 = 75;

//sort the numbers/assign so that the smaller number will be running before ht elarge one.
//Some kind of if statement, if the sum of one side is larger than the other, add one more of th eother to itself. 
//  Otherwise add one mor eof the other side to itself. 
//After each round, always check to see if they are equal and return once they are.

//If a<b, add a to a. If that result is still less than b, add a to a. After each additoon check to see if they are equal and return.
//Else, if a>b, then add b to b, check b to see if ti is equal to a. If it is less than a, return or break back to initial a+a round. else add b to b.

function lowestCommonMultiple(a, b) {
}

// function lcm(a, b) {
//     if (a == b){
//         return a
//     }
//     if (a > b){
//         while (a>b){
//             a = a+a
//             if (a == b){
//                 return a
//             }
//         }

//         a = a+a
//         if (a == b){
//             return a
//         }
//         b = b+b
//         if (b == a){
//             return b
//         }

//     }

// if (lcm(a+a) > lcm(b+b)
// }

function lowestCommonMultiple(a, b, n = 1, multiples = {}) {
    console.log("the multiples are", a * n, b * n)
    if (a * n in multiples) {
        console.log("a*n is", a * n)
        return (a * n)
    } else if (b * n in multiples) {
        console.log("b*n is", b * n)
        return (b * n)
    } else {
        multiples[a * n] = "true"
        multiples[b * n] = "true"
        n++
        return lowestCommonMultiple(a, b, n, multiples)
    }
}

function lowestCommonMultiple(a, b) {
    let i = 1
    while(true){
        if(i % a == 0 && i % b == 0){
        return i
        }
        i++
    }
}




console.log(lowestCommonMultiple(num1A, num1B))
console.log(lowestCommonMultiple(num2A, num2B))
console.log(lowestCommonMultiple(num3A, num3B))
console.log(lowestCommonMultiple(num4A, num4B))
console.log(lowestCommonMultiple(num5A, num5B))

/*****************************************************************************/

/* 
  Binary String Expansion
  You are given a STRING containing chars "0", "1", and "?"
  For every "?" character, either "0" or "1" can be substituted.
  Write a recursive function to return array of all valid strings with "?" chars expanded to "0" or "1". 
*/

const two_str1 = "1?0?";
const two_expected1 = ["1000", "1001", "1100", "1101"];
// output list order does not matter

/**
 * Add params if needed for recursion
 * Expands a string such that each "?" in the given string will be replaced
 * with a "0" and a "1".
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str The string containing to expand.
 * @returns {Array<string>} The expanded versions of the given string.
 */
function binaryStringExpansion(str) { }