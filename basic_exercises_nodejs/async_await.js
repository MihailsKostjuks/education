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

function createPost(post) {
    setTimeout(() => {
        posts.push(post);
        console.log('pushed');
    }, 5000);
    // as 5000ms is more than 1000ms, without callback called inside setTimeout method
    // would display firstly un-updated array, and only then push created post,
    // although we create and push a new post, actually, as first.
}

async function foo () {
    await createPost({title: 'Post Three', body: 'this is post three'});

    getPostsTitles();
}
foo();