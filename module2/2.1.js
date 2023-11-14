var array = [];
for (var i = 0; i < 5; i++) {
    luku = parseInt(prompt("Enter 5 numbers"))
    array.push(luku)
};
for (let i = array.length - 1; i >=0; i--){
    console.log(array[i])
}