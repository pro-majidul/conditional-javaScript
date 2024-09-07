// miles to km converted


function milesToKm(miles){
    const kilo = miles / 1.60934;
    return kilo;
}
// const result = milesToKm(40);
// console.log(result);


// kilometer to miles convertation 

function kmToMiles(km){
    const miles = km * 0.9999975145;
    return miles;

}
const total = kmToMiles(45);
console.log(total);