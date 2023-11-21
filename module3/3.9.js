var calculation = document.querySelector('#calculation')
var start = document.querySelector('#start')
var result = document.querySelector('#result')

start.addEventListener('click', function() {
  var syote = calculation.value
  if (syote) {
    var operaattorit = ['+', '-', '*', '/'];
    var op;
    for (var operaattori of operaattorit) {
      if (syote.includes(operaattori)){
        op = operaattori
        break;
      }
    }
    if (op) {
      var [num1, num2] = syote.split(op)
      let tulos;
      switch (op) {
        case '+':
          tulos = parseInt(num1) + parseInt(num2)
          break;
        case '-':
          tulos = parseInt(num1) - parseInt(num2)
          break;
        case '*':
          tulos = parseInt(num1) * parseInt(num2)
          break;
        case '/':
          tulos = parseInt(num1) / parseInt(num2)
          break;
      }
      result.textContent = 'Result is ' + tulos
    }
  } 
})