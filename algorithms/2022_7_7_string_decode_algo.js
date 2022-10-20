
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