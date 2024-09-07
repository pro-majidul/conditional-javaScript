


function oddEverageNumber(numbers) {
    const num = [];
    let sum = 0;

    for (const number of numbers) {
        if (number % 2 !== 0) {
            console.log(number);
            num.push(number);

        }
        sum = sum + number;
    }
    console.log('total number is : ', sum);
    let length = num.length;
    console.log(" Odd number length : ", length);
    let avarage = sum / length;
    // console.log("Total avarage numbers is : " ,avarage);
    return `total avarage number is : ${parseInt(avarage)}`




}
const number = [23, 21, 22, 44, 45, 56, 77, 887, 77, 89, 99, 20];
const result = oddEverageNumber(number);
console.log(result);