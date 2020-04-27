export function findById(array, id) {

    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        if (item.id === id) {
            return item;
        }
    }
    return null;
}

export function getRandomProduct(dataArray) {
    const randomIndex = Math.floor(Math.random() * dataArray.length);
    const randomProduct = dataArray[randomIndex];
    return randomProduct;
}



// function incrementTimesSeen() {



// }



// function incrementTimesPicked() {



// }