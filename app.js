import { displayData } from './api.js';
import { getRandomProduct } from './utils.js';

const image1 = document.getElementById('image-1');
const image2 = document.getElementById('image-2');
const image3 = document.getElementById('image-3');

const radio1 = document.getElementById('radio-1');
const radio2 = document.getElementById('radio-2');
const radio3 = document.getElementById('radio-3');

// const nextButton = document.getElementById('next-button');

renderSeries();

// let seriesCounter = 0;
// let votesArray = [];

function renderSeries() {
    const random1 = getRandomProduct(displayData);
    let random2 = getRandomProduct(displayData);
    let random3 = getRandomProduct(displayData);

    while (random1.id === random2.id || random2.id === random3.id || random1.id === random3.id) {
        random2 = getRandomProduct(displayData);
        random3 = getRandomProduct(displayData);
    }
    
    image1.src = random1.image;
    image2.src = random2.image;
    image3.src = random3.image;

    radio1.value = random1.id;
    radio2.value = random2.id;
    radio3.value = random3.id;
}

// nextButton.addEventListener('click', () => {
//     const userChoice = document.querySelector('input[type=radio]:checked');
//     seriesCounter ++;
//     if (seriesCounter > 25) {
//         location.replace ('./results.html');
//     }
// });