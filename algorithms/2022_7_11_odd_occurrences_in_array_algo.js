
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