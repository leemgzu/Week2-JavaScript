// Followed by promise.js.
// Please check promise.js file before studying this code



// Simulating if a user is watching a tutorial or not.
const userLeft = false; // Imagine the user didn't leave.
const userWatchingTikTok = false; // Imagine the user isn't watching TikTok.


// Define a function called watchTutorialCallback that takes two callbacks as arguments
function watchTutorialCallback(callback, errorCallback) {
    if(userLeft){
        errorCallback({
            name: 'User Left',
            message: ':('
    })
    } else if(userWatchingTikTok){
        errorCallback({
            name: 'User Watching TikTok',
            message: 'Learning to Code < Watching TikTok'
        })
    } else {
        callback('Thumbs up and Subscribe')
    }
}
// // Call the watchTutorialCallback function with success and error callbacks
watchTutorialCallback((message) => {
    console.log(`Success ${message}`) // template literal example-- docs:  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
}, (error) => {
    console.log(error.name + ' ' + error.message) // concat example
})


// Promises methods
// Create three Promise objects that simulate tasks
const downloadTikTok = new Promise((resolve, reject) => {
    resolve('TikTok Downloaded')
})

const createTikTok = new Promise((resolve, reject) => {
    resolve('Creating TikTok')
})

const editTikTok = new Promise((resolve, reject) => {
    resolve('Editing TikTok')
})

Promise.all([downloadTikTok, createTikTok, editTikTok]).then((messages) => {
    console.log(messages)
})
