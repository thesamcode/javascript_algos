

/* 
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/

const str1 = "hello";
const expected1 = "olleh";

const str2 = "hello world";
const expected2 = "olleh dlrow";

const str3 = "abc def ghi";
const expected3 = "cba fed ihg";

/**
 * Reverses the letters in each words in the given space separated
 * string of words. Does NOT reverse the order of the words themselves.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str Contains space separated words.
 * @returns {string} The given string with each word's letters reversed.
 */
// function reverseWords(str) {
//     newStr = str.split(" ");
//     let result = "";
//     let newResult = "";
    
//     for(var i = str.length-1; i>=0; i--){
//         result += newstr[i]

// function reverseString(str) {
//     var newString = "";
//     for (var i=str.length-1; i>=0; i--){
//         if (str[i] != ' '){
//             newString += str[i];
//         }
//         else
//     }
//     return newString;
// }



// }





// *************************************************

/* 
  Reverse Word Order
  Given a string of words (with spaces)
  return a new string with words in reverse sequence.
*/

const two_str1 = "This is a test";
const two_expected1 = "test a is This";

const two_str2 = "hello";
const two_expected2 = "hello";

const two_str3 = "   This  is a   test  ";
const two_expected3 = "test a is This";

/**
 * Reverses the order of the words but not the words themselves form the given
 * string of space separated words.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} wordsStr A string containing space separated words.
 * @returns {string} The given string with the word order reversed but the words
 *    themselves are not reversed.
 */
// function reverseWordOrder(wordsStr) {
//     if (wordsStr == false) {
//         return wordsStr;
//     }

//     let currWord = "";
//     let reverseWordOrder = "";

//     for (let i=0; i < wordsStr.length; i++) {
//         const char = wordsStr[i];
//         const isSpace = char === " ";
//         const isLastIterration = i === wordsStr.length - 1;
//         const isFirstWord = reverseWordOrder.length === 0;

//     if {isSpace === false) {
//         currWord += char;
//     }

//     if (currWord.length > 0 && (isSpace || isLastIteration)) {
//         if (isFirstWord === false) {
//             reverseWordOrder = " " + reverseWordOrder;
//         }
    
//         reverseWordOrder = currWord + reversemmcjnjn  ... ...
//     }


// }
//     }

function reverseWordOrder(wordsStr) {
    // if all spaces
    if (wordsStr == false) {
      return wordsStr;
    }
  
    let currWord = "";
    let reversedWordOrder = "";
  
    for (let i = 0; i < wordsStr.length; i++) {
      const char = wordsStr[i];

    //   variable used to make choices
      const isSpace = char === " ";
      const isLastIteration = i === wordsStr.length - 1;
      const isFirstWord = reversedWordOrder.length === 0;
  
      if (isSpace === false) {
        currWord += char;
      }
  
      if (currWord.length > 0 && (isSpace || isLastIteration)) {
        if (isFirstWord === false) {
          // Add a space to separate words with no extra space at start / end.
          reversedWordOrder = " " + reversedWordOrder;
        }
        // Prepend the word so the order is reversed.
        reversedWordOrder = currWord + reversedWordOrder;
        currWord = "";
      }
    }
    return reversedWordOrder;
  }







// JOSEPH'S SOLUTION

  def reverseWithOptions(string, input):
    tempWrd = ""
    tempSentence = ""
    for i, not_used in enumerate(string):
        if input == 1:
            j = len(string) - i - 1
        if input == 2:
            j = i
        if string[j] != " ":
            tempWrd += string[j]
            continue
        for k, not_used_either in enumerate(tempWrd):
            l = len(tempWrd) - k - 1
            tempSentence += tempWrd[l]
        tempSentence += " "
        tempWrd = ""
    for m, also_not_used_either in enumerate(tempWrd):
        n = len(tempWrd) - m - 1
        tempSentence += tempWrd[n]
    print(tempSentence)
reverseWithOptions("Hello world", 2)
reverseWithOptions("I can reverse sentences as well but probably still suck at weird edge cases", 1)




// OLGAS SOLUTION FOR FIRST ONE

function reverseWords(str) {    
  var new_arr = str.split(" ")    
  var result = []    
  for (let i = 0; i < new_arr.length; i++){        
    result[i] = new_arr[i].split('').reverse().join('')            
  }    result.join(' ')    
  return result    }
  