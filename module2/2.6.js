function noppa() {
    let randomLuku = Math.floor(Math.random() * 6) + 1;
    return randomLuku;
}

let luku = 0    
while (luku != 6) {
    luku = noppa();
    var Uusi = document.createElement('ul');
    Uusi.innerHTML = "Nopan silmäluku: " + luku;
    document.getElementById('lista').appendChild(Uusi);
}