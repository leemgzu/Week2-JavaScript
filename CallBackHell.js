// here is the example of callback function
//  there are two function makeRequest and processReuqest, which is called one after another.

// Function to make a request to a location
function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making Request to ${location}`);
        if (location === 'Google') {
            // Resolve with a success message if the location is 'Google'
            resolve('Google says hi');
        } else {
            // Reject with an error message for other locations
            reject('We can only talk to Google');
        }
    })
}

// Function to process a response
function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('Processing response');
        // Add extra information to the response and resolve it
        resolve(`Extra Information + ${response}`);
    })
}

// Callback Hell example (Nested Callbacks)
makeRequest('Google', (response) => {
    console.log('Response Received');
    processRequest(response, (processedResponse) => {
        console.log(processedResponse);
    }, (err) => {
        console.log(err);
    });
}, (err) => {
    console.log(err);
});

// Callback Hell Explanation:
// Callback hell occurs when you have deeply nested callbacks, making the code hard to read and maintain.
// It arises from the asynchronous nature of JavaScript, especially when dealing with multiple async operations.
// Each nested callback represents another level of indentation, leading to "pyramid" or "Christmas tree" code.

// Why You Should Avoid Callback Hell:
// 1. Readability: It's challenging to understand and follow the flow of code in deeply nested callbacks.
// 2. Error Handling: Error handling becomes cumbersome and error-prone with multiple levels of callbacks.
// 3. Maintainability: Code in callback hell is difficult to modify and maintain, increasing the risk of bugs.

// What to Use Instead:
// Modern JavaScript provides better alternatives like Promises and async/await.
// - Promises: Promises allow you to write asynchronous code in a more linear and readable fashion.
// - async/await: async/await provides a more synchronous-like syntax for handling asynchronous operations.

// Example of Using Promises and async/await is shown in the previous code.
