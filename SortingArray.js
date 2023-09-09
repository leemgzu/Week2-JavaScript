function ascendingOrderSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      // Compare adjacent elements in the array
      if (arr[j] > arr[j + 1]) {
        // Swap arr[j] and arr[j + 1] if they are in the wrong order
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const numbers = [4, 2, 7, 1, 9, 3];
ascendingOrderSort(numbers);
console.log(numbers); // [1, 2, 3, 4, 7, 9]

// ---------------------

function descendingOrderSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      // Compare adjacent elements in the array
      if (arr[j] < arr[j + 1]) {
        // Swap arr[j] and arr[j + 1] if they are in the wrong order
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const numbers = [4, 2, 7, 1, 9, 3];
descendingOrderSort(numbers);
console.log(numbers); // [9, 7, 4, 3, 2, 1]



-----
  // better way to do it

  const numbers = [4, 2, 7, 1, 9, 3];
numbers.sort((a, b) => a - b); // a--> b == ascending and  b-a  ==descending 
console.log(numbers); // [1, 2, 3, 4, 7, 9]

