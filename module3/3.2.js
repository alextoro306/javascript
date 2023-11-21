var target = document.getElementById('target');
var li = document.createElement('li');
var li2 = document.createElement('li')
var li3 = document.createElement('li')
li.innerHTML = 'First item';
li2.innerHTML = 'Second item';
li3.innerHTML = 'Third item';
target.appendChild(li);
target.appendChild(li2);
target.appendChild(li3);
li2.classList.add('my-item')