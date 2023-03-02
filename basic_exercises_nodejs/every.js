const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];


//***EVERY***
//1. Does every character have blue eyes?

const all_blue_eyes = characters.every(character => character.eye_color === 'blue');
console.log(all_blue_eyes);

//2. Does every character have mass more than 40?

const all_over_40_kg = characters.every(character => character.mass > 40);
console.log(all_over_40_kg);

//3. Is every character shorter than 200?
//4. Is every character male?
