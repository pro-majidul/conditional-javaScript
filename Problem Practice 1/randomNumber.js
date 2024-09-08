function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate a random number between 10 and 20
const randomNumber = getRandomNumber(10, 20);
console.log(randomNumber);
