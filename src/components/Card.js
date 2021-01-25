import React, { Component } from 'react'

import "./Card.css"

export class Card extends Component {
    render() {
        if (this.props.card.Value === "Joker") {
            return (
                <div className="card-big-container">
                    <div className="card-container">
                        <div className="card-sub-container">
                            Joker !
                        </div>
                    </div>
                </div >
            )
        }

        return (
            <div className="card-big-container">
                <div className="card-container">
                    <div className="card-sub-container">
                        {this.props.card.Value} of {this.props.card.Suit}
                    </div>
                </div>
            </div>
        )
    }
}


export default Card
