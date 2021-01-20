export function shuffle (deck) {
    let shuffledDeck = []
    for (let i=0; i<deck.length; i++){
        let randomIndex = Math.floor(Math.random() * Math.floor(deck.length-i))
        let randomCard = deck.splice(randomIndex,1)
        shuffledDeck.push(randomCard)
    }
    console.log(shuffledDeck)
    return shuffledDeck
}