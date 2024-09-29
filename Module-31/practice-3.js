const instructor = [
    { name: 'Nadi', age: 28, position: 'Senior' },
    { name: 'Akil', age: 26, position: 'Junior' },
    { name: 'Sobuj', age: 30, position: 'Senior' }
]

for(const name of instructor){
   if(name.position === 'Senior'){
    console.log(name);
   }
}

// or 
// const result = instructor.filter(n => n.position==='Senior');
// console.log(result);