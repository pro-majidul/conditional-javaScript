const oddnums = [1, 3, 5, 7, 9];
let newA = []
// const eventNumber = (nums)=>{
//     for(const num of nums){
//         if(num%2==1){
//            const sum = num + 1;
//             newA.push(sum)
//         }
//     }
//     return newA;


// }
// eventNumber([]);
const result = oddnums.map(num => {
    if (num % 2 == 1) {

        newA.push(num + 1)
    }
});

console.log(newA);
