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

// MAP
//1. Get an array of all names
  const names = characters.map((character) => {
    return character.name;
  })
  console.log(names);
  
//2.  Get an array of all heights
const heights = characters.map((character) => {
  return character.height;
})
console.log(heights);
//3. Get an array of all first names


// FILTER
//1. Get characters with mass greater than 100
const findMass = characters.filter(character => {
  return character.mass >= 100;
})

console.log(findMass);

//2. Get characters with height less than 200
//3. Get all male characters
//4. Get all female characters

// EVERY
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

// SOME
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 200?
//4. Is there at least one character that has mass less than 50?
