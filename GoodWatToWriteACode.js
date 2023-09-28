const person1 = { name: "Alice", age: 25, hobby: "Reading" };
const person2 = { name: "Bob", age: 30, hobby: "Gardening" };
const person3 = { name: "Charlie", age: 22, hobby: "Cooking" };
const person4 = { name: "David", age: 28, hobby: "Painting" };
const person5 = { name: "Eve", age: 35, hobby: "Hiking" };


// BAD CODE
// this doesnot give which variable name it is when its logged
console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);
console.log(person5);


// GOOD CODE

console.log({person1, person2, person3})

console.log('%c hello', 'color: red; font-weight: bold'  )


// if the object share the same properties then
// maybe we want to share it on the table

console.table([person1, person2, person3])

//  ------------------------------------------------------------
console.time('looper') , console.timeEnd('looper')


//check where it was called and what defined it 

// stack trace logs

const deleteMe = () => console.trace(' delete it once!')

deleteMe()
deleteMe()
// with console.trace(), you know on which file your function has been called.
// ------------------------------

// destructuring

function feed(human){
	return `Feed ${human.name} of age ${human.age} ${human.meal} `
}

// in this example there is an object called human which has three properties
// human = { name: 'Alice', age: 24, meal: 'falafel'}

// good way of code

function feed({name, age, meal}){
		return `Feed ${name} of age ${age} ${meal} `
}

//OR

function feed(human){
const {name, age, meal} = human
		return `Feed ${name} of age ${age} ${meal} `

}
// --------------------------

// template-literals
"hello" +name+ "welcome to this class"


// spread-syntax

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];
console.log(mergedArray); // [1, 2, 3, 4, 5, 6]

// destructuring 
// renaming the variable
const myPerson = { name: 'Prakash', location: 'Bay Area', username: 'prakash123' }
const { name, location: home , username} = myPerson
console.log(home)
// traditional

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = array1.concat(array2);
console.log(mergedArray); // [1, 2, 3, 4, 5, 6]


// merging na objecg

const object1 = { name: "John" };
const object2 = { age: 30 };
const mergedObject = { ...object1, ...object2 };
console.log(mergedObject); // { name: "John", age: 30 }


const object1 = { name: "John" };
const object2 = { age: 30 };
const mergedObject = Object.assign({}, object1, object2);
console.log(mergedObject); // { name: "John", age: 30 }


// // Original object
const person = { name: "Alice", age: 25 };

// Adding a new property using spread syntax
const updatedPerson = { ...person, hobby: "Reading" };

console.log(updatedPerson);

// -----------------------------------------

// loops

// Sample list of items
const items = [
    { name: "item1", price: 20.0, taxRate: 0.08 },
    { name: "item2", price: 30.0, taxRate: 0.1 },
    { name: "item3", price: 15.0, taxRate: 0.05 },
    { name: "item4", price: 40.0, taxRate: 0.12 },
];

// Calculate the total price of all items
let totalPrice = 0;
for (const item of items) {
    totalPrice += item.price;
}

// Calculate the total tax amount
let totalTax = 0;
for (const item of items) {
    totalTax += item.price * item.taxRate;
}

// Find the item with the highest price
let highestPriceItem = null;
let highestPrice = 0;
for (const item of items) {
    if (item.price > highestPrice) {
        highestPrice = item.price;
        highestPriceItem = item;
    }
}

console.log("Total Price:", totalPrice);
console.log("Total Tax:", totalTax);
console.log("Highest Price Item:", highestPriceItem);


// good code


// Sample list of items
const items = [
    { name: "item1", price: 20.0, taxRate: 0.08 },
    { name: "item2", price: 30.0, taxRate: 0.1 },
    { name: "item3", price: 15.0, taxRate: 0.05 },
    { name: "item4", price: 40.0, taxRate: 0.12 },
];

// Calculate the total price of all items using reduce
const totalPrice = items.reduce((accumulator, item) => accumulator + item.price, 0);

// Calculate the total tax amount using reduce
const totalTax = items.reduce((accumulator, item) => accumulator + (item.price * item.taxRate), 0);

// Find the item with the highest price using reduce and map
const highestPriceItem = items.reduce((maxItem, currentItem) => {
    return currentItem.price > maxItem.price ? currentItem : maxItem;
}, items[0]);

console.log("Total Price:", totalPrice);
console.log("Total Tax:", totalTax);
console.log("Highest Price Item:", highestPriceItem);

