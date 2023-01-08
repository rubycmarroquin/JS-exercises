// Week 3 - Objects

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js or using Replit.com 
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a function called keys, which accepts an object and returns an array of all of the keys in the object.
// IMPORTANT: Do not use the built in Object.keys() function!
// Examples:
// let obj = { a: 1, b: 2, c: 3 };
// keys(obj); // ["a", "b", "c"]
// let obj2 = { first: 'Matt', last: 'Lane' };
// keys(obj2); // ["first", "last"]
// let obj3 = {};
// keys(obj3); // []
function keys(obj) {
    // arr that will hold keys from obj
    const arr = [];
    // loop through obj keys 
    for(let key in obj) {
        // add key to arr 
        arr.push(key);
    }
    return arr;
}
/** Test Cases **/
// console.log(keys({ a: 1, b: 2, c: 3 }));
// console.log(keys({ first: 'Matt', last: 'Lane' }))
// console.log(values([]));

// Exercise 2. Write a function called values, which accepts an object and returns an array of all of the values in the object.
// IMPORTANT: Do not use the built in Object.values() function!
// Examples:
// let obj = { a: 1, b: 2, c: 3 };
// values(obj); // [1,2,3]
// let obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
// values(obj2); // ["Matt", "Lane", true]
// let obj3 = {};
// values(obj3); // []
function values(obj) {
    // arr that will hold values from object keys 
    const arr = [];
    // loop through obj
    for(let key in obj) {
        // add value of obj[key] to arr 
        arr.push(obj[key]);
    }
    return arr;
}
/** Test Cases **/
// console.log(values({ a: 1, b: 2, c: 3 }));
// console.log(values({ first: 'Matt', last: 'Lane', isDogOwner: true }));
// console.log(values([]));
// 

// Exercise 3. Write a function called entries, which accepts an object and returns an array of arrays of key-value pairs.
// In other words, each sub-array is an "entry" in the object with two elements: the first element is the key, 
// and the second element is the value.
// IMPORTANT: Do not use the built in Object.entries() function!
// Examples:
// let obj = { a: 1, b: 2, c: 3 };
// entries(obj);
// [["a",1], ["b",2], ["c",3]]
// let obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
// entries(obj2);
// [["first","Matt"], ["last","Lane"], ["isDogOwner",true]]
// let obj3 = {};
// entries(obj3); // []
function entries(obj) {
    // array that will hold arrays made from obj keys and values 
    const arrOfArrays = [];
    // iterate through obj 
    for(let key in obj) {
        arrOfArrays.push([key, obj[key]]);
    }
    return arrOfArrays;
}
/** Test Cases **/
// let obj = { a: 1, b: 2, c: 3 };
// console.log(entries(obj));
// let obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
// console.log(entries(obj2));
// let obj3 = {};
// console.log(entries(obj3)); // []

// Exercise 4. Write a function called pluck, which takes an array of objects and the name of a key.
// The function should return an array containing the value associated with that key for each object, 
// or undefined if that key is not present in the object.
// Examples:
// pluck([{ name: "Tim" }, { name: "Matt" }, { name: "Elie" }],'name')
// ["Tim", "Matt", "Elie"]
// pluck([{ name: "Tim", isBoatOwner: true }, { name: "Matt", isBoatOwner: false }, { name: "Elie" }],'isBoatOwner')
// [true, false, undefined]
function pluck(arrOfObjs, keyName) {
    // array that will contain the value associated with keyName
    const arrOfVal = [];
    for(let i = 0; i < arrOfObjs.length; i++) {
        // access keyName and push value
        arrOfVal.push(arrOfObjs[i][keyName])
    }
    return arrOfVal;
}

/** Test Cases */
//console.log(pluck([{ name: "Tim" }, { name: "Matt" }, { name: "Elie" }],'name'));
// ["Tim", "Matt", "Elie"]
//console.log(pluck([{ name: "Tim", isBoatOwner: true }, { name: "Matt", isBoatOwner: false }, { name: "Elie" }],'isBoatOwner'));
// [true, false, undefined]

// Exercise 5. Write a function called stringFromObject that generates a string from an object's key/value pairs.
// The format should be "key = value, key = value".
// Each key/value pair should be separated by a comma and space except for the last pair.
// Examples:
// stringFromObject({ a: 1, b: '2' });
// "a = 1, b = 2"
// stringFromObject({ name: 'Elie', job: 'Instructor', isCatOwner: false });
// "name = Elie, job = Instructor, isCatOwner = false"
// stringFromObject({}); // ""
function stringFromObject (obj) {
    // string that will hold that generated string from obj
    let string = "";
    //iterate through object and concat key/values
    for(p in obj) {
        string = `${string}${p} = ${obj[p]}, `
    }
    // remove comma and whitespace from end
    return `"${string.substring(0, string.length-2)}"`;
}
/** 
 *****************************************************
 * Another Version of stringFromObject using for in: *
 *****************************************************
 */

// function stringFromObject (obj) {
//     // string that will hold that generated string from obj
//     let string = "";
//     // grab keys and values using keys() and values()
//     const keysArray = keys(obj);
//     const valuesArray = values(obj);
//     for(let i = 0; i < keysArray.length; i++) {
//         // do not format with ", " when the last value/key
//         // else format with ", "
//         string = `${string}${keysArray[i]} = ${valuesArray[i]}${i != keysArray.length-1 ? ", " : ""}`
//     }
//     return  `"${string}"`;
// }

/** Test Cases */
// console.log(stringFromObject({ a: 1, b: '2' }));
// console.log(stringFromObject([]));
// console.log(stringFromObject({ name: 'Elie', job: 'Instructor', isCatOwner: false }));

// Exercise 6. Write a function called minMaxKeyInObject that accepts an object with numeric keys.*
// The function should return an array with the following format: [lowestKey, highestKey]
// Examples:
// minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' });
// [1, 10]
// minMaxKeyInObject({ 1: 'Elie', 4: 'Matt', 2: 'Tim' });
// [1, 4]
function minMaxKeyInObject(obj) {
    // get key values using keys() and grab max and min & return as an array 
    return [(Math.min.apply(null, keys(obj))), (Math.max.apply(null, keys(obj)))];
}
//** Test Cases */
// console.log( minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' }));
// console.log(minMaxKeyInObject({ 1: 'Elie', 4: 'Matt', 2: 'Tim' }));
