document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById('randomBeer')
  const beerTitle = document.getElementById('beerTitle')
  const beerDesc = document.getElementById('beerDesc')

  const getRandomBeer = e => {
    e.preventDefault()
    fetch('https://api.punkapi.com/v2/beers/random')
      .then(response => response.json())
      .then(data => {
        beerTitle.innerHTML = `${data[0].name} (${data[0].abv}abv)`
        beerDesc.innerHTML = data[0].description
      })
  }

  btn.addEventListener('click', e => getRandomBeer(e))

})