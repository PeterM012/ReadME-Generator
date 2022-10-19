const statement = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let answer = [];

statement.question(
    'What is your Github username?', name => {
        console.log(name); 
        answer.push(name)
    }
)