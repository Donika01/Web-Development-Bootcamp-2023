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




