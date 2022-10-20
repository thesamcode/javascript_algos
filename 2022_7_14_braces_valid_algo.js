
/*****************************************************************************/

/* 
Braces Valid
Given a string sequence of parentheses, braces and brackets, determine whether it is valid. 
*/

const two_str1 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
const two_expected1 = true;

const two_str2 = "D(i{a}l[ t]o)n{e";
const two_expected2 = false;

const two_str3 = "A(1)s[O (n]0{t) 0}k";
const two_expected3 = false;

/**
 * Determines whether the string's braces, brackets, and parenthesis are valid
 * based on the order and amount of opening and closing pairs.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given strings braces are valid.
 */
function bracesValid(str) {

    var tracker = []
    const open = ['{', '(', '[']
    const close = ['}', ')', ']']
    for (var i = 0; i < str.length; i++) {
        if (tracker.length == 0 && close.includes(str[i])){
            return false
        }
        if (open.includes(str[i])){
            tracker.push(str[i])
        }
        else if (close.includes(str[i])){
            var curr = close.indexOf(str[i])
            if (tracker[tracker.length-1] == open[curr]){
                tracker.pop()
            }
            else {
                return false
            }
        }
        else {
            continue
        }
    }
    if (tracker.length == 0){
        return true
    }
    else {
        return false
    }
}

console.log(bracesValid(str))