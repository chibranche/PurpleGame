import shuffleDeck from "./shuffleDeck"

export default function initializeDeck() {
    var suits = ["spades", "diamonds", "clubs", "hearts"];
    var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

    //Create the deck from "suits" and "values" arrays
    const getDeck = () => {
        var deck = [] ;
        for (var i = 0; i < suits.length; i++) {
            for (var x = 0; x < values.length; x++) {
                var card = { Value: values[x], Suit: suits[i] };
                deck.push(card);
            }
            deck.push({Value:"Joker", Suits:"Joker"})
            deck.push({Value:"Joker", Suits:"Joker"})
        }
        return deck;
    }

    let deck = shuffleDeck(getDeck());
    return deck
}