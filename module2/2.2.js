participants = parseInt(prompt("Enter the amount of participants: "));
let names = []
for (let i = 1; i <= participants; i++) {
    nimi = prompt("Enter the name of participant " + i)
    names.push(nimi)
    console.log(nimi)
}
names.sort();
for (let i = 0; i < names.length; i++) {
    var Lista = names[i]
    var UusiOl = document.createElement('ol');
    UusiOl.innerHTML = Lista;
    document.getElementById('lista').appendChild(UusiOl)
}