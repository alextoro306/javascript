var button = document.querySelector('#start')
var option = document.querySelector('#operation')
button.addEventListener('click', function(){
    var luku1 = parseInt(document.querySelector('#num1').value)
    var luku2 = parseInt(document.querySelector('#num2').value)
    if (option.value == 'add') {
        var summa = luku1 + luku2
        document.querySelector('#result').innerHTML = summa
    }
    else if(option.value == 'sub') {
        var summa = luku1 - luku2
        document.querySelector('#result').innerHTML = summa
    }
    else if(option.value == 'multi') {
        var summa = luku1 * luku2
        document.querySelector('#result').innerHTML = summa
    }
    else {
        var summa = luku1 / luku2
        document.querySelector('#result').innerHTML = summa
    }
})