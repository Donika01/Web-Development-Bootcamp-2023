let count = 0;
while (count < 10) {
    count++;
    console.log(count)
}
// Equivalent
// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }

const secret = "BabyHippo";

let guess = prompt("Enter the secret code...");
while (guess != secret) {
    guess = prompt("try again...")
}
console.log("CONGRATS YOU GOT THE SECRET!!!")

// The Break Keyword


// COURSE'S VERSION - Does not work on the first try
// let input = prompt("Hey, say something")

// while (true) {
//     input = prompt(input);
//     if(input.toLowerCase() === "stop copying me") {
//         break;
//     }
// }
// console.log("OK, YOU WIN!");

// BETTER VERSION


let input = prompt("Hey, say something!")
 
while (true) {
    if (input.toLowerCase() === "stop copying me") break;
    input = prompt(input);
}
 
console.log("OK YOU WIN!")


