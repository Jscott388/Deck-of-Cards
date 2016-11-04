var cardposition = 0;

function Node(value) {
    this.data = value;
    this.previous = null;
    this.next = null;
}

function DoublyList() {
    this._length = 0;
    this.head = null;
    this.tail = null;
}

DoublyList.prototype.add = function() {
    // Setup the deck
    var newDeck = [];
    var ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    var suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
    for (var s = 0; s < suits.length; s++){
        for (var r = 0; r < ranks.length; r++ ){
            newDeck.push(ranks[r] + " " + suits[s]);
        }
    }
    // Setup the list
    for (var i = newDeck.length-1; i >= 0; i--){
        var node = new Node(newDeck[i]);
        if (this._length) {
            this.tail.next = node;
            node.previous = this.tail;
            this.tail = node;
        } else {
            this.head = node;
            this.tail = node;
        }

        this._length++;

    };
    return node;

    }
// Randomly shows a card.
DoublyList.prototype.showCard = function(){

    var currentNode = this.head,
        length = this._length,
        count = 1,
        message = {failure: 'Failure: non-existent node in this list.'};
        position = Math.floor(Math.random() * this._length) + 1;
;
    // 1st use-case: an invalid position
    if (length === 0 || position < 1 || position > length) {
        throw new Error(message.failure);
    }

    // 2nd use-case: a valid position
    while (count < position) {
        currentNode = currentNode.next;
        count++;
    }
    this.position = position;
    console.log(position, currentNode.data);
    console.log(this.position);
    return currentNode;
};

DoublyList.prototype.searchNodeAt = function(position) {
    var currentNode = this.head,
        length = this._length,
        count = 1,
        message = {failure: 'Failure: non-existent node in this list.'};

    // 1st use-case: an invalid position
    if (length === 0 || position < 1 || position > length) {
        throw new Error(message.failure);
    }

    // 2nd use-case: a valid position
    while (count < position) {
        currentNode = currentNode.next;
        count++;
    }

    return currentNode;
};

DoublyList.prototype.remove = function() {
    var currentNode = this.head,
        length = this._length,
        count = 1,
        message = {failure: 'Failure: non-existent node in this list.'},
        beforeNodeToDelete = null,
        nodeToDelete = null,
        deletedNode = null;
        position = this.position;

    // 1st use-case: an invalid position
    if (length === 0 || position < 1 || position > length) {
        throw new Error(message.failure);
    }

    // 2nd use-case: the first node is removed
    if (position === 1) {
        this.head = currentNode.next;

        // 2nd use-case: there is a second node
        if (!this.head) {
            this.head.previous = null;
        // 2nd use-case: there is no second node
        } else {
            this.tail = null;
        }

    // 3rd use-case: the last node is removed
    } else if (position === this._length) {
        this.tail = this.tail.previous;
        this.tail.next = null;
    // 4th use-case: a middle node is removed
    } else {
        while (count < position) {
            currentNode = currentNode.next;
            count++;
        }

        beforeNodeToDelete = currentNode.previous;
        nodeToDelete = currentNode;
        afterNodeToDelete = currentNode.next;

        beforeNodeToDelete.next = afterNodeToDelete;
        afterNodeToDelete.previous = beforeNodeToDelete;
        deletedNode = nodeToDelete;
        nodeToDelete = null;
    }

    this._length--;
    return message.success;
};



var cards = new DoublyList();
cards.add();
cards.showCard();

console.log(cards);
