// practice 1

let burgerPrice = 700;
if (burgerPrice > 500) {
    console.log("You Can a free cake")
}
else {

    console.log("You can pay extra 30 taka to cake")
}
// nested 
let BurgerPrice = 300;
BurgerPrice > 500 ? console.log("You can a free cake ") : console.log("You can pay extra 30 taka to cake");

// practice 2

// if else condition

let weight = 68;
let height = 2.9832;
let BMI = weight / height;
if (BMI < 18.5) {
    console.log("You are Underweight");
}
else {
    if (BMI >= 18.5 && BMI <= 24.9) {
        console.log("You are normal");
    }
    else {
        if (BMI >= 25.5 && BMI <= 29.9) {
            console.log("You are Overweight");
        }
        else {
            console.log("Yoy are Obese");
        }
    }
}


// nested if else condition

let bodyMasIndex = 30.5;
bodyMasIndex < 18.5 ? console.log("you are underweight") : bodyMasIndex >= 18.5 && bodyMasIndex <= 24.9 ? console.log(" you are normal") : bodyMasIndex >= 25 && bodyMasIndex <= 29.9 ? console.log("you are overweight") : console.log("you are Obese");



// practice 3

// if else  condition

let marks = 78;
if (marks >= 90 && marks <= 100) {
    console.log("YOU GOT A");
}
else {
    if (marks >= 80 && marks <= 89) {
        console.log("YOU GOT B");
    }
    else {
        if (marks >= 70 && marks <= 79) {
            console.log("YOU GOT C ");
        }
        else {
            if (marks >= 60 && marks <= 69) {
                console.log("YOU GOT D");
            }
            else {
                console.log("YOU GOT F");
            }
        }
    }
}

// tarneri if else condition

let point = 95;
point >= 90 && point <= 100 ? console.log("YOU GOT GPA A") : point >= 80 && point <= 89 ? console.log('YOU GOT GPA B') : point >= 70 && point <= 79 ? console.log("YOU GOT GPA C") : point >= 60 && point <= 69 ? console.log("YOU GOT GPA D") : console.log("YOU GOT F");


// practice 4

let myNumber = 86;
let friendNumber = 50;
if (myNumber > 80) {
    if (friendNumber > 80) {
        console.log("go to lunch");
    }
    else if (friendNumber >= 60 && friendNumber < 80) {
        console.log("Good luck next time");

    }
    else if (friendNumber >= 40 && friendNumber < 60) {
        console.log("keep your friend massege unseen");
    }
    else if (friendNumber < 40) {
        console.log("block this friend");
    }
}

else {
    console.log(" go to home and sleep and act sad")
}

// practice 5

// ternari condition 

let num1 = 40;
let num2 = 30;
let result = num1 + num2;
num1 > num2 ? console.log(num1 * num1) : console.log(result);

// normal if else 
let firstNum = 30;
let lastNum = 20;
if (firstNum > lastNum) {
    console.log(firstNum * lastNum);
}
else {
    console.log(result);
}

//practice 6

let ticketPrize = 800;
let student = true;
let age = 65;
if (age < 10) {
    console.log("free")
}
else if (age >= 60) {
    var Discount = ticketPrize * 15 / 100;
    console.log( "senior citizen : " + Discount);
}
else if (student === true) {
    var studentDiscount = ticketPrize * 50 / 100;
    console.log("student discount : " + studentDiscount) 
}
else{
    console.log( "regular ticket prize " + ticketPrize);
}
