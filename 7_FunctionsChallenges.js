// Week 2 - Functions

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js or using Replit.com 
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a function called prependToString, which accepts two strings.
// The function should return a new string with the second string prepended to the first string.
// Examples:
// prependToString('awesome', 'very') // --> 'veryawesome'
// prependToString('world', 'hello ') // --> 'hello world'
// prependToString('nothing', '') // --> 'nothing'
function prependToString (string1, string2) {
    //concatenate string2 to string1
    let prepended = string2 + string1;
    return prepended;
}

// Exercise 2. Write a function called stringIncludes, which accepts two strings: the first string is a word and the second 
// string is a single character.
// The function should return true if the first string includes the character, otherwise it should return false.
// IMPORTANT: Do not use the built in string.includes() function!
// Examples:
// stringIncludes('awesome', 'e'); // --> true
// stringIncludes('awesome', 'z'); // --> false
function stringIncludes (string1, string2) {
    for(let i = 0; i < string1.length; i++) {
        //if string2 found, return true
        if(string1[i] === string2) {
            return true;
        }
    }
    //if we make it to this point, we know the character is not in the string
    return false;
}

// Exercise 3. Write a function called stringLastIndexOf, which accepts two strings: 
// the first is a word and the second is a single character.
// The function should return the last index at which the character exists or -1 if the character is not found.
// IMPORTANT: Do not use the built in "string".lastIndexOf() function!
// Examples:
// stringLastIndexOf('awesome', 'e'); // --> 6
// stringLastIndexOf('awesome', 'z'); // --> -1
function stringLastIndexOf (string1, string2) {
    //keeps track of the last index string2 was seen
    let lastIndexOf = -1;
    for(let i = 0; i < string1.length; i++) {
        //if string2 found, update lastIndexOf
        if(string1[i] === string2) {
            lastIndexOf = i;
        }
    }
    return lastIndexOf;
}

// Exercise 4. Write a function called removeFromString, which accepts a string, a starting index (number) 
// and a number of characters to remove.
// The function should return a new string with the characters removed.
// Examples:
// removeFromString('Elie', 2, 2) // --> 'El'
// removeFromString('Elie', 0, 1) // --> 'lie'
// removeFromString('Hello School', 0, 6) // --> 'School'
// removeFromString('Hello School', 2, 4) // --> 'HeSchool'
// removeFromString('Hello School', 6, 400) // --> 'Hello '
function removeFromString(string, startIndex, numCharsToRemove) {
    // holds new string
    let newString = "";
    for(let i = 0; i < string.length; i++) {
        //if i is not in range of start index and characters to remove, concat to newString
        if(i < startIndex || i >= startIndex + numCharsToRemove) {
            newString += string[i];
        } 
    }
    return newString;
}

// Exercise 5. Write a function called indexOf, which accepts an array and a number.
// The function should return the first index at which the value exists or -1 if the value is not found.
// IMPORTANT: Do not use the built in array.indexOf() function!
// Examples:
// let arr = [5, 10, 15, 20];
// indexOf(arr, 20); // --> 3
// let arr2 = [1, 2, 3, 4, 5];
// indexOf(arr2, 2); // --> 1
// let arr3 = [1, 2];
// indexOf(arr3, 10); // --> -1
function indexOf(arr, num) {
    // keep track of the first index num was found 
    let index = -1;
    for(let i = 0; i < arr.length; i++) {
        //if num found, update index
        if(arr[i] === num) {
            index = i;
        }
    }
    return index;
}

// Exercise 6. Write a function called includes which accepts a collection, a value, and an optional starting index. 
// The function should return true if the value exists in the collection when we search starting from the starting index. 
// Otherwise, it should return false.
// The collection can be a string, an array, or an object. 
// If the collection is a string or array, the third parameter is a starting index for where to search from. 
// If the collection is an object, the function searches for the value among values in the object; 
// since objects have no sort order, 
// the third parameter is ignored.
// Examples:
// includes([1, 2, 3], 1) // --> true
// includes([1, 2, 3], 1, 2) // --> false
// includes([1, 2, 3], 6) // --> false
// includes({ 'a': 1, 'b': 2 }, 1) // --> true
// includes({ 'a': 1, 'b': 2 }, 'a') // --> false
// includes('abcd', 'b') // --> true
// includes('abcd', 'e') // --> false
// includes('abcd', 'a', 2) // --> false
function includes(collection, val, startIndex) {
    // check to see if startIndex is undefined
    if(startIndex === undefined) startIndex = 0;
    //check type of collection
    if(collection instanceof Array || typeof collection === "string") {
        //if not an object, check if val is in the array or string
        for(let i = startIndex; i < collection.length; i++) {
            if(collection[i] === val) {
                return true;
            }
        }
    } else {
        //if object, check if val is a value in the object
        for(let key in collection) {
            if(collection[key] === val) {
                return true;
            }
        }
    }
    //if we make it to this point, we know val is not in the collection
     return false;
}
console.log(includes([1, 2, 3], 1)) // --> true
console.log(includes([1, 2, 3], 1, 2)) // --> false
console.log(includes([1, 2, 3], 6)) // --> false
console.log(includes({ 'a': 1, 'b': 2 }, 1)) // --> true
console.log(includes({ 'a': 1, 'b': 2 }, 'a')) // --> false
console.log(includes('abcd', 'b'))// --> true
console.log(includes('abcd', 'e')) // --> false
console.log(includes('abcd', 'a', 2))// --> false