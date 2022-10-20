
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



