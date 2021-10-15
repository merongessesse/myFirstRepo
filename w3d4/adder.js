const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let numbers = [];

function getNumber() {
    readline.question("type in a number or 'stop' when you want to exit: ", num => {
        if (num === 'stop') {
            console.log(numbers.reduce((a1, a2) => a1 + a2));
            readline.close();
        } else {
            numbers.push(Number(num));
            getNumber();
        }
    });
}

getNumber();