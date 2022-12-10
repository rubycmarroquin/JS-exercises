// Week 2 - Loops

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
let countTo5 = 1;
while(countTo5 <= 5) {
    console.log(countTo5);
    countTo5++;
}
// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
countTo5 = 1;
do {
    console.log(countTo5);
    countTo5++;
} while(countTo5 <= 5)

// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
for(let countTo5 = 1; countTo5 <= 5; countTo5++) {
    console.log(countTo5);
}

// Exercise 4. Now we want a loop that prints the integers
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.

// while loop
let countdownFrom10 = 10;
while(countdownFrom10 != 0) {
    console.log(countdownFrom10);
    countdownFrom10--;
}

// do while loop 
countdownFrom10 = 10;
do {
    console.log(countdownFrom10);
    countdownFrom10--;
} while(countdownFrom10 != 0)

// for loop 
countdownFrom10 = 10;
for(countdownFrom10; countdownFrom10 > 0; countdownFrom10--) {
    console.log(countdownFrom10);
}

// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

// while loop 
let countTo27 = 7;
while(countTo27 <= 27) {
    console.log(countTo27);
    countTo27++;
}

//do while loop 
countTo27 = 7;
do {
    console.log(countTo27);
    countTo27++;
} while(countTo27 <= 27)

// for loop 
countTo27 = 7;
for(countTo27; countTo27 <= 27; countTo27++) {
    console.log(countTo27);
}
// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc.
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

//while loop 
let countBy10 = 0;
while(countBy10 <= 100) {
    console.log(countBy10);
    countBy10+=10;
}

// do while loop 
countBy10 = 0;
do {
    console.log(countBy10);
    countBy10+=10;
} while(countBy10 <= 100)

// for loop 
countBy10 = 0;
for(countBy10; countBy10 <= 100; countBy10+=10) {
    console.log(countBy10);
}
// Exercise 7. Add a comment as to why the following loop is an infinite loop (will
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.
/**
 * The reason why this code is an infinite loop is because counterFour will never reach 
 * the condition since counterFour begins at one and after each iteration it is being 
 * decremented after the console.log. To fix this, you would simply change counterFour--
 * to counterFour++;
 */
let counterFour = 1;
while (counterFour < 2) {
  console.log("HELP ME!");
  counterFour++;
}

// Exercise 8. Make a variable that contains your favorite integer. Write a loop
// (your choice which type) that prints the integers from 0 to that number.
let favoriteNum = 21;
for(let i = 0; i <= favoriteNum; i++) {
    console.log(i);
}

// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)
let favNum = 21;
for(let i = 0; i <= 100; i++) {
    if(i != favNum) {
        console.log(i, " not my favorite number");
    } else {
        console.log(i, " my favorite number!");
    }
}

// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or
// doing some research and write down your thoughts in a comment below:
/**
 * To me, when it comes to using different types of loops they each have their own purpose. 
 * For loops should be used when you know exactly how many times you should loop. 
 * 
 * While loops should be used when you have a specific condition (e.g., variable != true) that
 * you want to keep looping until that condition is met. 
 * 
 * Do while loops are similar to while loops except that they should be used when you want to 
 * loop at least once because it will execute the code first before checking the condition. 
 */

// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/

for (let outsideCounter = 0; outsideCounter <= 3; outsideCounter++) {
  console.log("counting down from", outsideCounter);
  for (let insideCounter = outsideCounter; insideCounter > 0; insideCounter--) {
    console.log("inside", insideCounter);
  }
  console.log("***********************************");
}

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
/**
 * Something I struggled with was deciding which exercises that did not contain the
 * word "inclusive" when creating my loops. The reason for this was because I had 
 * initially assumed that if it did not contain inclusive then we should not include
 * it, but when it came to later questions they had the same wording but the numbers
 * were inclusive. 
 */
// Email your file to us or commit your file to GitHub and email us a link.