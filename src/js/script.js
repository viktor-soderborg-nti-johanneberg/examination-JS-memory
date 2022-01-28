// Generera bräde (alla kort är en färg för att visa att de är nervända, kan använda states)
// Vända två kort (visa vad som gömmer sig bakom bakgrundsfärgen)
// Kolla ifall de är likadana (ge poäng & håll de uppvända vid korrekt, vänd ner ifall fel)
// Kolla ifall brädet är tomt/alla par är hittade

let tileMap = document.querySelector('main section');
let types = [1,2,3,4,5,6,7,8,9,10,11,12];
let tiles = []
let flippedTiles = [];
let counter = document.querySelector('main p');
let moves = 0;

for (let i = 0; i < types.length; i++) {
    let tile = {
        type: types[i],
        img: `img/char-${types[i]}.png`
    }
    tiles.push(tile, tile);
};

for(let i = 0; i < tiles.length; i++) {
    let el = `<article><img src="${tiles[i].img}"></article>`
    tileMap.insertAdjacentHTML('beforeend', el);
};
let backgrounds = document.querySelectorAll('main section > article');
let img = document.querySelectorAll('main section article img');
for (let i = 0; i < backgrounds.length; i++) {
    backgrounds[i].addEventListener('click', (e) => {
        displayTile(e.target);
    })
}

function displayTile(element) {
    //flippa kortet och inte tillåta användaren att trycka det igen tills den är flippad tillbaka
    element.parentNode.firstChild.classList.toggle('opacity');
    flippedTiles.push(element.parentNode.firstChild);
    element.parentNode.firstChild.style.pointerEvents = 'none';
    checkTiles();
}

//shuffle array function

function checkTiles() {
    
    console.log(flippedTiles);

    if (flippedTiles.length === 2) {
        updateMoves();

        if (flippedTiles[0].getAttribute('src').split(/[-.]/)[1] === flippedTiles[1].getAttribute('src').split(/[-.]/)[1]) {
            match(flippedTiles);
        } else {
            noMatch(flippedTiles);
        }
    }
}

function match(elements) {
    //ta bort korten men inte HTML objektet för grid
    elements.forEach(el => {
        el.parentNode.classList.add('found');
        el.classList.remove('opacity');
    });
    flippedTiles = []
    gameOver();
}

function noMatch(elements) {
    //vänd om kortet igen
    elements.forEach(el => {
        el.classList.toggle('opacity');
    });
    flippedTiles = [];
}

function updateMoves() {
    moves++;
    counter.innerText = `Antal drag: ${moves}`
}

function gameOver() {
    //Kolla ifall alla articles har klassen "found"
    //Ifall alla har de ändra något på skärmen
    //Annars låt spelet fortsätta
}