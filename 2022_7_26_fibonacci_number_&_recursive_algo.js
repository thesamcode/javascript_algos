

/* 
  Return the fibonacci number at the nth position, recursively.
  
  Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
  The next number is found by adding up the two numbers before it,
  starting with 0 and 1 as the first two numbers of the sequence.
*/

const two_num1 = 0;
const two_expected1 = 0;

const two_num2 = 1;
const two_expected2 = 1;

const two_num3 = 2;
const two_expected3 = 1;

const two_num4 = 3;
const two_expected4 = 2;

const two_num5 = 4;
const two_expected5 = 3;

const two_num6 = 8;
const two_expected6 = 21;

/**
 * Recursively finds the nth number in the fibonacci sequence.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} num The position of the desired number in the fibonacci sequence.
 * @returns {number} The fibonacci number at the given position.
 */
function fibonacci(num) {
    if (num == 0) return 0;
    if (num == 1) return 1;
    // let array = [0, 1]
    // for (let i = 1; i < num; i++){
    //     let sum = array[i] + array[i-1]
    //     array.push(sum)
    // }
    return fibonacci(num-1) + fibonacci(num-2)
}

console.log(fibonacci(two_num1))
console.log(fibonacci(two_num2))
console.log(fibonacci(two_num3))
console.log(fibonacci(two_num4))
console.log(fibonacci(two_num5))
console.log(fibonacci(two_num6))


function fibonacci(num, memo = {0:0, 1:1}) {
    if (num == 0) return 0;
    if (num == 1) return 1;
    if (memo[num] !== undefined){
        return memo[num]
    }
    memo[num] = fibonacci(num-1, memo) + fibonacci(num-2, memo)
    return memo[num]
}