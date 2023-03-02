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

//***REDUCE***
//1. Get total mass of all characters

const total_mass = characters.reduce((acc, cur) => { // accumulator, current
    return acc + parseInt(cur.mass);
}, 0); // 0 - starting value of an accumulator
console.log(`Total mass: ${total_mass}kg`);

//2. Get total height of all characters

const total_height = characters.reduce((acc, cur) => acc + parseInt(cur.height), 0);
console.log(`Total height: ${total_height/100}m`);

//3. Get total number of characters by eye color

const charactersByEyeColor = characters.reduce((acc, cur) => {
    const color = cur.eye_color; // color takes current eye color value
    if(acc[color]) { // already added into accumulator: increment acc
        acc[color]++;
    }else { // new object: acc[color] = 1
        acc[color] = 1;
    }
    return acc;
}, {}); // initial value - empty object '{}'
console.log(charactersByEyeColor);

//3.1. Get total number of characters with blue eyes

const charactersWithBlueEyes = characters.reduce((acc, cur) => {
    if (cur.eye_color === 'blue') {
        acc++;
    }
    return acc; // reduce function always returns acc
}, 0)
console.log(charactersWithBlueEyes);

//4. Get total number of characters in all the character names

const total_name_char_length = characters.reduce((acc, cur) => acc + cur.name.length, 0);
console.log(total_name_char_length);
