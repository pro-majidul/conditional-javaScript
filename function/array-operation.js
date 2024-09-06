// function sumOfNumber(numbers){
//     sum = 0;
//     for(const number of numbers){
//         console.log(number);
//         sum = sum +  number;
//     }
//     return sum ;
// }
// const num = [20, 30 ,40, 45, 50, 60, 70];
// const total = sumOfNumber(num);
// console.log('total result is' , total);

function orrayOperation(numbers) {
    sum = 0;
    for (const number of numbers) {
        console.log(number);
        sum = sum + number;
    }
    return sum;
}
const nums = [45, 67, 89, 65, 32, 13, 79];
const total2 = orrayOperation (nums);
console.log('total is ', total2);