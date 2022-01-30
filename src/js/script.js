let main = document.querySelector('main');
let tileMap = document.querySelector('main section');
let types = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12];
let tiles = []
let flippedTiles = [];
let counter = document.querySelector('main p');
let moves = 0;
let clearedTiles = []
let backgrounds = "";

// Blanda kortens position
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

// Generera bräde, alla kort är en färg för att visa att de är nervända
function startGame() {
    types = shuffle(types);
    
    for (let i = 0; i < types.length; i++) {
        let tile = {
            type: types[i],
            img: `img/char-${types[i]}.png`
        }
        tiles.push(tile);
    };
    
    for(let i = 0; i < tiles.length; i++) {
        let el = `<article><img src="${tiles[i].img}"></article>`
        tileMap.insertAdjacentHTML('beforeend', el);
    };

    backgrounds = document.querySelectorAll('main section > article');

    for (let i = 0; i < backgrounds.length; i++) {
        backgrounds[i].addEventListener('click', (e) => {
            displayTile(e.target);
        })
    };
}

// Vända två kort (visa vad som gömmer sig bakom bakgrundsfärgen)
function displayTile(element) {
    // Flippa kortet och inte tillåta användaren att trycka det igen tills den är flippad tillbaka
    element.classList.toggle('opacity');
    flippedTiles.push(element);
    element.style.pointerEvents = 'none';
    element.parentNode.style.pointerEvents = 'none';
    checkTiles();
}

// Kolla ifall de är likadana
function checkTiles() {
    
    if (flippedTiles.length === 2) {
        updateMoves();
        
        if (flippedTiles[0].getAttribute('src').split(/[-.]/)[1] === flippedTiles[1].getAttribute('src').split(/[-.]/)[1]) {
            match(flippedTiles);
        } else {
            noMatch(flippedTiles);
        }
    }
}

// Visa att korten är rätta
function match(elements) {
    // Ändra bakgrundsfärgen för korten så man vet att man har hittat dem
    elements.forEach(el => {
        el.parentNode.classList.add('found');
        el.classList.remove('opacity');
        clearedTiles.push(el.parentNode);
    });
    flippedTiles = []
    gameOver();
}

// Vänd ner ifall fel och tillåt användaren att trycka på dem igen
function noMatch(elements) {
    // Vänd om kortet igen
    elements.forEach(el => {
        el.classList.toggle('opacity');
        el.style.pointerEvents = '';
        el.parentNode.style.pointerEvents = '';
    });
    flippedTiles = [];
}

function updateMoves() {
    moves++;
    counter.innerText = `Antal drag: ${moves}`
}

// Kolla ifall brädet är tomt/alla par är hittade
function gameOver() {
    let victoryScreen = 
    `<h2>Grattis du klarade det med ${moves} drag!</h2>
    <button onclick="location.reload()">Play again?</button>`

    if (clearedTiles.length === 24) {
        tileMap.remove();
        counter.remove();
        main.insertAdjacentHTML('afterbegin', victoryScreen);
    }
}

startGame();