import { displayData } from './api.js';

const displayId = document.getElementById('id');
const displayImg = document.querySelectorAll('img');
const displayName = document.getElementById('name');
const displayRadio = document.querySelectorAll('input');
const nextButton = document.getElementById('next-button');

const randomNumber1 = Math.floor(Math.random() * 20);
const randomNumber2 = Math.floor(Math.random() * 20);
const randomNumber3 = Math.floor(Math.random() * 20);

const display1 = displayData[randomNumber1].image;
const display2 = displayData[randomNumber2].image;
const display3 = displayData[randomNumber3].image;

const leftDisplay = document.getElementById('left-display');
const centerDisplay = document.getElementById('center-display');
const rightDisplay = document.getElementById('right-display');

leftDisplay.addEventListener('click', leftClick);
centerDisplay.addEventListener('click', centerClick);
rightDisplay.addEventListener('click', rightClick);

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

let seriesCounter = 0;

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

-------------------------------------------------------------------------------

import rocks from '../data/rocks.js';  //  NEEDED FOR RENDER???
import renderRock from './render-rock.js';

const list = document.getElementById('rocks');

for (let i = 0; i < rocks.length; i++) {
    const rock = rocks[i];
    const el = renderRock(rock);
    list.appendChild(el);
}

--------------------------------------------------------------------------------

export function findById(items, id) {  // CANNIBALIZE TO ITERATE seriesCounter ???

    for (let i = 0; i < items.length; i++) {
        const item = items[i];

        if (item.id === id) {
            return item;
        }
    }
    return null;
}

-----------------------------------------------------------------------------------------------

export function calcOrderTotal(cart, rocks) {  // CANNIBALIZE TO ITERATE PRE-PUSH TO localStorage ???
    let orderTotal = 0;

    for (let i = 0; i < cart.length; i++) {
        const lineItem = cart[i];
        const rock = findById(rocks, lineItem.id);
        const lineTotal = calcLineTotal(lineItem.quantity, rock.price);
        orderTotal += lineTotal;
    }
    return roundCurrency(orderTotal);
}

-------------------------------------------------------------------------------

import rocks from '../data/rocks.js';
import { findById, calcOrderTotal, toUSD } from '../common/utils.js';  // CANNIBALIZE FOR RESULTS PAGE
import renderLineItem from './render-line-item.js';

const tbody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');
const placeOrderButton = document.getElementById('place-order-button');

// const cartInLocalStorage = localStorage.getItem('CART');
const votesArrayInLocalStorage = localStorage.getItem('VOTES');
let votesArray;
// if there is a cart in local storage
if (votesArrayInLocalStorage) {
    // parse it
    votesArray = JSON.parse(votesArrayInLocalStorage);
}
else {
    // otherwise initialize the cart
    votesArray = [];
}

for (let i = 0; i < votesArray.length; i++) {
    const lineItem = cart[i];
    const rock = findById(rocks, lineItem.id);
    const dom = renderLineItem(lineItem, rock);

    tbody.appendChild(dom);
}

const orderTotal = calcOrderTotal(cart, rocks);
orderTotalCell.textContent = toUSD(orderTotal);

// if the cart is empty
if (cart.length === 0) {
    // disable the place order button
    placeOrderButton.disabled = true;
}
else {
    // if there IS something in the cart
    // add an event listener to the order button
    placeOrderButton.addEventListener('click', () => {
        // on click, remove the cart from local storage
        localStorage.removeItem('CART');
        // launch an alert with the current state of the  art
        alert('Order placed:\n' + JSON.stringify(cart, true, 2));
        // redirect the user to the home page
        window.location = '../';
    });
}