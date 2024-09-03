const person = {
    name : " Samir Uddin",
    age : 18,
    profession : 'Developer',
    Sellary : 2500,
    Married : true,
    visited : 'Nepal'
}
console.log(person);
 

// // value set by dot operator
person.Married = false;
console.log(person);


// // value set by bracket

person.visited = ['Japan', 'Vutan' ,' Malyasiya','Afganisthan'];
console.log(person.visited);
console.log(person);


// string er vitor property  rekhe value access

const years = 'profession';
 person[years] = 'devops';
 
 const boyos = 'age';
 person[boyos]= 48;
 console.log(person);
 
 
