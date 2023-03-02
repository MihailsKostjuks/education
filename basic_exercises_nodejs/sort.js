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

//***SORT*** // sort functions must return "negative or positive value"
//1. Sort by mass

const sorted_by_mass = characters.sort((a,b) => {
    return a.mass - b.mass; // a - b: increasing order '(a - b) < 0', b - a: descending order
});
//console.log(sorted_by_mass);

//2. Sort by height
//3. Sort by name

const sorted_by_name = characters.sort((a,b) => {
    if (a.name < b.name) {
        return -1;
    } else {
        return 1;
    }
});
console.log(sorted_by_name);

//4. Sort by gender