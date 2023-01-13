/** Task One
 * 1. Create an empty object user.
 * 2. Add the property name with the value John.
 * 3. Add the property surname with the value Smith.
 * 4. Change the value of the name to Pete.
 * 5. Remove the property name from the object.
 */
const user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

/** Task Two
 * Write the function isEmpty(obj) which returns 
 * true if the object has no properties, false otherwise.
 */
function isEmpty(obj) {
    let counter = 0;
    for(let key in obj) {
        counter++;
    }
    return counter === 0 ? true : false;
}

// let schedule = {};
// alert( isEmpty(schedule) ); // true
// schedule["8:30"] = "get up";
// alert( isEmpty(schedule) ); // false

/**
 * Task Three
 * Write the code to sum all salaries and store in the variable sum. 
 * If salaries is empty, then the result must be 0.
 */
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0; 
for(let key in salaries) {
    sum += salaries[key]
}
console.log(sum);

/** Task Four
 * Create a function multiplyNumeric(obj) that multiplies 
 * all numeric property values of obj by 2.
 */
function multiplyNumeric(obj) {
    for(let key in obj) {
        if((typeof obj[key]) === "number") obj[key]*=2;
    }
}
// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  multiplyNumeric(menu);
  console.log(menu)