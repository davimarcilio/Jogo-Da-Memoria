let game = {
    lockMode: false,
    firstCard:null,
    secondCard:null,
    setCard: function(id){
       let card = this.cards.filter(card=>card.id===id)[0];
       if (card.flipped || this.lockMode) {
        return false;
       }
       if (!this.firstCard) {
        this.firstCard = card;
        this.firstCard.flipped = true;
        return true;
       } else {
        this.secondCard = card;
        this.secondCard.flipped = true;
        this.lockMode = true;
        return true;
       }
    },
    checkGameOver: function() {
       return this.cards.filter(card=>!card.flipped).length == 0;
    },
    apps: [
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
    ],
    cards: null,
    CreateCard: function() {
        this.cards = [];
        this.apps.forEach(app => {
            this.cards.push(this.CreatePair(app));
        })
        this.cards = this.cards.flatMap(pair => pair);
        this.RandomCards()
        return this.cards;
    },
    CreatePair: function(app) {
        return [{
            id: this.CreateId(app),
            icon: app,
            flipped:false,
        },{
            id: this.CreateId(app),
            icon: app,
            flipped:false,  
        }]
    },
    CreateId: function(app) {
        return app + parseInt(Math.random() * 1000);
    },
    RandomCards: function() {
        let currentIndex = this.cards.length;
     let randomIndex = 0;
     while (currentIndex != 0) {
         randomIndex = Math.floor(Math.random() * currentIndex);
         currentIndex--;
         [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[randomIndex]];
     }
     },
     checkMatch: function(){
        if (!this.firstCard || !this.secondCard)  {
            return false;
        }
      return this.firstCard.icon === this.secondCard.icon;
     },
     clearCards: function() {
        this.firstCard = null;
        this.secondCard = null;
        this.lockMode = false;
     },
     unflipCards: function() {
        this.firstCard.flipped = false;
        this.secondCard.flipped = false;
        game.clearCards();
     }
}
