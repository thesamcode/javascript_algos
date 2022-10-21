
/* 
Finds the container that can hold the most water based on it's area.
A container's length is the distance between indexes and the two sides are
the heights at those indexes.
See: https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg
*/

const heights1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const expected1 = 49;
// Explanation: heights1[1] and heights1[8] as container edges.
// Length = 8 - 1. Height = 7

const heights2 = [1, 1];
const expected2 = 1;

const heights3 = [4, 3, 2, 1, 4];
const expected3 = 16;

const heights4 = [1, 2, 1];
const expected4 = 2;

/**
 * Finds the container that can hold the most water based on it's area.
 * A container's length is the distance between indexes and the two sides are
 * the heights at those indexes.
 * @see https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {number[]} heights
 * @returns {number} Representing the max area of a container.
 */

// note height at index 0. Note height at index 1. Subtract index 0 from 1. Then multiply by the lower height.
// Move index 1 to 2, 3, etc. and compare/repeat until reaching the end of the index.
// as this is being done, each of those noted items is to be stored in temporary variables.
// also, when the area with one set of variables is higher than the area with another set of variables, replace them.
// finally, return the area from the final variables.
// since we only need ot return area, we don't really need to save the variables that got the area so they can be changed each time while area retains value


function containerWithMostWater(heights) {


    let currentMax = 0

    for (let i = 0; i < heights.length; i++) {
        const leftHeight = heights[i];

        for (let j = i + 1; j < heights.length; j++) {
            const rightHeight = heights[j];
            const lowerHeight = Math.min(leftHeight, rightHeight)
            const length = j - i
            const area = length * lowerHeight

            if (area > currentMax) {
                currentMax = area
            }
        }
    }
    return currentMax
}

console.log(containerWithMostWater(heights1));
console.log(containerWithMostWater(heights2));
console.log(containerWithMostWater(heights3));
console.log(containerWithMostWater(heights4));


