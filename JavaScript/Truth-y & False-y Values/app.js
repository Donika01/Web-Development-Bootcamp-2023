// Truthy and Falsy Values
// All JS values have an inherited truthyness or falsyness about them 
// Falsy values: false, 0, "", null, undefined, NaN
// Truthy values: Everything else

const userInput = prompt("Enter something");

if (userInput) {
    console.log("TRUTHY!")
} else {
    console.log("FALSY!")
}

if (0) {
    console.log("TRUTHY!")
} else {
    console.log("FALSY!")
}
// < FALSY!
