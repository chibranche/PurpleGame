import React, { Component } from 'react'

import "./Card.css"

export class Card extends Component {
    render() {
        if (this.props.card.Value === "Joker"){
            return(
                <div className="card-container">
                    Joker !
                </div>
            )
        }

        return (
            <div className="card-container">
                {this.props.card.Value} of {this.props.card.Suit}
            </div>
        )
    }
}


export default Card
