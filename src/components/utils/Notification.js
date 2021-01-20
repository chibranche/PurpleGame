import React, { Component } from 'react'

import {buildHandleEnterKeyPress} from '../../utils/utilsFunctions'

import "./Notification.css"


//PROPS TO PASS :
// message : String
// type : String in ("info","ok","error")
// handleClose : Function
export class Notification extends Component {
    constructor(props) {
        super(props)

        this.state = {
            backgroundColor: this.props.type === "ok" ? "#66bb6a" : (this.props.type === "info" ? "#ffca28" : "#ef5350")
        }
    }

    render() {
        return (
            <div className="notification-container" style={{ backgroundColor: this.state.backgroundColor }}>

                <div className="flex-row">
                    <div className="notification-icon">
                        {this.props.type === "info" &&
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 65 65" className="xs-margin-left xs-margin-right xs-margin-top xs-margin-bottom">
                                <g id="Group_64" transform="translate(-274 -59)">
                                    <g id="Ellipse_20"  transform="translate(274 59)" fill="#ffca28" stroke="white" strokeWidth="7">
                                        <circle cx="32.5" cy="32.5" r="32.5" stroke="none" />
                                        <circle cx="32.5" cy="32.5" r="29" fill="none" />
                                    </g>
                                    <line id="Line_22" y2="27" transform="translate(306.5 70.5)" fill="none" stroke="white" strokeWidth="7" />
                                    <line id="Line_23" y2="7" transform="translate(306.5 104.5)" fill="none" stroke="white" strokeWidth="7" />
                                </g>
                            </svg>

                        }

                        {this.props.type === "error" &&
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 65 65" className="xs-margin-left xs-margin-right xs-margin-top xs-margin-bottom">
                                <g id="Group_63" transform="translate(-180 -56)">
                                    <g id="Ellipse_19" transform="translate(180 56)" fill="#ef5350" stroke="white" strokeWidth="7">
                                        <circle cx="32.5" cy="32.5" r="32.5" stroke="none" />
                                        <circle cx="32.5" cy="32.5" r="29" fill="none" />
                                    </g>
                                    <line id="Line_20" x2="26" y2="24" transform="translate(199.5 76.5)" fill="none" stroke="white" strokeWidth="7" />
                                    <line id="Line_21" y1="23" x2="26" transform="translate(199.5 76.5)" fill="none" stroke="white" strokeWidth="7" />
                                </g>
                            </svg>

                        }

                        {this.props.type === "ok" &&
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 65 65" className="xs-margin-left xs-margin-right xs-margin-top xs-margin-bottom">
                                <g id="Ellipse_18" fill="#66bb6a" stroke="white" strokeWidth="7">
                                    <circle cx="32.5" cy="32.5" r="32.5" stroke="none" />
                                    <circle cx="32.5" cy="32.5" r="29" fill="none" />
                                </g>
                                <line id="Line_18" x2="10" y2="13" transform="translate(20.5 30.5)" fill="none" stroke="white" strokeWidth="7" />
                                <path id="Path_16" d="M19,0-1.05,19.427" transform="translate(27.5 23.5)" fill="none" stroke="white" strokeWidth="7" />
                            </svg>

                        }
                    </div>

                    <div className="notification-message">
                        {this.props.message}
                    </div>
                </div>

                <div 
                    onClick={this.props.handleClose}
                    className="notification-close"
                    tabIndex={0}
                    onKeyPress={ buildHandleEnterKeyPress(this.props.handleClose)}>X</div>

            </div>
        )
    }
}

export default Notification
