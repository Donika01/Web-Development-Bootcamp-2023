// Scope - Variable "Visibility" 
// The location where a variable is defined dictates where we have access to that variable
// FUNCTION SCOPE
 
function collectEggs () {
    let totalEggs = 6; {
        console.log(totalEggs);
    }
}

/* If there is a variable defined with the same name in the function (in the scope)
then we will reference that variable fisrt, if not we use the other one */

let bird = 'Lejlek';
function birdWatch() {
    let bird = 'Qyqja';
    console.log(bird);
}
birdWatch();
console.log(bird);

