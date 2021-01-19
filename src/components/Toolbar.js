import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import './Toolbar.css'

export class Toolbar extends Component {
    render() {
        return (
            <div className="toolbar-container flex-row">
                <NavLink to="/">
                    <div className="toolbar-logo">
                        The Purple
                </div>
                </NavLink>

                <nav className="toolbar-navbar-container">
                    <NavLink to="/">
                        <div className="toolbar-navbar-element">
                            Homepage
                        </div>
                    </NavLink>
                    <NavLink to="/how-to-play">
                        <div className="toolbar-navbar-element">
                            Rules
                        </div>
                    </NavLink>
                </nav>
            </div>
        )
    }
}

export default Toolbar
