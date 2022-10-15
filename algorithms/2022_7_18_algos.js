
/* 
Given an array of ints representing a line of people where the space between
indexes is 1 foot, with 0 meaning no one is there and 1 meaning someone is in
that space,
return whether or not there is at least 6 feet separating every person.
Bonus: O(n) linear time (avoid nested loops that cause re-visiting indexes).
*/

/**
 * Determines whether each occupied space in the line of people is separated by
 * 6 empty spaces.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<0|1>} queue
 * @returns {Boolean}
 */

//  create temp variable
// loop through the characters
// if "0", then add 1 to the variable
// if "1" then make the variable = 0
// ?? while variable < 6 then continue else return true
// if variable < 6 then return false
// (if the variable hits a 1, and it is less than 6, then return false, else it continues... until end and could be true.)

const queue1 = [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1];
const expected1 = false;

const queue2 = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected2 = true;

const queue3 = [1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected3 = true;

const queue4 = [];
const expected4 = true;

function socialDistancingEnforcer(queue) {

    var temp = 0
    var start = false
    for (i = 0; i < queue.length; i++) {
        // console.log(queue[i])
        if (queue[i] == 1 || start == true) {

            if (queue[i] == 0) {
                temp += 1
            }
            else if (queue[i] == 1 && start == true) {

                if (temp < 6) {
                    return false
                }

                else if (temp >= 6) {
                    temp = 0
                }
            }
            start = true
        }
    }
    return true
}

console.log(socialDistancingEnforcer(queue4))


// ROBERT's ANSWER
// function socialDistanceing(arr, spaceCounter = 0){
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i] === 1){
//             while(arr[i + 1] === 0) spaceCounter++, i++
//             if(spaceCounter < 6) return false
//         }
//     }
//     return true
// }


// *****************************************************************

/* 
  Balance Index
  Here, a balance point is ON an index, not between indices.
  Return the balance index where sums are equal on either side
  (exclude its own value).
  
  Return -1 if none exist.
  
*/

const two_nums1 = [-2, 5, 7, 0, 3];
const two_expected1 = 2;

const two_nums2 = [9, 9];
const two_expected2 = -1;

const two_num3 = [10, 2, 5, 5, 5, 1, 1]
const two_expected3 = 2;

const two_num4 = [10, 2, 5, 5, 5, 1, 1, 3]
const two_expected4 = -1;
/**
 * Finds the balance index in the given array where the sum to the left of the
 *    index is equal to the sum to the right of the index.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The balance index or -1 if there is none.
 */
function balanceIndex(nums) { 


}