// 


function totalDiscountPrize(items) {
    const first100thPrize = 300;
    const second150thPrize = 250;
    const third300thPrize = 200;
    if (items <= 100) {
        const PayAmount = items * first100thPrize;
        return PayAmount;
    } else if (items <= 200) {
        const pay100thAmount = 100 * first100thPrize;
        const remainingItems = items - 100;
        const remainingItemsPrize = remainingItems * second150thPrize;
        const totalPayAmount = pay100thAmount + remainingItemsPrize;
        return totalPayAmount;
    } else if (items > 200) {
        const pay100thAmount = 100 * first100thPrize;
        const pay200thAmount = 100 * second150thPrize;
        const remainingItems = items - 200;
        const remainingPrize = remainingItems * third300thPrize;
        const totalCost = pay100thAmount + pay200thAmount + remainingPrize;
        return totalCost;
    }
}

const itemsQuantity = totalDiscountPrize(500);
console.log(itemsQuantity);