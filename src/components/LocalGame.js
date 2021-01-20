import React, { Component } from 'react'

import initializeDeck from "../utils/deckFunctions/initializeDeck"
import shuffleDeck from "../utils/deckFunctions/shuffleDeck"
import Card from "./Card"
import Button from "./utils/Button"

import "./LocalGame.css"

export class LocalGame extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount() {
        this.startGame()
    }

    startGame() {
        let deck = initializeDeck()
        this.setState({
            deck: deck,
            discard: [],
            drawnCards: []
        })
    }

    drawCard() {
        //TODO : if deck empty, reshuffle discard and put it as deck
        if (this.state.deck.length === 0) {
            return (null)
        }

        let deck = this.state.deck
        let drawnCards = this.state.drawnCards
        let card = deck.shift()
        drawnCards.push(card)

        this.setState({
            drawnCards: drawnCards,
            deck: deck
        })
    }

    shuffleDeck() {
        let deck = shuffleDeck(this.state.deck)
        this.setState({
            deck: deck
        })
    }

    shuffleDiscardDeck() {
        let deck = this.state.deck.concat(this.state.discard)
        deck = shuffleDeck(deck)
        this.setState({
            deck: deck,
            discard: []
        })

    }

    endTurn() {
        let discard = this.state.drawnCards.concat(this.state.discard)
        this.setState({
            discard: discard,
            drawnCards: []
        })
    }

    showCards() {
        let cards = []

        for (let i in this.state.drawnCards) {
            cards.push(
                <Card key={"card" + i} card={this.state.drawnCards[i]} />
            )
        }

        return cards
    }

    render() {
        return (
            <div className="main-content-container">

                {this.state.deck &&
                    <div className="flex-row game-container">

                        <div className="game-info">
                            <div>{this.state.deck.length} cards remaining in the deck</div>
                            <div>{this.state.discard.length} cards in the discard</div>
                        </div>

                        <div className="game-container-main">
                            {/* Card displayed */}
                            {this.state.drawnCards.length > 0 &&
                                <div className="playing-area">
                                    <div className="drawn-cards-container flex-row">

                                        {this.showCards()}
                                    </div>
                                </div>
                            }

                            {this.state.drawnCards.length === 0 &&
                                <div className="playing-area">
                                    <div className="drawn-cards-container flex-row">
                                        No cards drawn
                                                            </div>
                                </div>
                            }

                            {/* Buttons */}
                            <div className="board-buttons">
                                <Button
                                    handleClick={this.drawCard.bind(this)}>
                                    Draw a card
                        </Button>
                                <Button
                                    handleClick={this.shuffleDiscardDeck.bind(this)}>
                                    Reshuffle (with discard)
                        </Button>
                                <Button
                                    handleClick={this.shuffleDeck.bind(this)}>
                                    Reshuffle (no discard)
                        </Button>
                                <Button
                                    handleClick={this.endTurn.bind(this)}>
                                    End turn
                        </Button>
                            </div>

                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default LocalGame
