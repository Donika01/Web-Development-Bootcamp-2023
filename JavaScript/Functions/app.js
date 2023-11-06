// Functions - Reusable procedures
// We define a chunk of code that we can then execute at a later point
// 2 step procedure 
// 1.Define - registering it (telling JS about it)
// 2.Run - Execute the function
// function() {
//do something
// }

function singSong() {
    console.log("DO");
    console.log("RE");
    console.log("MI");
}

singSong();
singSong();
singSong();
singSong();

// Arguments - Inputs to a function
// Parameter when we declare the function, argument when we run it 

function greet(firstName) {
    console.log(`Hey there ${firstName}!`);
}

greet('Donika');

// Coding Exercise 36

// function rant(message) {
//     console.log(message.toUpperCase());
//     console.log(message.toUpperCase());
//     console.log(message.toUpperCase());
//   }

// Solution with a for loop:
function rant(message) {
    for (let i = 0; i < 3; i++) {
        console.log(message.toUpperCase());
    }
}

//   Multiple Arguments 

function greeting(firstName, lastName) {
    console.log(`Hey there, ${firstName} ${lastName[0]}.`);
}

greeting('Blair', 'Waldorf');

function repeat(str, numTimes) {
    let result = '';
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}

repeat('Lauresa', 4);

// Coding Exercise 37

function isSnakeEyes(roll1, roll2) {
    if (roll1 === 1 && roll2 === 1) {
        console.log("Snake Eyes!")
    } else {
        console.log("Not Snake Eyes!")
    }
}

isSnakeEyes(1, 1);
isSnakeEyes(1, 2);

// The Return Keyword is how we get values out of a function so we can save and capture them

// function add(x, y) {
//     console.log(x = y);
// }

// function add(x, y) {
//     const sum = x + y;
//     return sum;
    // Code after return does not get executed
// }

// const seven = add(3, 4);

// add(add(2, 1), 9); // < 12

// We can only return a single value

function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false
    }
    return x + y;
}
























