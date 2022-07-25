const FRONT = 'card-front';
const BACK = 'card-back';
const CARD = 'card';
const ICON = 'icons';
let apps = [
    'bootstrap',
    'css',
    'electron',
    'firebase',
    'html',
    'javascript',
    'jquery',
    'mongo',
    'node',
    'react',
];
let cards = null;
StartGame();
function StartGame() {
     cards = CreateCard(apps);
     RandomCards(cards);
     initializeCards(cards);
    //  RandomCards(cards);
}
function initializeCards(cards) {
    let gameBoard = document.getElementById('gameBoard');
    cards.forEach(card => {
        let cardElement = document.createElement('div');
        cardElement.id = card.id;
        cardElement.classList.add(CARD);
        cardElement.dataset.icon = card.icon;
        CreateCardContent(card, cardElement);
        cardElement.addEventListener('click', flipCard);
        gameBoard.appendChild(cardElement);
    });
}
function CreateCardContent(card, cardElement) {
 createCardFace(FRONT, card, cardElement);
 createCardFace(BACK, card, cardElement);     
}
function createCardFace(face, card, element) {
    let cardElementFace = document.createElement('div');
    cardElementFace.classList.add(face);
    if (face === FRONT) {
        let iconElement = document.createElement('img');
        iconElement.classList.add(ICON);
        iconElement.src = "assets/images/" + card.icon + ".png";
        cardElementFace.appendChild(iconElement);
    } else {
        cardElementFace.innerHTML = '&lt/&gt';
    }
      element.appendChild(cardElementFace);
}
function RandomCards(cards) {
   let currentIndex = cards.length;
let randomIndex = 0;
while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [cards[randomIndex], cards[currentIndex]] = [cards[currentIndex], cards[randomIndex]];
}
}
function CreateCard(apps) {
    let cards = [];
    apps.forEach(app => {
        cards.push(CreatePair(app));
    })
    return cards.flatMap(pair => pair);
}
function CreatePair(app) {
    return [{
        id: CreateId(app),
        icon: app,
        flipped:false,
    },{
        id: CreateId(app),
        icon: app,
        flipped:false,  
    }]
}
function CreateId(app) {
    return app + parseInt(Math.random() * 1000);
}
function flipCard() {
    this.classList.add('flip');
}

