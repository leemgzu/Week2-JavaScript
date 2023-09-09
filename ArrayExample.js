const arr = [1,2,3,4,5,6]
// Traditional Approach
const hasEvensTraditionalFunction(arr) {
for(let i = 0; i< arr.length; i++){
    if(arr[i] % 2 === 0){
        return true
    }
    return false
}


// New Approach

// Array.some() takes a callback number and check if some of the values in array has even numbers or not. 
// 
const arr = [1,2,3,4,5,6]
function hasEvens(arr) {
    return arr.some((num) => num %2 === 0)
}
console.log(hasEvens(arr))

// You can try with Array.every() which does the same thing but checks all the values in the array if it has even numbers or not.

// -----------------------------
//  In this example you can see we have duplicate value in the array 

  const a = ['a', 'b', 'c', 'a'] // a is repeated twice
  // you can fix this by using Array.filter() 
const uniq = arr.filter((item,index) => 
a.indexOf(item) === index
)
console.log(uniq)

const unique = [...new Set(arr] // set is the obj in js that has unique properties


//  Referance: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
