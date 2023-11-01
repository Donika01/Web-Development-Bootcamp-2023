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
} else if (age > 65) {
    console.log("You are a senior. You pay $10")
}
