const apiform = document.querySelector('#ApiForm');
const queryinput = document.querySelector('#query');
const results = document.querySelector('#results')

apiform.addEventListener('submit', async function(event) {
  results.innerHTML = ''
  event.preventDefault();
  const query = queryinput.value;
  const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
  const data = await response.json();

  for (const result of data) {
    const article = document.createElement('article');

    const nameHeader = document.createElement('h2');
    nameHeader.textContent = result.show.name;
    article.appendChild(nameHeader);

    const detailsLink = document.createElement('a');
    detailsLink.textContent = 'View details';
    detailsLink.href = result.show.url;
    detailsLink.target = '_blank';
    article.appendChild(detailsLink);

    const imgElement = document.createElement('img');
    imgElement.src = result.show.image?.medium
    imgElement.style.display = 'flex';
    imgElement.style.position = 'left';
    imgElement.alt = result.show.name;
    article.appendChild(imgElement);


    const summaryDiv = document.createElement('div');
    summaryDiv.innerHTML = '<b>Summary:</b>' + result.show.summary;
    article.appendChild(summaryDiv);

    results.appendChild(article);
  }
});