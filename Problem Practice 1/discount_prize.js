function discountPrize(item){
    const itemPrize = 300;
    if(item <=100){
        const payMoney = item * itemPrize;
        return payMoney;
    }
    else if( item <= 200){
        const payMoney = item * 250;
        return payMoney;
    }
    else if(item >= 300){
        const payMoney = item * 200;
        return payMoney;
    }
    else{
        return 'pay this amount how much you buy';
    }

}
const byItems =discountPrize( 400);
console.log(byItems);
