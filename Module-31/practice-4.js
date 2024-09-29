const peoples = [
    { name: 'meena', age: 20 },
    { name: 'Rina', age: 15 },
    { name: 'Suchorita', age: 22 },
]


// let sum = 0;
// for( const people of peoples){
//    sum = sum + people.age;
// }
// console.log(sum);


// or 
const result = peoples.reduce((accumulator , person)=>accumulator+ person.age ,0);
console.log(result);


// or  names to ages

// const result = peoples.reduce((accumulator , open)=> {
//     accumulator[open.name] = open.age;
//     return accumulator;
// }, {});
// console.log(result);
