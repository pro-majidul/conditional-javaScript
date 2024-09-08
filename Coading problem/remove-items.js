const number = [ 10, 23,33, 32,54,44,33,22,21,23,18,44,32,25,77]
const name = ['Lalbagh Fort','Ahsan Manzil','Panam City','Mahansthangarh','Shat Gambuj Mosque','Liberation War Museum','Mainamati'];
function removeSameItems(items){
    const uniqueItem =[];
    for(const item of items){
        if(uniqueItem.includes(item)===false){
            uniqueItem.push(item);
        }
    }
    return uniqueItem
}
const result = removeSameItems(number);
const total = removeSameItems(name);
console.log(result , total);