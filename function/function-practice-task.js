// practice task 1 

function practiceTask1(a, b, c, d) {
    maltiple = a * b * c * d;
    return maltiple;
}
// const equal = practiceTask1( 9 , 5, 4, 3);
// console.log(equal);



function practiceTask2(number) {
    if (number % 2 == 1) {
        result = number * 2;
    }
    else {
        result = number / 2;

    }
    return result
}
// const number = 33;
// const number2 = 30;
// const total= practiceTask2(number);
// const total1= practiceTask2(number2);
// console.log(total);
// console.log(total1);




function make_evg(rools) {
    const items = rools.length;
    console.log('total length is', items);
    let sum = 0;
    for (const roll of rools) {
        sum = sum + roll;
    }
    const everage = sum / items;
    console.log('everage is', everage);
    return sum;


}
// const classRolls = [30, 12, 13, 2, 1, 8, 6, 5, 4, 10];
// const total = make_evg(classRolls);
// console.log(total);



function count_zero(string) {
    const lengt = string.lengt;
    let sum = 0;
    for (const number of string) {
        if (number === 0) {
            sum++
        }
    }
    return sum;
}

// const binaryNumber = [ 1 ,0 ,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1];
// const countString = count_zero(binaryNumber);
// console.log('there are ' , countString , ' zeros');



function odd_even(equalation) {
    if (equalation % 2 == 0) {
        console.log("even", equalation);
    }
    else {
        console.log('odd', equalation);
    }

}

// odd_even(22);





function evenOddCheck(values) {
    for (const value of values) {
        if(value % 2 ==0){
            console.log('Even Number' , value);
        } 
        else{
            console.log('odd value', value);
        }  
    }
}
const number = [5, 23, 123, 57, 76, 56, 44, 22, 756, 55, 70];
evenOddCheck(number);