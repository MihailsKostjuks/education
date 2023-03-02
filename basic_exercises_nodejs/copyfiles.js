const fs = require('fs');
fs.copyFile('../session_1_plus_training/readline_example.js', 'readline_example.js' ,(error) => {
    if (error) {
        throw error;
    } else {
        console.log('success');
    }
});
