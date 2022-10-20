
/* 
  Given a string that may have extra spaces at the start and the end,
  return a new string that has the extra spaces at the start and the end trimmed (removed)
  do not remove any other spaces.
*/

const str1 = "   hello world     ";
const expected1 = "hello world";

const str2 = "   hello     world     ";
const expected2 = "hello     world";

/**
 * Trims any leading or trailing white space from the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given string with any leading or trailing white space
 *    stripped.
 */

// create a variable "" , front variable for front space count and a end variable for an end space count
//  if no space at index 0 && if no space at str.length - 1, then loop through whole string & add to variable **then return word (characters)
// if none at front, but space at end, then loop through str.length - (length of spaces on end+1) (run a loop starting at the end to figure out the # of spaces at the end.)
//  if space on front and the end,
// loop through the characters in the string front to back (if there is a space when loop[ing from the front, it is not added to the string variable) and make the stopping point the length
//        of the original string - the number of spaces from the reverse loop that is ignoring spaces.

//if we run a reverse loop, create a string that does not include the end spaces, now we have a string variable, with only spaces at the front. 
// loop through that temp string variable (if there is not space at the front), otherwise just create the string as is.


var exp = ""
var temp1 = ""
function trim(str) {
    if (str[0] != " " && str[str.length-1]!= " ") {
        return str
    }
    else if (str[0] != " " && str[str.length-1] === " ") {
        for (i=str.length-1; i>0; i--) {
            if (str[i] != " ") {
                exp += str[i];
            }
        }
        return exp
    }
    else (str[0] === " " && str[str.length-1] === " ") {
        for (i=0; i<str.length; i++) {
            if (str[i] != " ") {
                temp += str[i];
            }
        }
        for (j=temp.length-1; j>0; j--) {
            if (temp[j] != " ") {
                exp += temp[j];
            }
        }
        return exp
    }
}

function trim(str){

// const list = str.split("");
const list = str;
console.log(str[5]);
for (var i = 0; i<list.length; i++){
    if (list[i] != " "){
        var first = i;
        break;
    }
}
for (var j = list.length - 1; j > -1; j--){
    if (list[j] != " "){
        var last = j;
        break;
    }
}
}

const newString = str.slice(first, last+1);

console.log(first)
console.log(last)

return newString





// JOSEPH'S SOLUTION

// function trim(str) {
//     var start = -1
//     var finish = -1
//     var newStr = ""
//     for(var i = 0; i < str.length; i++){
//         if(str[i] != " " && start == -1){
//             start = i
//         }
//         if(str[i] != " " && start != -1){
//             finish = i
//         }
//     }
//     console.log(start, finish)
//     for(var j = start;j<=finish;j++){
//         newStr += str[j]
//     }
//     return newStr
// }

// console.log(trim(str2))




