
/* 
  Given an array of strings
  return the number of times each string occurs (a frequency / hash table)
*/

const arr1 = ["a", "a", "a"];
const expected1 = {
    a: 3,
};

const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
const expected2 = {
    a: 2,
    b: 1,
    c: 3,
    B: 1,
    d: 1,
};

const arr3 = [];
const expected3 = {};

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
    for (let i = 0; i < arr.length; i++) {
        if (result.hasOwnProperty(arr[i])) {
            result[arr[i]] += 1
        }
        else {
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