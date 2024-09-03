const sentence = 'I am learning web dev';
for( var letters of sentence){
    console.log(letters)
}                                                                    



// others away to revers system 


let reverse = '';
for( const letters of sentence ){
    reverse = letters + reverse;
}
console.log(reverse)




const x = ""
if(!x.length){
console.log("Hey")
}else{
console.log("Hi")
}