import React, { Component } from 'react'

import Button from './utils/Button'

import "./LocalGame.css"

//PROPS to pass
// handleStart : function
export class LocalPlayerSelect extends Component {
    constructor(props) {
        super(props)

        this.state = {
            players: [""]
        }
    }

    addPlayer() {
        let players = this.state.players
        players.push("")
        this.setState({
            players: players
        })
    }

    handlePlayerNameChange(event) {
        let id = event.target.dataset.id
        let newValue = event.target.value
        let players = this.state.players
        
        players[id]=newValue
        this.setState({
            players:players
        })
    }

    playerInputDisplay() {
        let playerInputArray = []
        for (let i = 0; i < this.state.players.length; i++) {
            playerInputArray.push(
                <div 
                    key={"player-input-" + i}
                    className="player-name-input-container"
                    >
                    <div>
                        Player {i+1} :
                    </div>
                <input
                    type="text"
                    placeholder={`Name of player ${i + 1}`}
                    value={this.state.players[i]}
                    data-id={i}
                    onChange={this.handlePlayerNameChange.bind(this)}
                />
                </div>
            )
        }

        return playerInputArray
    }

    render() {
        return (
            <div>
                <p>Who is going to play ?</p>


                <div className="flex-column center">
                    {this.playerInputDisplay()}
                </div>

                <Button
                    handleClick={this.addPlayer.bind(this)}>
                    Add player
                    </Button>

                {this.state.players.length > 0 && this.state.players.some((el) => el !== "") &&
                    <Button
                        handleClick={() => { this.props.handleStart(this.props.players) }}>
                        Start Game !
                    </Button>
                }
            </div>
        )
    }
}

export default LocalPlayerSelect
