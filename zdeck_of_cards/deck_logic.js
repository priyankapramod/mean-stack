const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
class Card{
        if(suits.includes(suit))
            this.suit = suit;
        if(ranks.includes(rank))
            this.rank = rank;
    }


    toString() {
        return '(' + this.suit + ', ' + this.rank + ')';
    }
}





//deck has a card.
class Deck {
    var my_deck= [];
    var copy_deck= [];
    //var my_deck_copy = []
    constructor(){
        for (var i = 1; i <= super.suits.length(); i++){
            for (var j = 1; j <= super.ranks.length(); j++){
                my_deck.push(new Card(i, j));
            }
        }
            //this.deck = my_deck;
            copy_deck = my_deck;//constructor returns copy_deck or only this.deck to the object?????
    }


    get myDeck(){
        return my_deck;
    }


    reset(){
        return copy_deck;
    }


//shuffle -- my_deck{i} is same as this.deck[i]......this to avoid confusion. calling on particular instance.
     shuffle() {
         for(var i = array.length-1; i > 0; i--){
             rand  = Math.floor(Math.random() * (i+1));
             Card temp = this.my_deck[i];
             this.my_deck[i] = this.my_deck[rand];
             this.my_deck[rand] = temp;
         }
         return this.my_deck;
     }



     deal(){
         var len =  my_deck.length;
         i = Math.floor(Math.random() * (len+1));
         Card temp = my_deck.splice(i, 1);// Card or new Card????
         console.log(temp.toString());
         return temp;
     }
}

deck1 = new Deck();
console.log(deck1);//empty
deck1.myDeck;
console.log(deck1);
deck1.shuffle();
console.log(deck1);
deck1.deal();


// class  Player extends Deck{
//     hand = [];
//
//     constructor(name) {
//         this.name = name;
//         for (var i = 0; i < 13; i++){
//             hand[i] = deal();
//         }
//
//         this.hand = hand;
//
//
//
//
// }
//     take(){
//         hand[hand.length] = deal();
//     }
//
//
//     discard(val){
//         hand.splice(val, 1);
//         return hand;
//     }
//
//
//
// }
//


// let ted_cards = new Hand('ted');
// ted_cards.take();
// ted_cards.discard();
