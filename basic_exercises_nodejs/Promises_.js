let p1 = new Promise((resolve, reject) => {
    let a = 1 + 1
    if (a === 2) { // two conditions for resolve and reject:
        resolve('success'); // declare arguments for future calling .then method
    }else {
        reject('fail');
    }
});

// p1
//     .then(message => console.log('this is in then: ' + message)) // .then is an arrow function
//     // passing message as a parameter (it already stores an argument 'success' declared in promise)
//
//     .catch(message => console.log('this is in catch: ' + message))


const userLeft = false;
const userWatchingCatMeme = false;

//
// callback function
//
const watchTutorialCallback = (successCallback, errorCallback) => { // arrowfunc with 2 callbacks
    if (userLeft){
        errorCallback({ // argument of a callback
            name: 'user left',
            message: ':('
        })
    }else if (userWatchingCatMeme){
        errorCallback({
            name: 'user is watching cat meme',
            message: ':('
        })
    }else {
        successCallback('user is watching tutorial')
    }
}

watchTutorialCallback(message => { // passing separate first parameter
    console.log('success: ' + message) // message is what's inside the first callback
}, error => { // and then second parameter
    console.log(error.name + ' ' + error.message) // error is what's inside the second callback
})

//
// promise function
//
const watchTutorialPromise = new Promise((successCallback, errorCallback) => { // resolve, reject
    if (userLeft){
        errorCallback({ // argument to reject
            name: 'user left',
            message: ':('
        })
    }else if (userWatchingCatMeme){
        errorCallback({ // you can use multiple resolves and rejects within if else loops
            name: 'user is watching cat meme',
            message: ':('
        })
    }else {
        successCallback('user is watching tutorial') // argument to resolve
    }
})

watchTutorialPromise // calling as a common promise
    .then(message => console.log('success: ' + message))
    .catch(error => console.log(error.name + ' ' + error.message))
