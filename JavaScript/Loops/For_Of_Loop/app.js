// For Of Loop - a nice and easy way of iterating over arrays and other iterable thing considered by JS

const subreddits = ['cringe', 'books', 'funny', 'pics', 'soccer'];

// for (let i = 0; i < subreddits.length; i++) {
//     console.log(`visits reddit.com/r/${subreddits[i]}`);
// }

for (let sub of subreddits) {
    console.log(sub);
}

console.log("BREAK!");

const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffry', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]


// for (let i = 0; i < seatingChart.length; i ++) {
//     const row = seatingChart[i]
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j])
//     }
// }

for (let row of seatingChart) {
    for (let student of row) {
        console.log(student);
    }
}

console.log("BREAK!");

for (let char of "Hello Worls") {
    console.log(char);
}