document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById('randomBeer');
    var beerTitle = document.getElementById('beerTitle');
    var beerDesc = document.getElementById('beerDesc');
    var getRandomBeer = function (e) {
        e.preventDefault();
        fetch('https://api.punkapi.com/v2/beers/random')
            .then(function (response) { return response.json(); })
            .then(function (data) {
            beerTitle.innerHTML = data[0].name + " (" + data[0].abv + "abv)";
            beerDesc.innerHTML = data[0].description;
        });
    };
    btn.addEventListener('click', function (e) { return getRandomBeer(e); });
});
