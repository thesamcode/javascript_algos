
/*
  Sum To One Digit
  Implement a function sumToOne(num)​ that,
  given a number, sums that number’s digits
  repeatedly until the sum is only one digit. Return
  that final one digit result.
  Tips:
    to access digits from a number, need to convert it .toString() to access each digit via index
    parseInt(arg) returns arg parsed as an integer, or NaN if it couldn't be converted to an int
    isNaN(arg) used to check if something is NaN
*/
/**
 * Sums the given number's digits until the number becomes one digit.
 * @param {number} num The number to sum to one digit.
 * @returns {number} One digit.
 */

const num1 = 5;
const expected1 = 5;

const num2 = 10;
const expected2 = 1;

const num3 = 25;
const expected3 = 7;

const num4 = 158324;
const expected4 = 5;


function sumToOneDigit(currentNum) {
    currentNum = Math.floor(currentNum)
    currentNum = currentNum.toString()
    while (currentNum.length > 1) {
        newNum = 0
        for (var i = 0; i < currentNum.length; i++){
            newNum += parseInt(currentNum[i])
        }
        currentNum = newNum.toString()
    }
    return currentNum
}

function sumToOneDigit(currentNum) {
    currentNum = Math.floor(currentNum)
    currentNum = currentNum.toString()
    if (currentNum.length == 1) {
        return currentNum
    }
    newNum = 0
    for (var i = 0; i < currentNum.length; i++){
            newNum += parseInt(currentNum[i])
        }
    currentNum = sumToOneDigit(newNum)
    return currentNum
}

console.log(sumToOneDigit(num1))
console.log(sumToOneDigit(num2))
console.log(sumToOneDigit(num3))
console.log(sumToOneDigit(num4))

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

