function condition(odd){
    if(odd %2 ===0){
        return true;
    }
    else{
        return false;
    }
}
const number = condition(10);
console.log(number);


function loopIs(even){
    if(even %2 ===1){
        return true
    }
    return false;
}
console.log(loopIs(20));