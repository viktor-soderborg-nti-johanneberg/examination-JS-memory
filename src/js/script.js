// Generera bräde (alla kort är en färg för att visa att de är nervända, kan använda states)
// Vända två kort (visa vad som gömmer sig bakom bakgrundsfärgen)
// Kolla ifall de är likadana (ge poäng & håll de uppvända vid korrekt, vänd ner ifall fel)
// Kolla ifall brädet är tomt/alla par är hittade


// TEST KORT
// let img = document.querySelector('div img');
// let div = document.querySelector('div')
// div.addEventListener('click', changeOpacity);
// function changeOpacity() {
//     img.classList.toggle('opacity')
// }

let cards = [];
let flippedCards = [];
let counter = document.querySelector('main p');

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", displayCard);
};

function displayCard() {
    //flippa kortet och inte tillåta användaren att trycka det igen tills den är flippad tillbaka
}

//shuffle array function

let deck = document.querySelector('section');

function startGame() {
    //call shuffle function with cards array

    // FIXA DETTA
    // /*shuffleArray*/.forEach(el => {
        // deck.insertAdjacentHTML('afterbegin', el);
    // })
}

function flipCard() {
    flippedCards.push(this);

    if (flippedCards.length === 2) {
        updateMoves();

        if (flippedCards[0].type === flippedCards[1].type) {
            match();
        } else {
            noMatch();
        }
    }
}

function match() {
    //ta bort korten men inte HTML objektet för grid
}

function noMatch() {
    //vänd om kortet igen
}


function updateMoves() {
    moves++;
    counter.innerText = `Antal drag: ${moves}`
}