

// function findLongestWord(str) {
//     // Split the string into an array of words
//     const words = str.split(' ');

//     // Initialize the longest word as an empty string
//     let longestWord = '';

//     // Iterate through the array of words
//     for (const word of words) {
//         // Check if the current word is longer than the longestWord found so far
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }

//     return longestWord;
// }

// // Sample input
// const sampleInput = "I am learning Programming to become a programmer";
// // Find the longest word
// console.log(findLongestWord(sampleInput));




function latestNumber(str) {
    const words = str.split(' ')
    let longestword = '';
    for (const word of words) {
        if (word.length > longestword.length) {
            longestword = word;
        }
    }
    return longestword;
}

const strInput = ' I am learning Programming to become a programmer';
const total = latestNumber(strInput);
console.log(total);