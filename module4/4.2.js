const apiform = document.querySelector('#ApiForm');
const queryinput = document.querySelector('#query');

apiform.addEventListener('submit', async function(event) {
    event.preventDefault();
    const koodi = queryinput.value;
    const tulos = await fetch(`https://api.tvmaze.com/search/shows?q=${koodi}`);
    const data = await tulos.json();
    console.log(data);

});