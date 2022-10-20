
/* 
  Given an array of integers
  return the first integer from the array that is not repeated anywhere else
  If there are multiple non-repeated integers in the array,
  the "first" one will be the one with the lowest index.
*/

/**
 * Finds the first int from the given array that has no duplicates. I.e., the
 *    item at the lowest index that doesn't appear again in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number|null} The first int value from the given array that has no
 *    dupes or null if there is none.
 */

// create a temp number variable
// loop through the array
// assign the number at the index to the temp variable
// loop through the array and
//      if a number in the array matches the temp variable, go back to the main loop, and assign next index to the temp variable
// ... else if the temp variable does not match a number in the array, then return the temp variable

// function firstNonRepeated(nums) {
//     let temp = []
//     for (i=0; i<nums.length; i++){
//         temp.push(nums[i])
//         if (nums[i] == nums

//     }
// }

const numsA = [3, 5, 4, 3, 4, 6, 5];
const expectedA = 6;

const numsB = [3, 5, 5];
const expectedB = 3;

const numsC = [3, 3, 5];
const expectedC = 5;

const numsD = [5];
const expectedD = 5;

const numsE = [];
const expectedE = null;

const numsF = [1, 4, 5, 5, 6, 6]
const expectedF = 1;


// function firstNonRepeated(nums) {
//     let temp = nums[0]
//     for (let i = 0; i < nums.length; i++) {
//         temp = nums[i]
//         for (let j = 0; j < nums.length; j++) {
//             console.log(temp, nums[j]);
//             if (temp == nums[j]) {
//                 break
//             }
//             if (j == nums.length) {
//                 return temp
//             }
//         }
//     }
// }

function firstNonRepeated(arr){
    let obj = {}
    for(let i = 0; i<arr.length; i++){
        if(!obj[arr[i]]) obj[arr[i]] = 1
        else obj[arr[i]]++
    }
    for(let i = 0; i<arr.length; i++){
        if(obj[arr[i]] === 1) return arr[i]
    }
    return null
}


console.log(firstNonRepeated(numsA)); // 6
console.log(firstNonRepeated(numsB)); // 3
console.log(firstNonRepeated(numsC)); // 5
console.log(firstNonRepeated(numsD)); // 5
console.log(firstNonRepeated(numsE)); // null
console.log(firstNonRepeated(numsF)); // 1