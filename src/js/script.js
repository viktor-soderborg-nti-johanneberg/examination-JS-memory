// 1.0
// let main = document.querySelector('main');
// let tileMap = document.querySelector('main section');
// let types = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12];
// let tiles = []
// let flippedTiles = [];
// let counter = document.querySelector('main p');
// let moves = 0;
// let clearedTiles = []
// let backgrounds = "";

// Blanda kortens position
// function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         let j = Math.floor(Math.random() * (i + 1));
//         let temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//     }
//     return array;
// }

// Generera bräde, alla kort är en färg för att visa att de är nervända
// function startGame() {
//     types = shuffle(types);
    
//     for (let i = 0; i < types.length; i++) {
//         let tile = {
//             img: `img/char-${types[i]}.png`
//         }
//         tiles.push(tile);
//     };
    
//     for(let i = 0; i < tiles.length; i++) {
//         let el = `<article><img src="${tiles[i].img}"></article>`
//         tileMap.insertAdjacentHTML('beforeend', el);
//     };

//     backgrounds = document.querySelectorAll('main section > article');

//     for (let i = 0; i < backgrounds.length; i++) {
//         backgrounds[i].addEventListener('click', (e) => {
//             displayTile(e.target);
//         })
//     };
// }

// Vända två kort (visa vad som gömmer sig bakom bakgrundsfärgen)
// function displayTile(element) {
    // Flippa kortet och inte tillåta användaren att trycka det igen tills den är flippad tillbaka
//     element.parentNode.classList.toggle('opacity');
//     flippedTiles.push(element);
//     element.style.pointerEvents = 'none';
//     element.parentNode.style.pointerEvents = 'none';
//     setTimeout(checkTiles,1000);
// }

// Kolla ifall de är likadana
// function checkTiles() {
    
//     if (flippedTiles.length === 2) {
//         updateMoves();
        
//         if (flippedTiles[0].getAttribute('src').split(/[-.]/)[1] === flippedTiles[1].getAttribute('src').split(/[-.]/)[1]) {
//             match(flippedTiles);
//         } else {
//             noMatch(flippedTiles);
//         }
//     }
// }

// Visa att korten är rätta
// function match(elements) {
//     // Ändra bakgrundsfärgen för korten så man vet att man har hittat dem
//     elements.forEach(el => {
//         el.parentNode.classList.add('found');
//         el.parentNode.classList.remove('opacity');
//         clearedTiles.push(el.parentNode);
//     });
//     flippedTiles = []
//     gameOver();
// }

// Vänd ner ifall fel och tillåt användaren att trycka på dem igen
// function noMatch(elements) {
    // Vänd om korten igen
//     elements.forEach(el => {
//         el.parentNode.classList.toggle('opacity');
//         el.style.pointerEvents = '';
//         el.parentNode.style.pointerEvents = '';
//     });
//     flippedTiles = [];
// }

// function updateMoves() {
//     moves++;
//     counter.innerText = `Antal drag: ${moves}`
// }

// Kolla ifall brädet är tomt/alla par är hittade
// function gameOver() {
//     let victoryScreen = 
//     `<h2>Grattis du klarade det med ${moves} drag!</h2>
//     <button onclick="location.reload()">Play again?</button>`

//     if (clearedTiles.length === types.length) {
//         tileMap.remove();
//         counter.remove();
//         main.insertAdjacentHTML('afterbegin', victoryScreen);
//     }
// }

// Förbereda och generera spelet när sidan laddas in
// startGame();

// 2.0
// let main = document.querySelector('main');
// let tileMap = document.querySelector('main section');
// let types = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12];
// let flippedTiles = [];
// let counter = document.querySelector('main p');
// let moves = 0;
// let clearedTiles = []
// let backgrounds = "";
// let background = [];

// Blanda kortens position
// function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         let j = Math.floor(Math.random() * (i + 1));
//         let temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//     }
//     return array;
// }

// Generera bräde, alla kort är en färg för att visa att de är nervända
// function startGame() {
//     types = shuffle(types);
    
//     for (let i = 0; i < types.length; i++) {
//         let tile = {
//             img: `img/char-${types[i]}.png`,
//             flipped: false,
//             found: false,
//             type: types[i]
//         }
//         let el = `<article><img src="${tile.img}"></article>`
//         tileMap.insertAdjacentHTML('beforeend', el);
//     };
//     backgrounds = document.querySelectorAll('main section > article');

//     for (let i = 0; i < backgrounds.length; i++) {
//         backgrounds[i].addEventListener('click', (e) => {
//             displayTile(e.target, e.path[1]);
//         })
//     };
// }

// Vända två kort (visa vad som gömmer sig bakom bakgrundsfärgen)
// function displayTile(element, bg) {
    // Flippa kortet och inte tillåta användaren att trycka det igen tills den är flippad tillbaka
    // tile.flipped = true;
//     background.push(bg);
//     bg.classList.toggle('opacity');
//     flippedTiles.push(element);
//     element.style.pointerEvents = 'none';
//     bg.style.pointerEvents = 'none';
    // setTimeout(checkTiles,1000);
// }

// Kolla ifall de är likadana
// function checkTiles() {
    
//     if (flippedTiles.length === 2) {
//         updateMoves();

//         if (flippedTiles[0].getAttribute('src').split(/[-.]/)[1] === flippedTiles[1].getAttribute('src').split(/[-.]/)[1]) {
            // if(tile1.type === tile2.type) {}
            // match(flippedTiles, background);
//         } else {
//             noMatch(flippedTiles, background);
//         }
//     }
// }

// Visa att korten är rätta
// function match(elements, backg) {
    // Ändra bakgrundsfärgen för korten så man vet att man har hittat dem
    // backg.forEach(background => {
    //     background.classList.add('found');
    //     background.classList.remove('opacity');
    //     clearedTiles.push(background);
    // });
    // flippedTiles = [];
    // background = [];
    // tile1.found = true;
    // tile1.flipped = false,
    // tile2.found = true;
    // tile2.flipped = false
    // gameOver();
// }

// Vänd ner ifall fel och tillåt användaren att trycka på dem igen
// function noMatch(elements, backg) {
    // Vänd om korten igen
    // backg.forEach(background => {
    //     background.classList.toggle('opacity');
    //     elements.forEach(el => {
    //         el.style.pointerEvents = ''  
    //     });
    //     background.style.pointerEvents = '';
    // });
    // flippedTiles = [];
    // background = [];
    // tile1.flipped = false;
    // tile2.flipped = false;
// }

// function updateMoves() {
//     moves++;
    // counter.innerText = `Antal drag: ${moves}`
// }

// Kolla ifall brädet är tomt/alla par är hittade
// function gameOver() {
//     let victoryScreen = 
//     `<h2>Grattis du klarade det med ${moves} drag!</h2>
//     <button onclick="location.reload()">Play again?</button>`

//     if (clearedTiles.length === types.length) {
//         tileMap.remove();
//         counter.remove();
//         main.insertAdjacentHTML('afterbegin', victoryScreen);
//     }
// }

// Förbereda och generera spelet när sidan laddas in
// startGame();

// 2.1
let Game = {
    tiles: [
        {img: 'img/char-1.png', flipped: false, found: false, type: 1},
        {img: 'img/char-1.png', flipped: false, found: false, type: 1},
        {img: 'img/char-2.png', flipped: false, found: false, type: 2},
        {img: 'img/char-2.png', flipped: false, found: false, type: 2},
        {img: 'img/char-3.png', flipped: false, found: false, type: 3},
        {img: 'img/char-3.png', flipped: false, found: false, type: 3},
        {img: 'img/char-4.png', flipped: false, found: false, type: 4},
        {img: 'img/char-4.png', flipped: false, found: false, type: 4},
        {img: 'img/char-5.png', flipped: false, found: false, type: 5},
        {img: 'img/char-5.png', flipped: false, found: false, type: 5},
        {img: 'img/char-6.png', flipped: false, found: false, type: 6},
        {img: 'img/char-6.png', flipped: false, found: false, type: 6},
        {img: 'img/char-7.png', flipped: false, found: false, type: 7},
        {img: 'img/char-7.png', flipped: false, found: false, type: 7},
        {img: 'img/char-8.png', flipped: false, found: false, type: 8},
        {img: 'img/char-8.png', flipped: false, found: false, type: 8},
        {img: 'img/char-9.png', flipped: false, found: false, type: 9},
        {img: 'img/char-9.png', flipped: false, found: false, type: 9},
        {img: 'img/char-10.png', flipped: false, found: false, type: 10},
        {img: 'img/char-10.png', flipped: false, found: false, type: 10},
        {img: 'img/char-11.png', flipped: false, found: false, type: 11},
        {img: 'img/char-11.png', flipped: false, found: false, type: 11},
        {img: 'img/char-12.png', flipped: false, found: false, type: 12},
        {img: 'img/char-12.png', flipped: false, found: false, type: 12}
    ],
    moves: -1,
    counter: document.querySelector('main p'),
    clicked: [],

    shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    },
    updateUI() {

        let main = document.querySelector('main section');
        main.innerHTML = '';

        for (let i = 0; i < this.tiles.length; i++) {

            let tile = this.tiles[i];
            let el = document.createElement('article');

            if (tile.flipped) {
                el.classList.add('opacity');
            }

            if (tile.found) {
                el.classList.add('found');
            }
            
            el.innerHTML = `<img src="${tile.img}">`;

            el.addEventListener('click', (e) => {
                // handle click
                this.handleClick(i);
            })
            main.appendChild(el);
        };

        // Update moves
        this.moves++
        this.counter.innerHTML = `<p>Antal drag: ${this.moves}</p>`;

        // if(all tiles.found = true) {
            // gameOver();
        // }
    },
    handleClick(i){
        this.tiles[i].flipped = true;
        this.clicked.push(this.tiles[i]);

        if (this.clicked.length === 2) {
            setTimeout(() => {
                if (this.clicked[0].type === this.clicked[1].type) {
                    console.log(this.clicked);
                    this.clicked[0].found = true;
                    this.clicked[1].found = true;
                    this.clicked = [];
                } else {
                    console.log(this.clicked);
                    this.clicked[0].flipped = false;
                    this.clicked[1].flipped = false;
                    this.clicked = [];
                }
            }, 1000);
        }
        this.updateUI();
    },
    startGame() {
        this.shuffle(this.tiles)
        this.updateUI();
    },
    gameOver() {
        let victoryScreen = 
        `<h2>Grattis du klarade det med ${this.moves} drag!</h2>
        <button onclick="location.reload()">Play again?</button>`

        document.querySelector('main').insertAdjacentHTML('afterbegin', victoryScreen);
    },
}

Game.startGame();