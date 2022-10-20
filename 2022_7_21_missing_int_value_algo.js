
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