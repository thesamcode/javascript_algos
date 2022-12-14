/* 
  https://visualgo.net/en/sorting
    
  Selection sort works by iterating through the list, finding the minimum
  value, and moving it to the beginning of the list. Then, ignoring the first
  position, which is now sorted, iterate through the list again to find the
  next minimum value and move it to index 1. This continues until all values
  are sorted.
  Unstable sort.
  
  Time Complexity
    - Best: O(n^2) quadratic.
    - Average: O(n^2) quadratic.
    - Worst: O(n^2) quadratic.
  Space: O(1) constant.
  Selection sort is one of the slower sorts.
  - ideal for: pagination, where page 1 displays 10 records for example,
      you run selection sort for 10 iterations only to display the first 10
      sorted items.
*/

// const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
// const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts given array in-place.
 * Best: O(n^2) quadratic.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array after being sorted.
 */
// function selectionSort(nums = []) {
//     let isSorted = false
//     while(!isSorted){
//         isSorted = true
//         for (let i = nums.length - 1; i >= 0; i--) {
//             if (nums[i+1] < nums[i]){
//                 let temp = nums[i]
//                 nums[i] = nums[i + 1]
//                 nums[i + 1] = temp
//                 isSorted = false
//                 console.log(nums)
//             }
//         }
//     }
// return nums
// }

// function sleectionSort(nums = []){
//     let selectIndex = 0;
//     while (sleectIndex < nums.length){
//         let minVal = nums[selectIndex];
//         let minIndex = selectIndex;
//         for (let i = selectIndex + 1; i < nums.length; i++){
//             if (nums[i] < minVal){
//                 minVal = nums[i];
//                 minIndex = 1;
//             }
//         }
//         const temp = nums[selectIndex];
//         nums[selectIndex] = minVal;
//         nums[minIndex] = temp;
//         selectIndex++;
//     }
//     return nums
// }

// console.log(selectionSort(numsOrdered));
// console.log(selectionSort(numsRandomOrder));
// console.log(selectionSort(numsReversed));

