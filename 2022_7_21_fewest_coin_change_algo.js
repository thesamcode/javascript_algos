
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

