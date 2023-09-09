// Promise is a wrapper around a value that may or may not be known when the promise is created.
// value is unknown right now but will resolve to something in the future.

let p = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a == 2) {
        resolve('Success');
    } else {
        reject('Failed');
    }
});

p.then((message) => {
    console.log('This is in the then ' + message);
}).catch((message) => {
    console.log('This is in the catch ' + message);
});
// This is in the then Success  // This is in the catch Failed
