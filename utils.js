export function findById(id, displayData) {

    for (let i = 0; i < displayData.length; i++) {
        const item = displayData[i];
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