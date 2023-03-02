var prompt = require('prompt');
prompt.start();
prompt.get(['name', 'weight_in_kg'], function (err, result) {
    console.log(`Your name: ${result.name}`);
    console.log(`Your weight in kg: ${result.weight_in_kg}`);
    console.log(`Your weight in lb: ${parseInt(result.weight_in_kg * 2.2)}`);
});
