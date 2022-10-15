
/* 
  Given an array of strings
  return the number of times each string occurs (a frequency / hash table)
*/

const arr1 = ["a", "a", "a"];
// const expected1 = {
//   a: 3,
// };

const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
// const expected2 = {
//   a: 2,
//   b: 1,
//   c: 3,
//   B: 1,
//   d: 1,
// };

const arr3 = [];
// const expected3 = {};

/**
 * Builds a frequency table based on the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string>} arr
 * @returns {Object<string, number>} A frequency table where the keys are items
 *    from the given arr and the values are the amnt of times that item occurs.
 */
function makeFrequencyTable(arr) {
    let result = {}
    for(let i=0; i<arr.length; i++){
        if(result.hasOwnProperty(arr[i])){
            result[arr[i]] += 1
        }
        else{
            result[arr[i]] = 1
        }
    }
    return result
}

//result(arr[i]) != "undefined"

console.log(makeFrequencyTable(arr3))

/* as it cycles through array, check to see if there is a dictionary entry for the letter, if the letter does not have a dictionary key yet,
// then create on and add one to the value.

object.hasOwnProperty(propertyName)

// *************************************************************************

/* 
Given a non-empty array of odd length containing ints where every int but one
has a matching pair (another int that is the same)
return the only int that has no matching pair.
*/

const two_nums1 = [1];
const two_expected1 = 1;

const two_nums2 = [5, 4, 5];
const two_expected2 = 4;

const two_nums3 = [5, 4, 3, 4, 3, 4, 5];
const two_expected3 = 4; // there is a pair of 4s but one 4 has no pair.

const two_nums4 = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2];
const two_expected4 = 1;

function oddOccurrencesInArray(nums) {
    let table ={}
    for(let i=0; i<nums.length; i++){
        if(result.hasOwnProperty(arr[i])){
            result[arr[i]] += 1
        }
        else{
            result[arr[i]] = 1

        }
    }
}
// there is probably a % == 0
// 

oddOccurrencesInArray(nums)



function oddOccurrencesInArray(nums) {
    let freq = 0
    // let countA = 0
    // let countB = 0
    for(let i=0; i<nums.length; i++){
        // try to avoid double for loops... Can usually find a way to avoid
        for(let j=0; j<nums.length; j++){
            // if you have a single line if statement, you can collapse it 
            // to one line by removing {} and just set it next to the statement
            // if(nums[i] === nums[j]) freq++
            if(nums[i] === nums[j]) {freq++}
            // countB++
        }
        // countA++
        if (freq % 2 == 1) 
            // console.log('count a: ${countA} || count b: ${countB}');
            return nums[i]
    }
    
}

print(oddOccurrencesInArray(two_nums))


//  TYLER's SOLUTIONS

// function makeFrequencyTable(arr = []) {
//     const freqTable = {};
  
//     for (let i = 0; i < arr.length; i++) {
//       const str = arr[i];
  
//       if (freqTable.hasOwnProperty(str) === false) {
//         // first occurrence found
//         freqTable[str] = 1;
//       } else {
//         freqTable[str]++;
//       }
//     }
//     return freqTable;
//   }


//   function oddOccurrencesInArray(nums = []) {
//     const freqTable = {};
  
//     for (const n of nums) {
//       if (freqTable.hasOwnProperty(n)) {
//         freqTable[n]++;
//       } else {
//         freqTable[n] = 1;
//       }
//     }
  
//     for (const key in freqTable) {
//       if (freqTable[key] % 2 !== 0) {
//         return +key; // + converts the string key back to int.
//       }
//     }



// function oddOccurrencesInArray(nums = []){
//     const freqTable = makeFreqTable(nums)

//     for (const key in freqTable) {
//         if (freqTable[key] % 2 !==0) {
//             return +key
//         }
//     }
// }
