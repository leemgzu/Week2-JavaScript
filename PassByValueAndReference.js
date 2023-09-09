/*
In JavaScript, whether a value is passed by value or by reference depends on the data type. 
Understanding how this works is crucial for avoiding unexpected behavior in your code.

1. **Pass by Value**:
   - Simple data types, like numbers, strings, and booleans, are passed by value.
   - When you pass a variable containing a primitive data type to a function,
    a copy of the value is created inside the function's parameter.
*/
   function updateValue(value) {
     value = 100;
   }

   let num = 42;
   updateValue(num);
   console.log(num); // Output: 42

/*
   In this example, `num` is passed to the `updateValue` function. Inside the function, 
   a copy of the value `42` is created as `value`, and any changes made to `value` do not affect the original `num` variable.

2. **Pass by Reference**:
   - Complex data types, such as objects and arrays, are passed by reference.
   - When you pass an object or an array to a function, you're passing a reference 
   to the original object or array. Any modifications made inside the function will affect the original object or array.
*/
   function updateArray(arr) {
     arr.push(4);
   }

   let myArray = [1, 2, 3];
   updateArray(myArray);
   console.log(myArray); // Output: [1, 2, 3, 4]
/*
   Here, `myArray` is passed to the `updateArray` function. Since arrays are passed by reference, 
   any changes made to `arr` inside the function are reflected in the original `myArray`.

3. **Passing by Reference but Changing the Reference**:
   - If you reassign a new value to a parameter within a function, 
   it won't affect the original variable outside the function because the parameter's reference is changed.
   */
  
   function updateObject(obj) {
     obj = { key: 'new value' };
   }

   let myObject = { key: 'value' };
   updateObject(myObject);
   console.log(myObject); // Output: { key: 'value' }


//    In this case, `obj` inside the `updateObject` function gets a new reference, so 
//    any changes made to `obj` do not affect `myObject`.

// It's essential to be aware of whether a value is passed by value or reference, as it affects 
// how your functions interact with variables. Primitive types are typically passed by value, while
//  objects and arrays are passed by reference. If you need to modify an object or array without
//   changing the original, you can create a copy of it within the function. Libraries like L
//   odash provide convenient methods for deep cloning objects and arrays when needed.
