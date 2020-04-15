import { displayData } from './api.js';

const displayId = document.getElementById('id');
const displayImg = document.querySelectorAll('img');
const displayName = document.getElementById('name');
const displayRadio = document.querySelectorAll('input');
const nextButton = document.getElementById('next-button');

const randomNumber1 = Math.floor(Math.random() * 20 + 1);
const randomNumber2 = Math.floor(Math.random() * 20 + 1);
const randomNumber3 = Math.floor(Math.random() * 20 + 1);

const display1 = displayData[randomNumber1].image;
const display2 = displayData[randomNumber2].image;
const display3 = displayData[randomNumber3].image;

const leftDisplay = document.getElementById('left-display');
const centerDisplay = document.getElementById('center-display');
const rightDisplay = document.getElementById('right-display');

leftDisplay.addEventListener('click', leftClick);
centerDisplay.addEventListener('click', centerClick);
rightDisplay.addEventListener('click', rightClick);

let seriesCounter = 0;

const render = () => {
    let display1 = randomize(displayData);
    let display2 = randomize(displayData);
    let display3 = randomize(displayData);

    leftDisplay.value = display1.id;
    centerDisplay.value = display2.id;
    rightDisplay.value = display3.id;

    while (display1 === display2) {
        display2 = randomize(displayData);
    }
    while (display3 === display1 || display3 === display2) {
        display3 = randomize(displayData);
    }
    leftDisplay.src = display1.image;
    centerDisplay.src = display2.image;
    rightDisplay.src = display3.image;
};


// function incrementChoice(giftChoice) {
//     for (let i = 0; i < seriesCounter; i++) {

//     }
// }

nextButton.addEventListener('click', () => {
    const userChoice = document.querySelector('input[type=radio]:checked');
    seriesCounter ++;
    if (seriesCounter > 25) {
        location.replace ('./results.html');
    }
});