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

// Coding Exercise 38
function multiply(x, y) {
    return x * y;
}

// Coding Exercise 39 
function isShortsWeather(temperature) {
    if (temperature >= 75) {
        return true;
    } else {
        return false;
    }
}

// Using the JavaScript ternary operator syntax
// function isShortsWeather(temperature) {
//     return temperature >= 75 ? true : false;
//   }

// Coding Exercise 40
function lastElement(arr) {
    if (arr.length === 0) {
        return null;
    } else {
        return arr[arr.length - 1];
    }
}

function lastElement(arr) {
    return arr.length > 0 ? arr[arr.length - 1] : null;
}


//   Coding Exercise 41
function capitalize(cap) {
    let fisrtLetter = cap[0].toUpperCase();
    return fisrtLetter + cap.slice(1);

}

// Coding Exercise 42
function sumArray(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}

function sumArray(nums) {
    let total = 0;
    for (let num of nums) {
        total += num;
    }
    return total;
}

// Coding Exercise 43
function returnDay(num) {
    const day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (num <= 7 && num > 0) {
        return day[num - 1];
    } else {
        return null;
    }
}























