import React, { Component, Fragment } from 'react'
import {Redirect} from "react-router-dom"

import Button from './utils/Button'

import Notification from "./utils/Notification"

export class HomePage extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }


    render() {
        return (
            <div className="main-content-container">
                <div>This is The Purple Home page !</div>
                {!this.state.displayGame &&
                    <Button
                        handleClick={() => { this.setState({ displayGame: true }) }}>
                        Play !
                            </Button>
                }

                {this.state.displayGame &&
                    <Fragment>
                        <Button
                            handleClick={() => { this.setState({ startLocalGame: true }) }}>
                            Local
                    </Button>
                        <Button
                            handleClick={() => { this.setState({ startOnlineGame: true }) }}>
                            Online !
                    </Button>
                        <Button
                            handleClick={() => { this.setState({ displayGame: false }) }}>
                            Go back
                    </Button>
                    </Fragment>
                }

                {/* Start local game */}
                {this.state.startLocalGame &&
                    <Redirect to="/local-game"/>
                }

                {/* Start online game */}
                {this.state.startOnlineGame &&
                    <Notification
                        type="error"
                        message="Not available (yet !)"
                        handleClose={() => {
                            this.setState({ startOnlineGame: false })
                        }
                        }
                    />
                }

            </div>
        )
    }
}

export default HomePage
