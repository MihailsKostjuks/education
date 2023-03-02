const posts = [
    {title: 'Post One', body: 'this is post one'},
    {title: 'Post Two', body: 'this is post two'}
];

function getPostsTitles() {
    setTimeout(() => {
        let output = [];
        posts.forEach((post, index) => {
            output.push(post.title);
        });
        console.log(output);
    }, 1000)
}

function createPost_with_callback(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 5000);
    // as 5000ms is more than 1000ms, without callback called inside setTimeout method
    // would display firstly un-updated array, and only then push created post,
    // although we create and push a new post, actually, as first.
}

function createPost_with_promise(post) {
    return new Promise((resolve, reject) => { // prior goal of this function is to return a promise
        setTimeout(() => {
            posts.push(post);

            const error = false;
            // this !error actually doesn't work well. Just as an example that we describe 2 scenario
            // when promise return either resolve as success or reject as fail
            if (!error) {
                resolve();
            }else {
                reject('something went wrong');
            }
        })
    })
}
// createPost_with_callback({title: 'Post Three', body: 'This is post three'}, getPostsTitles);

createPost_with_promise({title: 'Post Three', body: 'This is post three'})
    .then(getPostsTitles) // .then for resolve
    .catch(err => console.log(err));
// .catch for reject. Passing err as reject(...) argument and displaying it



const promise1 = Promise.resolve('First promise');
const promise2 = 'Second promise';
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'Third promise');
})
Promise.all([promise1, promise2, promise3]).then(value_of_promises => console.log(value_of_promises));
            // array of promises            calling .then for resolves, displaying values of all the promises

const promise_json = new Promise((resolve) =>
    setTimeout(resolve, 5000, fetch('https://jsonplaceholder.typicode.com/users'))
);
promise_json.then(res => res.json()).then(users => console.log(users.filter(user => user.id <= 5)));
