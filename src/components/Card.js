import React, { Component } from 'react'

export class Card extends Component {
    render() {
        if (this.props.card.Value === "Joker"){
            return(
                <div>
                    Joker !
                </div>
            )
        }

        return (
            <div>
                {this.props.card.Value} of {this.props.card.Suit}
            </div>
        )
    }
}


export default Card
