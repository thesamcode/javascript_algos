
/* 
  Given a SORTED array of integers, dedupe the array 
  Because array elements are already in order, all duplicate values will be grouped together.
  Ok to use a new array
*/
/**
 * De-dupes the given sorted array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array deduped.
 */

const nums1 = [1, 1, 1, 1];
const expected1 = [1];

const nums2 = [1, 1, 2, 2, 3, 3];
const expected2 = [1, 2, 3];

const nums3 = [1, 1, 2, 3, 3, 4];
const expected3 = [1, 2, 3, 4];

const nums4 = [1, 1];
const expected4 = [1];

// create an array variable
// for index [0] we add it to the array variable
// loop through the nums array (i=1)
// if number at the index matches previous, then do not add to array variable, otherwise add to array variable
// some kind of "starting at" index location 1 to avoid issues with the first number

function dedupeSorted(num) {
    let arr = [num[0]]
    // console.log(arr)
    for (i = 1; i < num.length; i++) {
        if (num[i] != num[i - 1]) {
            arr.push(num[i])
            // console.log(arr)
        }
        // else return arr
    }
    return arr
}

console.log(dedupeSorted(nums1)); // [1]
console.log(dedupeSorted(nums2)); // [1, 2, 3]
console.log(dedupeSorted(nums3)); // [1, 2, 3, 4]
console.log(dedupeSorted(nums4)); // [1]

function dedupeSorted(arr){
    let dict = {}
    let output = []
    for(let i = 0; i<arr.length; i++){
        if(!dict[arr[i]]) dict[arr[i]] = 1
        else dict[arr[i]]++
    }
    console.log(dict)
    for(let key in dict) output.push(parseInt(key))
    return output
}


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