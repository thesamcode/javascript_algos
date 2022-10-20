


/* 
Zip Arrays into Map


Given two arrays, create an associative array (aka hash map, an obj / dictionary) containing keys from the first array, and values from the second.
Associative arrays are sometimes called maps because a key (string) maps to a value 
 */

const keys1 = ["abc", 3, "yo"];
const vals1 = [42, "wassup", true];
// const expected1 = {
//     yo: true,   
//     abc: 42,
//     3: "wassup",
// };

const keys2 = [];
const vals2 = [];
// const expected2 = {};

const keys3 = ["abc", 3, "yo"];
const vals3 = [42, "wassup", true, "something"];

// const expected3 = False

const keys4 = ["abc", 3, "yo", "something"];
const vals4 = [42, "wassup", true];
// const expected4 = {
//     yo: true,   
//     abc: 42,
//     3: "wassup",
//     something: ""
// };

// function zipArraysIntoMap(keys, values) {
//     var expected1 = {}
//     for(var i = 0; i<values.length; i++){
//         expected1.push["keys[i]"]



// }

function zipArraysIntoMap(keys, values) {
    let result = {}
    if(keys.length < values.length){
        return False
    }
    else{
        for(let i=0; i<keys.length; i++){
            // result = Object.assign(keys1[i] + values[i])
            if (values[i] == undefined){
            result [keys[i]] = ""
            continue
            }
            result [keys[i]] = values[i]
        }
        return result
    }
}

console.log(zipArraysIntoMap(keys1,vals1))


// function zipArraysIntoMap(keys, values) {
//     let output = {}
//     let i = 0
//     let j = 0
//     while (i<keys.length){
//         output = keys[i].values[i]
//         console.log(keys[i])
//         i++
//         while (j<values.length){
//             console.log(values[j])
//             j++
//             // continue
//         }
//     }
// }

// console.log(zipArraysIntoMap(keys1, vals1))

/**
 * create values
 * loop through first index
 * loop through second index and assign valjues based on name locations of first index
 * 2 for loops in function within each other?
 * Loop going through 
 * 
 * objectName["propertyName"] or objectName.propertyName
 * person.lastName; or person["lastName"];
 * const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}; (DEFINING IT)
 * 
 * 
 * 
 * 
 * 
 * 
   * Converts the given arrays of keys and values into an object.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Array<string>} keys
   * @param {Array<any>} values
   * @returns {Object} The object with the given keys and values.
   */
