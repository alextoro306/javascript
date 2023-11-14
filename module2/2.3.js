let dogs = []
for (let i = 1; i <= 5; i++) {
    nimi = prompt("Enter the name of the dog " + i)
    dogs.push(nimi)
    console.log(nimi)
} dogs.sort()
for (let i = dogs.length - 1; i >= 0; i--) {
    var koira = dogs[i]
    var Uusi = document.createElement('ul');
    Uusi.innerHTML = koira;
    document.getElementById('lista').appendChild(Uusi)
}