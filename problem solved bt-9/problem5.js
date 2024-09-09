function monthlySavings(allPayments, LivingCost) {
    if (!Array.isArray(allPayments) || typeof LivingCost !== 'number') {
        return 'invalid input'
    }
    let totalIncome = 0;
    for (const payment of allPayments) {
        if (payment >= 3000) {
            let tax = payment * 0.2;
           totalIncome = totalIncome + payment - tax;

        } else {
           totalIncome = totalIncome + payment;
        }
    }
    let savings = totalIncome - LivingCost;
    if(savings>=0){
        return 'Savings'
    }else{
        return "earn more"
    }

}
console.log(monthlySavings([1000, 2000, 3000], 5400));
console.log(monthlySavings([900, 2700, 3400], 10000));
console.log(monthlySavings([1000, 2000, 2500], 5000));
console.log(monthlySavings(100,[900, 2700, 3400]));