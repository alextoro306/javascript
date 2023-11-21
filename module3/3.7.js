var target = document.querySelector('#target')
var trigger = document.querySelector('#trigger')

trigger.addEventListener('mouseover', function() {
    target.src = 'img1/picB.jpg'
});

trigger.addEventListener('mouseout', function() {
    target.src = 'img1/picA.jpg'
});