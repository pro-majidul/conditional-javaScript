function findTheNumber(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + i;
    }

        let find =[];
    for (const number of numbers) {
        if(number==5 ){
           find.push(number);
        }
        
        
    }
    let i =0;
    let scam = [];
    while(i<numbers.length){
        i++
        if(numbers==25){
            scam.push(numbers)
        }
    }
    const scamnumber = scam.length;
    console.log('find : 25-----' ,scamnumber);
    const totalNumber = find.length;
    console.log(' find : 5 -----', totalNumber);
    return `the number is repeat : ${sum}`


}
const number = [5, 6, 11, 12, 98, 5];
const result = findTheNumber(number);
console.log(result);