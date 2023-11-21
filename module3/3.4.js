'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];
var target = document.getElementById('target')
var select = document.createElement('select')
for (var student of students) {
  var optionElement = document.createElement('option')
  optionElement.value = student.id
  optionElement.textContent = student.name
  select.appendChild(optionElement)
  target.appendChild(optionElement)
}