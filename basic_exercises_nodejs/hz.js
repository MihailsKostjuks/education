const delay = (ms) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), ms)
    })
};
let ms = 3000
//delay(ms).then(() => console.log(`delay: ${ms} ms`));

let url = 'https://jsonplaceholder.typicode.com/todos';

function fetchToDos() {
     return delay(3000) // function returns promise
         .then(() => fetch(url)) // ES6 : no word return withoot {} needed
         .then(res => res.json())
}
// fetchToDos()
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => console.error(err))

const delay2 = (ms) => {
    setTimeout(() => console.log(`delay2: ${ms}ms`), ms)
}

const delay3 = (ms) => {
    setTimeout(() => console.log(`delay3: ${ms}ms`), ms)
}

async function fetchToDosAsync() {
    //await delay(2000);
    await delay2(2000);
    await delay3(2000);
    const res = await fetch(url);
    const data = await res.json();
    //console.log(data);
}

fetchToDosAsync();
