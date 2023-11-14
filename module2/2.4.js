let numbers = [];
input = 1
while (input != 0) {
    input = parseInt(prompt("Enter a number (0 stops): "))
    numbers.push(input)
} numbers.sort(function(a,b){return a-b;})
for (let i = numbers.length - 1; i >= 0; i--) {
    number = numbers[i]
    console.log(number)
}