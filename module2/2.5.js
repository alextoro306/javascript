let numbers = [];
let input = 0
while (true) {
    let input = parseInt(prompt("Enter a number (Same number stops)"))
    if (numbers.includes(input)) {
        alert("Number has already been given!")
        break
    } else {
        numbers.push(input)
    }
} numbers.sort(function(a,b){return a-b;})
console.log(numbers)