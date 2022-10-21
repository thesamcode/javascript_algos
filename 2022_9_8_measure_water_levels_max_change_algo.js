
/**
 * From a Chipotle interview.
 * encodeStr algo was also given in this interview (aaabbcdd => a3b2cd2).
 *
 * It ain't much, but it's honest work. A worker who measures water level
 * fluctuations in a river is asked to find the largest fluctuation in water
 * levels during a day, but only for rises in water levels.
 */

 // create temp variable to store difference
 // create temp variable to store lower value
 // create temp value to store higher value
 // Loop through the index overall
 // start with the first number, subtract it from all sequential numbers
 // store the highest positive value in the temp variable
 // we then use the loop to go to the next number.
 // change the lower number to the next one in the index,
 // and run all the right numbers through the right variable, subtracting and comparing to the stored temp
 // if the difference is > what the tmep variable is holding, we switch the temp variable.

 const riverLevels1 = [15, 17, 30];
 const expected1 = 15; // 30 - 15 = 15
 
 const riverLevels2 = [15, 17, 30, 14, 5, 16, 25, 9, 3];
 const expected2 = 20; // 25 - 5 = 20

 const riverLevels3 = [15, 17, 30, 20, 50, 16, 25, 9, 3];
 const expected3 = 35; // 50 - 15 = 35
 
 const riverLevels4 = [21, 18, 10, 11, 14, 9, 5, 13, 15, 7, 1, 6, 12, 4];
 const expected4 = 11; // 12 - 1 = 11
 
 const riverLevels5 = [1, 5];
 const expected5 = 4;
 
 const riverLevels6 = [5, 1];
 const expected6 = -1;
 
 const riverLevels7 = [9, 7, 7, 7];
 const expected7 = -1;
 
 const riverLevels8 = [42];
 const expected8 = -1;

 function measureWaterLevels(waterLevels) {
    let difference = 0
    let leftLow = 10000
    for (i=0; i<waterLevels.length; i++){
        if(leftLow > waterLevels[i]){
            leftLow = waterLevels[i]
        }
        if(waterLevels[i]-leftLow > difference){
            difference = waterLevels[i]-leftLow
        }
    }
    if(difference <= 0){
        difference = -1
    }
    return difference
 }
 
console.log(measureWaterLevels(riverLevels1))
console.log(measureWaterLevels(riverLevels2))
console.log(measureWaterLevels(riverLevels3))
console.log(measureWaterLevels(riverLevels4))
console.log(measureWaterLevels(riverLevels5))
console.log(measureWaterLevels(riverLevels6))
console.log(measureWaterLevels(riverLevels7))
console.log(measureWaterLevels(riverLevels8))

//OTHER SOLUTION

// function measureWaterLevels(waterLevels) {
//     let result = 0
//     let min = waterLevels[0]
//     let current = 0
//     for(let i=1; i<waterLevels.length; i++){
//         if(min < waterLevels[i]){
//             current = waterLevels[i]-min
//         }
//         if(current > result) result = current
//         if(waterLevels[i]<min){
//             current = 0
//             min = waterLevels[i]
//         }
//     }
//     return result === 0 ? -1 : result
// }


 /**
  * It ain't much, but it's honest work. A worker who measures water level
  * fluctuations in a river is asked to find the largest fluctuation in water
  * levels during a day, but only for rises in water levels.
  * - Time: O(?).
  * - Space: O(?).
  * @param {Array<number>} waterLevels Non-empty .
  * @returns {number} The max water-level rise amount or -1 if none.
  */
//  function measureWaterLevels(waterLevels) {}