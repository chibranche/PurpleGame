export default function shuffle (deck) {
    let shuffledDeck = []
    let deckSize = deck.length
    for (let i=0; i<deckSize; i++){
        let randomIndex = Math.floor(Math.random() * Math.floor(deck.length-i))
        let randomCard = deck.splice(randomIndex,1)
        shuffledDeck.push(randomCard[0])
    }
    return shuffledDeck
}