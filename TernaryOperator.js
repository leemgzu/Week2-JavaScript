// for value to be null you need to explicitily defined its null there is a varibale declared bu there is no value to it

// var null = null
//var null; // this is undefined

function greet(name) {
    const hello = `Hello ${name === null  ? 'friend!': name}`
console.log(hello)

}

greet()

// Nullish coalescing operator (??)

// whatever is the on the left side and its value is either null or undefined
function greet(name) {
    const hello = `Hello ${name ?? 'friend!'}`
console.log(hello)

}

// || logical operator

function greet(name) {
    const hello = `Hello ${name || 'friend!'}` // converts into the true or false
 console.log(hello)

}
//downfall of this || 

function badTimeOut(timeout) {
  setTimeout(() => {console.log("hello")}, timeout || 1000); // 

}
badTimeout(0) // js takes 0 as false 

