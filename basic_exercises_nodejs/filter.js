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


//***FILTER***
//1. Get characters with mass greater than 100

const characters_over_100kg = characters.filter(character => {
    return parseInt(character.mass) > 100;
});
console.log(characters_over_100kg);
console.log('==============================================');

//2. Get characters with height less than 200

const characters_less_200_cm = characters.filter(character => {
    return parseInt(character.height) < 200;
});
console.log(characters_less_200_cm);
console.log('==============================================');

//3. Get all male characters
// (creating instance character , then returning filtered instances which character.gender equals 'male')
const male_characters = characters.filter(character => character.gender === 'male')
console.log(male_characters);

//4. Get all female characters
