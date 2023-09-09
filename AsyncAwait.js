// Function to make a request to a location (Simulated async function)
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
    });
}

// Function to process a response (Simulated async function)
function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('Processing response');
        // Add extra information to the response and resolve it
        resolve(`Extra Information + ${response}`);
    });
}

// Using async/await to avoid callback hell
async function fetchDataAndProcess() {
    try {
        // Make a request to 'Google' and await its response
        const response = await makeRequest('Google');
        console.log('Response Received');

        // Process the response and await the result
        const processedResponse = await processRequest(response);
        console.log(processedResponse);

        // Continue with more asynchronous operations here if needed...

    } catch (err) {
        // Handle errors gracefully
        console.log(err);
    }
}

// Invoke the async function
fetchDataAndProcess();

/*
Explanation:

    async function fetchDataAndProcess(): This is an async function that allows us to use await inside it to pause execution until asynchronous operations are complete.

    try and catch: These keywords are used for error handling. If an error occurs during any of the awaited operations, it will be caught and handled in the catch block.

    await makeRequest('Google'): This line awaits the result of the makeRequest function, ensuring that the code pauses until the promise is resolved. This eliminates the need for nested callbacks.

    console.log('Response Received'): This line executes after the response is received, making the code easier to read and understand.

    await processRequest(response): Similar to the previous await, this line awaits the result of the processRequest function.

    console.log(processedResponse): This line executes after processing the response, providing clarity in the code flow.

Using async/await, the code becomes more linear and readable, addressing the issues associated with callback hell. Error handling is also simplified with the try and catch structure.

*/
