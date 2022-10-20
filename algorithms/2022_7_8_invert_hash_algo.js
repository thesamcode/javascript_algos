
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