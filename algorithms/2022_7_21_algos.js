
/* 
  Given an int to represent how much change is needed
  calculate the fewest number of coins needed to create that change,
  using the standard US denominations
*/
/**
 * Calculates the fewest coins of the standard American denominations needed
 *    to reach the given cents amount.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} cents
 * @param {string} sick
 * @returns {Object<string, number>} - A denomination table where the keys are
 *    denomination names and the value is the amount of that denomination
 *    needed.
 */

// create obj {25, 10, 5, 1}
// create array with 4 coin values
// loop through array and divide the given coin value by the first key.
// round down if remainder. if even,  
// something with % modulus
// add values to dictionary keys as it forms remainders

// divide going from largest to smallest coin finding remainder
// first divide by 25, get remainder, and store in different variables. (if you divide 99 % 25, then it would return 24.)
// create 4 variables that each have a coin value
// create 2 more vairables: temporary for the coin count fo the coin we are working with and then temp for remaining count
// going through each variable and dividing by each coin value.
// at the end no need ot divide by one because you would technically have the remainder value for that


const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 50;
const expected2 = { quarter: 2 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 };


function fewestCoinChange(cents) {
    var dict = {}

    // const is immutable so you use it for something not changing
    const quarter = 25
    const dime = 10
    const nickel = 5

    var activecoin = 0
    var remval = (cents)

    // while(remval>0){
        if (remval >= quarter){
            // math floor allows you to round down and keep the number whole int
            activecoin = Math.floor(remval/quarter);
            remval = remval % quarter;
            dict.quarter = activecoin
        }
        if (remval >= dime){
            activecoin =  Math.floor(remval/dime);
            remval = remval % dime;
            dict.dime = activecoin
        }
        if (remval >= nickel){
            activecoin =  Math.floor(remval/nickel);
            remval = remval % nickel;
            dict.nickel = activecoin
            // console.log(remval)
        }
        if (remval === 0) {
            return dict
            }
            else {
            dict.penny = remval
            // console.log(remval)
            remval = 0
            }
return dict
}



// person.firstName = 'testFirstName';

console.log(fewestCoinChange(cents1)) // { quarter: 1 }
console.log(fewestCoinChange(cents2)) // { quarter: 2 }
console.log(fewestCoinChange(cents3)) // { nickel: 1, penny: 4 }
console.log(fewestCoinChange(cents4)) // { quarter: 3, dime: 2, penny: 4 }

/* 
  Missing Value
  You are given an array of length N that contains, in no particular order,
  integers from 0 to N . One integer value is missing.
  Quickly determine and return the missing value.
*/

const numsA = [3, 0, 1];
const expectedA = 2;

const numsB = [3, 0, 1, 2];
const expectedB = null;
// Explanation: nothing is missing

/* 
  Bonus: now the lowest value can now be any integer (including negatives),
  instead of always being 0. 
*/

/**
 * Determines what the missing int is in the given unordered array of ints
 *    which spans from 0 to N where only one int is missing. With this missing
 *    int, a consecutive sequence of ints could be formed from the array.
 * Bonus: Given ints can span from N to M (start and end anywhere).
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} unorderedNums
 * @returns {number|null} The missing integer needed to be able to form an unbroken
 *    consecutive set of integers from the given array or null if none is missing.
 */

const numsC = [2, -4, 0, -3, -2, 1];
const expectedC = -1;

const numsD = [5, 2, 7, 8, 4, 9, 3];
const expectedD = 6;


// const numsA = [3, 0, 1];
// const expectedA = 2;

// const numsB = [3, 0, 1, 2];
// const expectedB = null;

// 

function missingValue(unorderedNums) {
    let expected = 0;
    // what it should add up to
    let sum = 0;
    let min = unorderedNums[0];
    let max = unorderedNums[0];

    for (let num of unorderedNums){
        sum = sum + sum
        //sum += sum
        if (min>num) min = num
        if (max < num) max = num
    }
    for (let i = min; i <= max; i++){
        expected += 1;}
    if (expected == sum){
        return null
    }
    let difference = expected - sumreturn 
    return difference

}

console.log(missingValue(numsA)); // 2
console.log(missingValue(numsB)); // null
console.log(missingValue(numsC)); // -1
console.log(missingValue(numsD)); // 6