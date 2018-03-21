namespace functions {
  let add = function(x: number, y: number): number { return x + y; };

  let myAdd: (baseValue: number, increment: number) => number =
    function(x, y) { return x + y; };

  function buildName(firstName?: string/* 可选参数 */, lastName = 'Smith'/* 默认参数 */, ...restOfName: string[]/* 剩余参数 */) {}

  interface Card {
    suit: string;
    card: number;
  }
  interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
}
  let deck: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function(this: Deck) {
      return () => {
        let pickedCard = Math.floor(Math.random() * 52);
        let pickedSuit = Math.floor(pickedCard / 13);

        return {suit: this.suits[pickedSuit], card: pickedCard % 13};
      }
    }
  }

  let cardPicker = deck.createCardPicker();
  let pickedCard = cardPicker();

  alert("card: " + pickedCard.card + " of " + pickedCard.suit);

  // 重载
  let suits = ["hearts", "spades", "clubs", "diamonds"];

  function pickCard(x: {suit: string; card: number; }[]): number;
  function pickCard(x: number): {suit: string; card: number; };
  function pickCard(x: any): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
      let pickedCard = Math.floor(Math.random() * x.length);
      return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
      let pickedSuit = Math.floor(x / 13);
      return { suit: suits[pickedSuit], card: x % 13 };
    }
  }

  let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
  let pickedCard1 = myDeck[pickCard(myDeck)];
  alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

  let pickedCard2 = pickCard(15);
  alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);
}