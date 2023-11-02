// If Statements
// Only runs code if given conditional is true

if (1 + 1 === 2) {
    console.log('MATH STILL WORKS!')
}

let random = Math.random();
if (random < 0.5) {
    console.log('Your number is less then 0.5')
    console.log(random);
}

if (random >= 0.5) {
    console.log('Your number is greater then 0.5!')
    console.log(random);
}

// Else If
// If not this thing, maybe this other thing!?

const dayOfWeek = 'Friday';

if (dayOfWeek === 'Monday') {
    console.log('UGHH I HATE MONDAYS')
} else if (dayOfWeek === 'Saturday') {
    console.log("YAY I LOVE SATURDAYS")
} else if (dayOfWeek === 'Friday') {
    console.log('FRIDAYS ARE DECENT. ESPECIALLY AFTER WORK')
}

const age = 30;

if (age < 5) {
    console.log("You are a baby. You get in for free")
} else if (age < 10) {
    console.log("You are a child. You pay $10")
} else if (age < 65) {
    console.log("You are an adult. You pay $20")
} else {
    console.log("You are a senior. You pay $10")
}

// Else
// If nothing else was true, do this


const ditaJaves = prompt('Enter a day').toLowerCase();

if (ditaJaves === 'monday') {
    console.log('UGHH I HATE MONDAYS')
} else if (ditaJaves === 'saturday') {
    console.log("YAY I LOVE SATURDAYS")
} else if (ditaJaves === 'friday') {
    console.log('FRIDAYS ARE DECENT. ESPECIALLY AFTER WORK')
} else {
    console.log('MEH')
}

// Nesting Conditionals

// Password must be 6+ characters
// Password cannot include space

const password = prompt("Please enter a new password");

if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {
        console.log("VALID PASSWORD")
    } else {
        console.log("Password cannot contain spaces")
    }
} else {
    console.log("Password too short! Must be 6+ characters")
}

// Change the value of num, so that "YOU GOT ME!" prints out
const num = 102; // THIS IS THE ONLY LINE YOU SHOULD CHANGE :) 

// DO NOT TOUCH ANYTHING BELOW (please) 
if (num <= 100) {
    if (num >= 50) {
        console.log("HEY!");
    }
} else {
    if (num < 103) {
        if (num % 2 === 0) {
            console.log("YOU GOT ME!");
        }
    }
}


