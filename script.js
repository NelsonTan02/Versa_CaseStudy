let numbers = [];

for(let i = 0; i < 100; i++){
    numbers.push(i+1);
}

let newNumbers = numbers.map(convertFunction);

function convertFunction(num){
    if(num % 3 === 0 && num % 5 === 0){
        return "BIG BANG"
    }
    else if(num % 3 === 0){
        return "BIG";
    }
    else if(num % 5 === 0){
        return "BANG";
    }
    return String(num);
}

let jsonData =  JSON.stringify(newNumbers);

const fs = require('fs');
fs.writeFile('output.json', jsonData, (err) => {
    if(err) throw err;
    console.log("Results output in output.json!");
})

