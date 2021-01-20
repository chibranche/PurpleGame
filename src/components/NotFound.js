import React, { Component } from 'react'
import { Redirect } from "react-router-dom"

import Button from "./utils/Button"

export class NotFound extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="main-content-container">
                Page not found !
                <Button
                    handleClick={() => { this.setState({ redirectHomepage: true }) }}
                >
                    Back to homepage
                    </Button>

                {this.state.redirectHomepage &&
                    <Redirect to="/" />}
            </div>
        )
    }
}

export default NotFound
