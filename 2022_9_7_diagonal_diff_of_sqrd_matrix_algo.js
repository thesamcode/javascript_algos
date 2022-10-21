
// https://www.hackerrank.com/challenges/diagonal-difference/problem
/* 
  Given a square matrix (2d array) of integers
  Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/

const squareMatrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
  ];

  // while the index is 0 or greater for the main array,
  // add the front and back number from the top array to each variable
  // then it will move front / back in the index and add each number to the appropriate variable
  // then when it reaches the last array of the main array, it will subtract the numbers from each number, use math.floor? or non negative, and get absolute
  // or the absolute as a variable could be calculated row by row while going through the array rows...

  const expected1 = 2;
  /* 
    left to right diagonal: 1 + 5 + 9 = 15
    right to left diagonal: 3 + 5 + 9 = 17
    absolute difference = 2
  */
  
  const squareMatrix2 = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
  ];
  const expected2 = 0;
  /* 
    left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
    right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
    absolute difference = 0
  */
  
  /**
   * Calculates the absolute diagonal difference of a square matrix.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Array<Array<number>>} sqrMatrix A 2d array of numbers representing
   *    a square matrix (rows and columns).
   * @returns {number} Represents the absolute difference between the top left to
   *    bottom right diagonal and the top right to bottom left diagonal.
   */
  function diagonalDifference(sqrMatrix) {
    // let leftRight = sqrMatrix[0,0]
    // let rightLeft = sqrMatrix[0, sqrMatrix[0].length-1]
    // let number = Math.abs(leftRight - rightLeft)
    // let mainCount = 1
    // let lToRCount = 1
    // let rToLCount = sqrMatrix[0].length
    // while (mainCount <= sqrMatrix.length){
    //     leftRight += sqrMatrix[mainCount, lToRCount]
    //     rightLeft += sqrMatrix[mainCount, rToLCount]
    //     mainCount++
    //     lToRCount++
    //     rToLCount--
    // }
    // return number

    let leftSum = 0
    let rightSum = 0
    let columnIndex = sqrMatrix.length-1

    for (let i=0; i<sqrMatrix.length; i++){
        leftSum += sqrMatrix[i][i]
        rightSum += sqrMatrix[i][columnIndex]
        columnIndex--
    }
    return Math.abs(leftSum-rightSum)

  }

console.log(diagonalDifference(squareMatrix2))



