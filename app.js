
//function keyword first (most common)
function greet(name) {
    console.log(`Hello, ${name}!`)
}

greet("Seth")
greet(12)
greet(true)

// let response = prompt("Enter your name:")

// greet(response)

function multiply(a, b) {
    return a * b;
}

let twoThingsMultiplied = multiply(true, false)
console.log(twoThingsMultiplied)


function printMultTable(number) {
    for(let i = 1; i <= 10; i++) {
        let result = multiply(number, i);
        console.log(`${i} x ${number} = ${result}`)
    }
}

printMultTable(10)

//function keyword in a stored variable
let add = function(a, b) {
    return a + b;
}

let added = add(1,2);

console.log(added)


//anon function (function without a name) stored in a variable
let add2 = (a, b) => a + b;

let added2 = add2(5, 5);
console.log(added2)


