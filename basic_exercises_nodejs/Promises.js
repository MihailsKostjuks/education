const myPromise = new Promise((resolve, reject) => {
    const rand = Math.floor(Math.random() *2);
    if (rand === 0) {
        resolve(); // for coming .then function
    }else {
        reject(); // for future .catch function
    }
});
myPromise
    .then(() => console.log('success')) // resolve implementation
    .catch(() => console.log('fail')); // reject


// fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.error(err));