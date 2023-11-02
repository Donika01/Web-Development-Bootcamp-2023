// Arrays - Data Structure that allows us to group data together
const days = ['Monday', 'Tuesday', 'Wednesday'];
// Array Random Access
days[0];
days.length

days[1][0] // T - First character of the second element 

// Updating arrays

const colors = ['rad', 'blue', 'green'];

colors[0] = 'red';

colors[10] = 'purple';  // emppty x 7. The length of the array 11

// Push & Pop - Add and Remove to/from the end
// Last In First Out (LIFO)

let movieLine = ['Daki', 'Arta'];

movieLine.push('Pia');
movieLine.push('Koni', 'Mami', 'Babi');

movieLine.pop();
let person = movieLine.pop(); // Mami

let barbell = [];

barbell.push(45);
barbell.push(45);
barbell.push(25);
barbell.push(10);

barbell.pop();

// Shift and Unshift - Remove or add from/to start
// First In First Out (FIFO)

let nextPerson = movieLine.shift();
movieLine.push('Bleroni', 'Elona', 'Aulona');

movieLine.unshift('Daki');

// Other Array Methods
// Concat, indexOf, includes & reverse

let cats = ['blue', 'kitty'];
let dogs = ['rusty', 'wyatt']

let comboParty = cats.concat(dogs);

cats.includes('blue'); // < true (boolean value)

comboParty.indexOf('rusty') // < 0
comboParty.indexOf('reksi') // < -1

// It changes permanently the array even without saving it as a variable
comboParty.reverse();

// Slice is a getting a  copy of a portion of an array

let ngjyrat = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

let coolColors = ngjyrat.slice(3); // From index 3 to the end
let warmColors = ngjyrat.slice(0, 3); // without including the element with the index 3 (green)

ngjyrat.slice(-3); // Last three colors

// Splice - Destructive to the original array
// Starting point(index), how many we want to delete, what we want to insert

ngjyrat.splice(5, 1); // Indigo deleted

ngjyrat.splice(1, 0, 'red-orange');

ngjyrat.splice(4, 0, 'yellow-green', 'forest-green')

// Reference Types & Equality Testing

let nums = [1, 2, 3];
let numsCopy = nums;

nums === numsCopy; // < true compares the reference (are they pointing to the same thing in memory)
// It does not help us to compare the content 








