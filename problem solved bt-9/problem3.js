function deleteInvalids(arrays){

    let result = [];
    for(const array of arrays){
        if(typeof array ==='number' && isNaN(array)==false){
            result.push(array)
        }
    }
    return result

}


const arrayIs = [NaN,1,12, 0,-1,undefined,null, "I",{num:[1,2,3]},[1,2,3],{num:2},{ob:"Lala"}, [1,2],];
const totalResult = deleteInvalids(arrayIs);
console.log(totalResult);
