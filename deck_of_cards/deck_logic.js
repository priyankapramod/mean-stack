class Card{
    constructor(suit, rank){
            this.suit = suit;
            this.rank = rank;
        }



    }







class Deck {

    constructor(){
        this._suits = ['hearts', 'diamonds', 'clubs', 'spades'];
        this._ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        this._mydeck= [];
        this._copydeck= [];



        for (var i = 0; i < this._suits.length; i++){
            for (var j = 0; j < this._ranks.length; j++){
                this._mydeck.push(new Card(this._suits[i], this._ranks[j]));
            }
        }
            this._copydeck = this._mydeck.slice();//slice() makes shallow copy
    }


    get mydeck(){
        return this._mydeck;
    }


    reset(){
        this._mydeck = this._copydeck.slice();//slice() makes shallow copy
        return this._copydeck;
    }


//shuffle -- my_deck{i} is same as this.deck[i]......this to avoid confusion. calling on particular instance.
     shuffle() {
         let rand = 0;
         let temp = new Card();
         var len =  this._mydeck.length-1;
         for(var i = len; i > 0; i--){
             rand  = Math.floor((Math.random() * i) + 1);
             console.log(rand);
             temp = this._mydeck[i];
             this._mydeck[i] = this._mydeck[rand];
             this._mydeck[rand] = temp;
         }
         return this._mydeck;
     }



     deal(){
         let i = 0;
         let temp = new Card();
         var len =  this._mydeck.length;
         i = Math.floor((Math.random() * len) + 1);
         temp = this._mydeck.splice(i, 1);//splice removes  specified no of elements from given space.
         //console.log(temp.toString());
         return temp;
     }
}

deck1 = new Deck();
console.log(deck1);//empty
deck1.mydeck;
console.log(deck1);
console.log("************shuffling");
console.log(deck1.shuffle());
console.log(deck1.deal());
console.log("^^^^^^^^^^^^^^^reset");
console.log(deck1.reset());
// console.log("@@@@@@@@@@@@@@after reset");


//******************************************************************************************
class  Player{

    constructor(name) {
        let temp = new Deck();
        this.name = name;
        this._hand = [];
        for (var i = 0; i < 13; i++){
            this._hand[i] = temp.deal();
        }


    }

    get hand(){
        return this._hand;
    }

    take(){
        let temp = new Deck();
        console.log('this is coming from take()');
        console.log(this._hand[this._hand.length] = temp.deal());
    }


    discard(){
        this._hand.splice(this._hand.length-1, 1);
        return this._hand;
    }

}

console.log("starting Hand class testing.")
hand1 = new Player('ted');
console.log('print my hand');
console.log(hand1.hand);


hand1.take();
console.log('printing after take');
console.log(hand1.hand);



hand1.discard();
console.log('printing after discard');
console.log(hand1.hand);
