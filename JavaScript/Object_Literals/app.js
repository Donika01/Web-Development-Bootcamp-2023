// Object Literals are collections of properties
// Property = key + value 
// Rather than accessing data using an index, we use costum keys

const person = {
    firstName: 'Taylor',
    lastName: 'Swift'
}

const differenThings = {
    favNum: 13,
    isFunny: 'true',
    colors: ['red', 'black']
}

// Accessing Data Out Of Objects

person['lastName'] // < Swift
// Another way 
person.firstName // <Taylor

// VALID KEYS - All keys are converted to strings (except for symbols)
const toStrings = { true: 'dat', null: 'lalala' }

// Coding Exercise 30
const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}

//YOUR CODE GOES DOWN HERE:
const fullAddress = `${restaurant.address}, ${restaurant.city}, ${restaurant.state} ${restaurant.zipcode}`

// Modifying Objects
const midterms = {
    danielle: 96,
    thomas: 78
}

midterms.thomas = 79;

midterms.thomas = 'C+'
midterms['danielle'] = 'A';

// Adding properties

midterms.ezra = 'B+';
midterms['antonio'] = 'A-';

// Nesting Arrays & Objects
// The combination of arrays and objects is far more powerful than either one on their own
// Most of out dta in real life is a mixture of key-value stuff and ordered list of information

const comments = [
    {
        username: 'Tammy',
        text: 'lololol',
        votes: 9
    },
    {
        username: 'Koni',
        text: 'Heke doooolë',
        votes: 555534
    }
]

comments[1].text // < Heke doooolë

