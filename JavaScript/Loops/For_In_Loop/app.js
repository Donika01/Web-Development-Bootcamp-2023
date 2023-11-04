const testScores = {
    Donika: 100,
    Elona: 52,
    Rilindi: 85,
    Festimi: 45,
    Rrushe: 90,
    Albi: 40,
    Gentriti: 70
}

for (let person in testScores) {
    console.log(`${person} scores ${testScores[person]}`);
}

console.log(Object.keys(testScores));
console.log(Object.values(testScores));
console.log(Object.entries(testScores));

let total = 0;
let scores = Object.values(testScores);

for (let score of scores) {
    total += score;
}

console.log(total / scores.length)