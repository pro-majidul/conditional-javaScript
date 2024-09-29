const number = [33,50,79,78,90,101,30];
const findout = (num)=>{
    if(num%10==0){
        return num;
    }
}
const result = number.filter(findout);
console.log(result);
// const result = number.find(findout);
// console.log(result);