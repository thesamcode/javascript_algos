
/*****************************************************************************/


/*
  Recursive Binary Search
  Input: SORTED array of ints, int value
  Output: bool representing if value is found
  Recursively search to find if the value exists, do not loop over every element.
  Approach:
  Take the middle item and compare it to the given value.
  Based on that comparison, narrow your search to a particular section of the array
*/

const two_nums1 = [1, 3, 5, 6];
const two_searchNum1 = 4;
const two_expected1 = false;

const two_nums2 = [4, 5, 6, 8, 12];
const two_searchNum2 = 5;
const two_expected2 = true;

const two_nums3 = [3, 4, 6, 8, 12];
const two_searchNum3 = 3;
const two_expected3 = true;

/**
 * Add params if needed for recursion
 * Recursively performs a binary search (divide and conquer) to determine if
 * the given sorted nums array contains the given number to search for.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @param {number} searchNum
 * @returns {boolean} Whether the searchNum was found in the sortedNums array.
 */

function binarySearch(sortedNums, searchNum) {
    var low = 0 
    var mid = Math.floor(sortedNums.length / 2)
    var high = sortedNums.length

    if (searchNum == sortedNums[mid]) return true
    if (low == high && sortedNums[mid] != searchNum) return false

    if (searchNum < sortedNums[mid])return binarySearch(sortedNums.slice(0,mid), searchNum)
    else if (searchNum > sortedNums[mid]) return binarySearch(sortedNums.slice(mid+1,high), searchNum)
}

console.log(binarySearch(two_nums1, two_searchNum1))
console.log(binarySearch(two_nums2, two_searchNum2))
console.log(binarySearch(two_nums3, two_searchNum3))

// OR ROBERT's

function binarySearch(
    sortedNums,
    searchNum,
    leftIdx = 0,
    rightIdx = sortedNums.length - 1
) {
    if (leftIdx > rightIdx) return -1;
    const midIdx = Math.floor((rightIdx + leftIdx) / 2);
    if (sortedNums[midIdx] === searchNum) return midIdx;
    if (searchNum < sortedNums[midIdx]) return binarySearch(sortedNums, searchNum, 0, midIdx - 1);
    return binarySearch(sortedNums, searchNum, midIdx + 1, rightIdx);
}