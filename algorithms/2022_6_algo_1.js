//Data types
/*
Data types can include the following:
1. Numbers (integers and decimals (floats))-> 1, 2, 3, 99, 500. Decimals: 3.14, 3.50
2. Strings-> Characters and letters combined into one using quotes-> "Welcome to web fundamentals!?.%35634646"
3. Booleans-> true or false

semicolons should be used at the end of the lines

Data Structures



*/

var name= "sammy";
var age = 30;
var chipotlePrice = 9.75;
var isTeachingToday = true;

console.log("Wazaaaaaaa" + name);

chipotlePrice += 1;

console.log(chipotlePrice);

var halfmyage = age/2;
var twicemyage = age * 2;

console.log("half my age is", halfmyage);
console.log("twice my age is", twicemyage);



/*

pressing ctrl ? turns highlighted stuff into commentary

Datat structures are where we can put one or many data types inside of (we can group data types into one thing)

1. Array

The words in the array are called elements. This is an array of strings. That si what the elements are. 5 elements in the array.
var artists = ["Drake", "Weezy", "Weekend", "NIN", "Saint John"];
index            0          1       2         3       4  

.length works for characters in string
for loop repeats processa  number of times


*/

var artists = ["Drake", "Weezy", "Weekend", "NIN", "Saint John"];

for(var i=0; i<artists.length; i++){
    console.log(artists[i])
}

console.log(artists[i].length) 
/* it will tell you how many characters in each string including spaces*/