import { giftData } from './api.js';

const randomNumber1 = Math.floor(Math.random() * 20 + 1);
const randomNumber2 = Math.floor(Math.random() * 20 + 1);
const randomNumber3 = Math.floor(Math.random() * 20 + 1);

const image1 = giftData[randomNumber1].image;
const image2 = giftData[randomNumber2].image;
const image3 = giftData[randomNumber3].image;

const leftGift = document.getElementById('left-gift');
const centerGift = document.getElementById('center-gift');
const rightGift = document.getElementById('right-gift');

leftGift.src = image1;
centerGift.src = image2;
rightGift.src = image3;

