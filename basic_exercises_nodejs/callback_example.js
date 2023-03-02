// setTimeout(() => {
//     console.log('Hello');
// },3000);
//
//
// let output = () => {
//     console.log('hello');
// };
// setTimeout(output, 2000);


let names = ['Misha', 'Masha', 'Chipa'];

names.forEach((name)  => {
    console.log(name)
});

const myForEach = (arr, callback) => { // two args: array and function as callback function
    for(let i = 0; i<arr.length; i++) {
        const element = arr[i];
        callback(i, element); // we call callback function passing each element
    }
};
// calling this function
myForEach(names, (number, name) => {  // arr = names, callback(i, element) = (number, name)
    console.log(`number: ${number+1}, name: ${name}.`);
})



const displayResult = (some) => console.log(some);

const add_5_to_it = (some) => console.log(some+5);

const multiply = (x,y, myCallback) => {
    let result = x * y;
    console.log('Calculating...')
    myCallback(result);
}

multiply(6,7, add_5_to_it);



// Functions that keeps only in callback chosen numbers numbers
function sortfunc(numbers, callback) {
    const myArray = [];
    for (const x of numbers) {
        if (callback(x)) {
            myArray.push(x);
        }
    }
    return myArray;
}

// Create an Array
const myNumbers = [4, 1, -20, -7, 5, 9, -6, 5];

// Call sortfunc with a specified callback
const only20 = sortfunc(myNumbers, (x) => x === -20);
const positive_only = sortfunc(myNumbers, (x) => x > 0);

// Display Result
console.log(only20);
console.log(positive_only);

