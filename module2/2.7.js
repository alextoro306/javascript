let number = parseInt(prompt("Highest eye number"))
function noppa(number) {
    let randomLuku = Math.floor(Math.random() * number) + 1;
    return randomLuku;
}

let luku = 0    
while (luku != number) {
    luku = noppa(number);
    var Uusi = document.createElement('ul');
    Uusi.innerHTML = "Nopan silmäluku: " + luku;
    document.getElementById('lista').appendChild(Uusi);
}