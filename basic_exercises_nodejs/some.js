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

//***SOME***
//1. Is there at least one male character?
const some_male = characters.some(character => character.gender === 'male');
console.log(some_male);
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
const some_taller_than_210 = characters.some(character => character.height > 210);
console.log(some_taller_than_210);
//4. Is there at least one character that has mass less than 50?