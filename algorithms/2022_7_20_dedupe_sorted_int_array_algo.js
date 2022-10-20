
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


