function vowels(strings) {
    let count = [];
    string.toLowerCase();
    for (const string of strings) {
        if (string == 'a' || string == 'e' || string == 'i' || string == 'o' || string == 'u') {
            count.push(string)
        }
    }
    const counter = count.length;
    return counter;
    
}

const string = "Success is not the key to happiness";
const output = vowels(string);
console.log(output);