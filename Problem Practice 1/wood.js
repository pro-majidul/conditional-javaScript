function createFurniture(tableItems , bedItems , chairItems){
    const tablePrize = 160;
    const bedPrize = 300;
    const chairPrize = 400;

    const totalTablePrize = tableItems * tablePrize;
    const totalBedPrize = bedItems *  bedPrize;
    const totalChairPrize = chairItems * chairPrize;
    const totalAmount = totalTablePrize + totalBedPrize + totalChairPrize;
    return totalAmount;
}
const woods = createFurniture( 3, 5, 2);
console.log(woods);

