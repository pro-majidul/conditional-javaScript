// only even number ber kora

function oddOnlyNumbers(Numbers) {
    let sum = 0;
    for (const number of Numbers) {
        if (number % 2 == 1) {
            console.log('odd number' , number)
            sum =('total odd number' , sum + number);
        }
        // else{
        //     console.log(number)
        //     console.log('even number' , number)
        // }
    }
    return sum;


}
const num = [10, 21, 24, 43, 54, 65, 66, 77, 80];
const total = oddOnlyNumbers(num);
console.log(total);