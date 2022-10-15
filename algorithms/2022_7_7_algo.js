
// SOLUTION MADHAV ASOK

// function encode(str){
//     var currLetter = str[0];
//     var currTally = 1;
//     var tally = ""
//     if (str.length == 1){
//         return str
//     }
//     for (var i =0; i< str.length; i++){
//         if (str[i+1] != undefined){
//             // console.log(currLetter, str[i+1])
//             if (str[i+1]==currLetter){
//                 currTally+=1

//             }
//             else {
//                 tally += currLetter;
//                 tally += String(currTally);
//                 currLetter = str[i+1];
//                 currTally = 1;
//                 // console.log(currLetter)
//                 // console.log(currTally)
//             }
//         }
//         else {
//             tally += currLetter
//             tally += String(currTally)
//         }

//     }

//     // console.log(tally.length)
//     // console.log(str.length)
//     if (tally.length <= str.length) {

//         return str
//     }
//     else {
//         return tally

//     }

//     }
// function decodeStr(str) {
//     var numList = ["1", "2", "3", "4", "5","6","7","8","9","0"]
//     var currLetter = str[0]
//     var currTally = ""
//     var tally = ""
    
//     for (var i=0; i <str.length; i++){

//         if (str[i+1] == undefined) {
//             currTally = parseInt(currTally)
//             tally += currLetter.repeat(currTally)
//             continue
//         }
        
//         if (numList.includes(str[i+1])) {
//             currTally += str[i+1]
//         }
//         else {
//             currTally = parseInt(currTally)
//             console.log(currLetter)
//             tally += currLetter.repeat(currTally)
//             currLetter = str[i+1]
//             currTally = ""
//         }
//     }

//     return tally

// }











/* 
Given in an alumni interview in 2021.
String Encode
You are given a string that may contain sequences of consecutive characters.
Create a function to shorten a string by including the character,
then the number of times it appears. 


If final result is not shorter (such as "bb" => "b2" ),
return the original string.
*/



/**
 * loop through each character in string
 *      if condition for if empty
 *      else if condition for if character is same as last character
 *            count total characters, need a variable to hold the numerical count/number
 * 
 *number needs to be turned into a string? Using .push to add letters/numbers one after another
 *      *use some sort indexing to catch the first letter in each group
 * final conditional to determine if provided string is <= original string
 * 

   * Encodes the given string such that duplicate characters appear once followed
   * by a number representing how many times the char occurs. Only encode strings
   * when the result yields a shorter length.
   * - Time: O(?).
   * - Space: O(?).
   * @param {string} str The string to encode.
   * @returns {string} The given string encoded.
   */

const str1 = "aaaabbcdddaa";
const expected1 = "a4b2c1d3a2";

const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a";

const str4 = "bbcc";
const expected4 = "bbcc";

// function encodeStr(str) {
//     // var newString1 = "";
//     var arr = [];
//     for (i=0; i<str.length; i++){
//         arr.push(str[i]);
//     }
//     console.log(arr);
//     var expected1 = ""
//     // var count = 0
//     for (count=0; arr[i]==arr[i+1]; count++){
//         count = count + 1

                    

//         }
//     }
// }

// console.log(encodeStr(str1))

// function encodeStr(str){
//     if (str == ""){
//         return str;
// }
//     var letter = str[0];
//     for (let i = 0; i < str.length; i++){
//         if (str[i+1] == letter){
//             console.log(letter);
//         }
//     }
// }
// console.log(encodeStr(str))

function encode(str){
    var currLetter = str[0];
    var currTally = 1;
    var tally = ""
    if (str.length == 1){
        return str
    }
    for (var i = 0; i<str.length; i++){
        if (str[i+1] != undefined){
            if(str[i+1]==currLetter){
                currTally+=1
            }
            else {
                tally += currLetter;
                tally += String(currTally);
                currLetter = str[i+1];
                currTally = 1;
            }
        }
        else {
            tally += currLetter
            tally += String(currTally)
        }
    }

    if (tally.length <= str.length){
        return str
    }
    else {
        return tally
    }
}

console.log(encode(str1));

//   ***************************************************


/* 
    String Decode  
*/

const two_str1 = "a3b2c1d3";
const two_expected1 = "aaabbcddd";

const two_str2 = "a3b2c12d10";
const two_expected2 = "aaabbccccccccccccdddddddddd";

/**
 * Decodes the given string by duplicating each character by the following int
 * amount if there is an int after the character.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str An encoded string with characters that may have an int
 *    after indicating how many times the character occurs.
 * @returns {string} The given str decoded / expanded.
 */
// function decodeStr(str) {}

function decodeStr(str) {
    let decoded = ""

    let i = 0
    while (i<str.length){
        let char = str[i++]
        let numStr = ""

        let isNumber = isNaN(parseInt(str[i])) === false

        while (i < str.length && isNumber){
            numStr += str[i++]
            isNumber = isNaN(parseInt(str[i])) === false
        }
        // decoded += char.repeat(numStr)
        decoded += myRepeat(char, numStr)
    }
    return decoded
}

function myRepeat (str, number){
    number = parseInt(number)
    let outcome = ""
    for (let i=0; i<number; i++){
        outcome += str
    }
    console.log("************")
    console.log(outcome);
    console.log("************")
    return outcome
}

console.log(decodeStr(two_str1));

// console.log(parseInt(two_str2[5]) + parseInt(two_str2[6]));

// console.log(two_str2[5] + two_str2[6]);

function test(str){
    let count = 0
    for (const char of str){
        count++
    }
    for (const char of str){
        count++
    }
    console.log(count);
}
test("tylertyler")