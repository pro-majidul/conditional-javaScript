function calculateMoney(ticketSell) {
    if (ticketSell < 0 || typeof ticketSell !== 'number') {
        return 'please input a valid number'
    }
    let result = (ticketSell * 120) - (500 + 8 * 50)
    return result
}
console.log(calculateMoney(10));
console.log(calculateMoney(1055));
console.log(calculateMoney(93));
console.log(calculateMoney(-93));
console.log(calculateMoney('rh'));