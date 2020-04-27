import displayData from './api.js';
import { getRandomProduct } from './utils';

const displayId = document.getElementById('id');
const displayImg = document.querySelectorAll('img');
const displayName = document.getElementById('name');
const displayRadio = document.querySelectorAll('input');
const nextButton = document.getElementById('next-button');

const displayThreeImages = () => {
    const display1 = getRandomProduct(displayData);
    let display2 = getRandomProduct(displayData);
    let display3 = getRandomProduct(displayData);
}


