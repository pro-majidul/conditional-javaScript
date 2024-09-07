// height check 

function inchiToFit(inchi) {
    const fet = inchi / 12;
    return fet;
}
// const height = 75;
// const result = inchiToFit(height);
// console.log(result);

function lomba(inc) {
    const feet = inc / 12;
    const feetNumber = parseInt(feet);
    const inchiNumber = inc % 12;
    const result = feetNumber + " Fit " + inchiNumber + " inchi " ;
    return result
}
const total = lomba(76);
console.log(total);