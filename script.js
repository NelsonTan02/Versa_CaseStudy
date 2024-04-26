let numbers = []; 

//Populate 1 to 100 into the array
for(let i = 0; i < 100; i++){
    numbers.push(i+1);
}

//Map function for conversion 
let newNumbers = numbers.map(convertFunction);

//Function to check if numbers are divisible by 3, 5 or both
function convertFunction(num){
    if(num % 3 === 0 && num % 5 === 0){
        return "BIG BANG";
    }
    else if(num % 3 === 0){
        return "BIG";
    }
    else if(num % 5 === 0){
        return "BANG";
    }
    return String(num);
}

//Converts to JSON Notation
let jsonData =  JSON.stringify(newNumbers);

const fs = require('fs'); //Use Node Js File System
fs.writeFile('output.json', jsonData, (err) => { //Output results into output.json file
    if (err) throw err;
    console.log("Results output in output.json!");
})

