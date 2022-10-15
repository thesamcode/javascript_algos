


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










// [8:15 AM]
/* 
  Invert Hash
  A hash table / hash map is an obj / dictionary
  Given an object / dict,
  return a new object / dict that has the keys and the values swapped so that the keys become the values and the values become the keys



  // /**
//  * Inverts the given object's key value pairs so that the original values
//  * become the keys and the original keys become the values.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {Object<string, any>} obj
//  * @return The given object with key value pairs inverted.
//  * function invertObj(obj)
*/

const two_obj1 = { name: "Zaphod", charm: "high", morals: "dicey" };
const two_expected1 = { Zaphod: "name", high: "charm", dicey: "morals" };

const two_obj2 = { name: "Zaphod", charm: "high", morals: "dicey", something:1 };
const two_expected2 = { Zaphod: "name", high: "charm", dicey: "morals", 1:"something" };

const two_obj3 = { name: "Zaphod", charm: "high", morals: "dicey", something:"dicey" };
const two_expected3 = { Zaphod: "name", high: "charm", dicey: ["morals", "something"] };


function invertedHash(obj){
    oldKeys = Object.keys(obj)
    oldVals = Object.values(obj)
    answer = {}
    for (var i=0; i<oldVals.length; i++){
        // searching that is also searching properties we may not be aware of
        if (answer[oldVals[i]]!= undefined){
            if (Array.isArray(answer[oldVals[i]])){
                answer[oldVals[i]].push(oldKeys[i])
                continue
            }
            var repeat = []
            repeat.push(answer[oldVals[i]])
            repeat.push(oldKeys[i])
            answer[oldVals[i]] = repeat
            continue
        }
        answer[oldVals[i]] = oldKeys[i]
    }
    return answer
}

console.log(invertedHash(two_obj1))