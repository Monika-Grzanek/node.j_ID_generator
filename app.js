const fs = require('fs');

const genders = ['F', 'M'];
const maleNames = ['Adam', 'Michael', 'Peter', 'John', 'Tom', 'Martin'];
const femaleNames = ['Monica', 'Eveline', 'Emily', 'Miley', 'Bella', 'Diana'];
const lastNames = ['Smith', 'Jordan', 'Pollo', 'Doe', 'Wilson', 'Rayan', 'Parker', 'Kingston'];

const randChoice = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)]
};

const people = [];

for(i = 0; i < 20; i++){
    const drawnGender = randChoice(genders);
    const drawnFirstName = drawnGender  === 'M' ? randChoice(maleNames) : randChoice(femaleNames);
    const drawnLastName = randChoice(lastNames);
    const drawnAge = Math.floor(Math.random() * 60) + 18;

    const drawnPerson = {
        gender: drawnGender,
        firstName: drawnFirstName,
        lastName: drawnLastName,
        age: drawnAge,
        email: drawnFirstName + '.' + drawnLastName + '@gmail.com'
    }

    people.push(drawnPerson);
};

const arrayToJSON = JSON.stringify(people);

fs.writeFile('people.json', arrayToJSON, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });



