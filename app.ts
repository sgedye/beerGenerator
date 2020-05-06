document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById('randomBeer')
  const beerTitle = document.getElementById('beerTitle')
  const beerDesc = document.getElementById('beerDesc')

  const getRandomBeer = e => {
    e.preventDefault()
    fetch('https://api.punkapi.com/v2/beers/random')
      .then(response => response.json())
      .then(data => {
        if (beerTitle) beerTitle.innerHTML = `${data[0].name} (${data[0].abv}abv)`
        if (beerDesc) beerDesc.innerHTML = data[0].description
      })
  }

  if (btn) {
    btn.addEventListener('click', e => {
      console.log(e, typeof(e))
      getRandomBeer(e)
    })
  }

})