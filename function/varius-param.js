 

function checkEvenOdd(even , odd){
    const number = even.length;
    if(number % 2== 0){
        return true
    }
    else{
        return false
    }
}

const output = checkEvenOdd( [ 1, 2, 4,5 , 6 , 6,5,34, 64, 35, 36,76] ,10);
console.log(output);



function doubleNumber( doubler , tripler){
    if(doubler==true){
        console.log(tripler*2);
    }
    else{
        console.log(tripler*4);
    }
}
const doubler = true;
const tripler = 10;
doubleNumber( 15, 10);