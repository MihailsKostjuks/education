var readline = require('readline');
var rl_1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl_1.question('What is your name? ', (name) => {
    rl_1.question(`${name}, where do you live? `, (country) => {
        console.log(`${name} lives in ${country}.`)
        rl_1.close();
    });
});

rl_1.on('close', () => {
    console.log('Bye!');
});

// age = parseInt(age);
// if (isNaN(age)) {
//     console.log('not a number');
// } else {
//     console.log(age);
// }


// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
//
// rl.question('What is your name ? ', function (name) {
//     rl.question('Where do you live ? ', function (country) {
//         console.log(`${name}, is a citizen of ${country}`);
//         rl.close();
//     });
// });
//
// rl.on('close', function () {
//     console.log('\nBYE BYE !!!');
//     process.exit(0);
// });