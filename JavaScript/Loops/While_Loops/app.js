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