/** 
 * Problem 1: 
 * Write a javascript function named reverse which takes a string argument and 
 * returns the reversed string.
 */
function reverse(string) {
    return (Array.from(string).reverse()).join("");
}
/** Test Cases for Problem 1 */
console.log(reverse("hello")); // olleh
console.log(reverse("i went to the park yesterday!")) // !yadretsey eht ot tnew i"

/** 
 * Problem 2:
 * Given a javascript array of objects having a radius property as shown:
 * [{radius: 5}, {radius: 9}, {radius: 2}],
 * write a comparator function to sort it.
 */
function comparator(arrOfObjs) {
    return arrOfObjs.sort((a,b) => a["radius"] - b["radius"]);
}
/** Test Cases for Problem 2 */
console.log(comparator([{radius: 5}, {radius: 9}, {radius: 2}]));
console.log(comparator([{radius: 100}, {radius: 23}, {radius: 12}, {radius:3}]));

/**
 * Problem 3: 
 * Write a javascript function named length_of_array, which takes an array 
 * as argument and returns the number of elements in that array 
 * (as opposed to what is given by the length property of the array). 
 * Remember undefined can also be an element if it is explicitly set 
 * at some index, e.g. x[5] = undefined;. This undefined should be counted, 
 * but elements which are not present in the array (as arrays can be sparse), 
 * should not be counted.
 */
function length_of_array(arr) {
    return Object.keys(arr).length;
}
/** Test Cases for Problem 3 */
const arr1 = [1, 2, "", false, undefined, , , ];
console.log(length_of_array(arr1));