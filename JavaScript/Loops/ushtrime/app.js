const arr = ['daki', 'chorri', 'pia', 'koni'];

// for (let i = 0; i < arr.length; i++) {
//     console.log(`${i}: ${arr[i]}`);
// }

// let listItemIndex = 0;

// while (listItemIndex < arr.length) {
//     console.log(`${listItemIndex}: ${arr[listItemIndex]}`);
//     listItemIndex++;
// }

// let listItemIndex = 0;

// do {
//     console.log(`${listItemIndex}: ${arr[listItemIndex]}`);
//     listItemIndex++;
// } while (listItemIndex < arr.length)

// for (let i in arr) {
//  console.log(`${i}: ${arr[i]}`);
// }


// for (let value of arr) {
//     console.log(value);
// }


// for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(`${i}: ${arr[i]}`)
// }


const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffry', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]

// for (let i = 0; i < seatingChart.length; i++) {
//     for (let j = 0; j < seatingChart[i].length; j++) {
//         console.log(seatingChart[i][j]);
//     }
//     console.log(seatingChart[i])
// }

// let listIndex = 0;

// while(listIndex < seatingChart.length) {

//     console.log(seatingChart[listIndex]);
//     let studentIndex = 0;
//      while (studentIndex < seatingChart[listIndex].length) {
//         console.log(seatingChart[listIndex][studentIndex]);
//         studentIndex++;
//      }
//     listIndex++;
// }

for (let i = seatingChart.length - 1; i >= 0; i--) {
    for (let j = seatingChart[i].length - 1; j >= 0; j--) {
        console.log(seatingChart[i][j]);
    }
    console.log(seatingChart[i]);
}


