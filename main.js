'use strict';

const dogsName = (pet) => {
    return `My dog's name is ${pet}.`;
}
const catsName = (pet) => {
    return `My cat's name is ${pet}.`;
}

const petNamer = (pet, cb) => {
    return cb(pet);
}

console.log(petNamer('Pepper', dogsName));
console.log(petNamer('Salt', catsName));

const button = document.getElementById('main-btn');
console.log(button);

const queryButton = document.querySelector('#main-btn');
console.log(queryButton);

const clickFn = () => {
    console.log('You clicked me!')
}

queryButton.addEventListener('click', clickFn);
// const whatIsTheId = (e) => {
//     return `The element ID is ${e.target.id}!`;
// }

// button.addEventListener('click', whatIsTheId);