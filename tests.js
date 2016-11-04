

function Deck(player){
    this.player = player;
    this.deck = [];
    this.DeckList = null;
}
Deck.prototype.createDeck = function(){
    var ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    var suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
        for (var s = 0; s < suits.length; s++){
            for (var r = 0; r < ranks.length; r++ ){
                this.deck.push(ranks[r] + " " + suits[s]);
            }
        }
        return this.deck;
        // console.log(this.deck);
}

Deck.prototype.setDeck = function(){
    for (var i = this.deck.length-1; i >= 0; i--) {
        // console.log(i, this.deck[i]);//2, then 1
        //20, then 10
        this.DeckList = {
            value: this.deck[i],
            rest: this.DeckList//null, then {value:20, rest: null}
        };
    }
    return this.DeckList;
    console.log(this.DeckList);
}


var joshua = new Deck('Joshua');
joshua.createDeck();
joshua.setDeck();

//
// var deck1 = Deck.prototype.arrayToList();
// console.log(deck1);

function Node(value){
    this.data = value;
    this.next = null;
    this.prev = null;
}

function MasterDeck(){
    this._length = 0;
    this.head = null;
    this.tail = null;
}
 MasterDeck.prototype.add = function(value) {
     var node = new Node(value);

     if (this._length){
         this.tail.next = node;
         node.previous = this.tail;
         this.tail = node;
     }else{
         this.head = node;
         this.tail = node;
     }
     this._length++;
     return node;
 }




// var decklist = new MasterDeck.prototype.add();
// console.log(decklist);




// Deck.prototype.shuffle = function(){
//     var m = this.length, t, i;
//
//     while (m){
//         i = Math.floor(Math.random() * m--);
//         t = this[m];
//         this[m] = this[i];
//         this[i] = t;
//     }
//     return this;
// }
//
// var somedeck = new Deck();
//
// console.log(somedeck);
