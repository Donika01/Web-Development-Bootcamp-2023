// Logical AND
// Combining two pieces of logic into a single statement

// const password = prompt("Enter your password")
// if (password.length >= 6 && password.indexOf(' ') === -1) {
//     console.log("VALID PASSWORD!")
// } else {
//     console.log("INCORRECT FORMAT FOR PASSWORD!")
// }

// Logical OR
// If one side is ture, the entire thing is true

// 0-5 free
// 5-10 $10
// 10-65 $20
//65+ free

// The AND Operator runs before the OR Operator (Optionla to use ())

// const age = prompt("Enter age");

// if (age >= 0 && age < 5 || age >= 65) {
//     console.log("FREE")
// } else if (age >= 5 && age < 10) {
//     console.log("$10")
// } else if (age >= 10 && age < 65) {
//     console.log("$20")
// } else {
//     console.log("INVALID AGE")
// }

// Locical NOT
// !expression returns true if expression is false

let firstName = prompt("Enter yout first name");
if (!firstName) {
    firstName = prompt("TRY AGAIN!!!")
}

const age = 24;

if (!(age >= 0 && age < 5 || age >= 65)) {
    console.log("YOU ARE NOT A BABY OR A SENIOR")
}