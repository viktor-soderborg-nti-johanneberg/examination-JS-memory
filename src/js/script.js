let Game = {
    tiles: [
        {img: 'img/char-1.png', flipped: false, found: false, type: 1, id: 1},
        {img: 'img/char-1.png', flipped: false, found: false, type: 1, id: 2},
        {img: 'img/char-2.png', flipped: false, found: false, type: 2, id: 3},
        {img: 'img/char-2.png', flipped: false, found: false, type: 2, id: 4},
        {img: 'img/char-3.png', flipped: false, found: false, type: 3, id: 5},
        {img: 'img/char-3.png', flipped: false, found: false, type: 3, id: 6},
        {img: 'img/char-4.png', flipped: false, found: false, type: 4, id: 7},
        {img: 'img/char-4.png', flipped: false, found: false, type: 4, id: 8},
        {img: 'img/char-5.png', flipped: false, found: false, type: 5, id: 9},
        {img: 'img/char-5.png', flipped: false, found: false, type: 5, id: 10},
        {img: 'img/char-6.png', flipped: false, found: false, type: 6, id: 11},
        {img: 'img/char-6.png', flipped: false, found: false, type: 6, id: 12},
        {img: 'img/char-7.png', flipped: false, found: false, type: 7, id: 13},
        {img: 'img/char-7.png', flipped: false, found: false, type: 7, id: 14},
        {img: 'img/char-8.png', flipped: false, found: false, type: 8, id: 15},
        {img: 'img/char-8.png', flipped: false, found: false, type: 8, id: 16},
        {img: 'img/char-9.png', flipped: false, found: false, type: 9, id: 17},
        {img: 'img/char-9.png', flipped: false, found: false, type: 9, id: 18},
        {img: 'img/char-10.png', flipped: false, found: false, type: 10, id: 19},
        {img: 'img/char-10.png', flipped: false, found: false, type: 10, id: 20},
        {img: 'img/char-11.png', flipped: false, found: false, type: 11, id: 21},
        {img: 'img/char-11.png', flipped: false, found: false, type: 11, id: 22},
        {img: 'img/char-12.png', flipped: false, found: false, type: 12, id: 23},
        {img: 'img/char-12.png', flipped: false, found: false, type: 12, id: 24},
    ],
    moves: 0,
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

            tile.classList = "";

            if (tile.flipped) {
                el.classList.add('opacity');
            }

            if (tile.found) {
                el.classList.add('found');
            }
            
            el.innerHTML = `<img src="${tile.img}" alt="tile">`;

            el.addEventListener('click', (e) => {
                // handle click
                this.handleClick(i);
            })
            main.appendChild(el);
        };

        let filter = this.tiles.filter(tile => tile.found)
        if (filter.length === this.tiles.length) {
            this.gameOver();
        }
    },
    updateMoves() {
        this.moves++
        this.counter.innerHTML = `<p>Antal drag: ${this.moves}</p>`;
    },
    handleClick(i) {
        this.tiles[i].flipped = true;
        this.clicked.push(this.tiles[i]);
        
        this.updateUI();

        if (this.clicked.length === 2) {
            if (this.clicked[0].id === this.clicked[1].id) {
                this.clicked.pop();
            } else {
                this.updateMoves();
                setTimeout(() => {
                    if (this.clicked[0].type === this.clicked[1].type) {
                        this.clicked[0].found = true;
                        this.clicked[1].found = true;
                        this.clicked[0].flipped = false;
                        this.clicked[1].flipped = false;
                        this.clicked = [];
                    } else {
                        this.clicked[0].flipped = false;
                        this.clicked[1].flipped = false;
                        this.clicked = [];
                    }
                    this.updateUI();
                }, 1000);
            }
        }
    },
    startGame() {
        this.shuffle(this.tiles)
        this.updateUI();
    },
    gameOver() {
        let victoryScreen = 
        `<h2>Grattis du klarade det med ${this.moves} drag!</h2>
        <img src="img/victory.gif" alt="Victory Gif">
        <button onclick="location.reload()">Play again?</button>`

        document.querySelector('main').innerHTML = victoryScreen;
    },
}

Game.startGame();