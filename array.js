//  Practice task 1
 
 let fruits = [ 'Apple', 'peyara', 'Orange', ' Jackfruit', 'Banana'];
 console.log(fruits.length);
//  index ber kora 
console.log(fruits[3]);
// sese element add kora
 console.log(fruits.push('mango'));
 // direct index element add kora
fruits[`2`] = 'Jambura';
console.log(fruits)


//practice task 2

let touristDestination = ['Bangladesh', 'India', 'Nepal']
touristDestination.push('Sajek');
console.log(touristDestination);
touristDestination.push('Netherland', 'japan')
console.log(touristDestination);
touristDestination.pop();
console.log(touristDestination);


// practice task 3

let bookContaining = [ 'Bangla', 'English','Mathmatic', ' Python Programming', 'Java', 'JavaScript'];
console.log(bookContaining);
console.log(bookContaining.includes('javaScript'));
console.log(bookContaining.includes('JavaScript'));



// practice 5 

let bookShail = ['literature', 'Poem', 'Story'];
console.log(bookShail);
let bookShail2 = ['Written Book', 'MCQ Test', 'Viva Books'];
console.log(bookShail2);
let addition = bookShail.concat(bookShail2);
console.log(addition);