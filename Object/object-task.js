// first task 
const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
}
console.log(colors['golden rod']);



// second task 
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
car['passanger capacity'] = 5;
console.log(car);


//third task
const students = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};
console.log(students.physics.marks);


//fourth task
let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
const value = Object.keys(student);
console.log(value);


// fifth task
let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};

for( const prop in myObject){
    console.log('key :' , prop , '|' , 'type :' , typeof(myObject[prop]));
}