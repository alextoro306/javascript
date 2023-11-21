var target = document.getElementById('target');
const names = ['John', 'Paul', 'Jones'];
for (i = 0; i < names.length; i++) {
    var li = document.createElement('li');
    li.innerHTML = names[i]
    target.appendChild(li)
}