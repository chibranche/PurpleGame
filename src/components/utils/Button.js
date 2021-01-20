import React, { Component } from 'react'

import {buildHandleEnterKeyPress} from '../../utils/utilsFunctions'

import './Button.css'

//Props to pass:
//className : string (classname)
//text : string
//ariaLabel : string
//handleClick : function
export class Button extends Component {
    render() {
        return (
            <div 
            style={this.props.style}
            className={`button ${this.props.className}`} 
            onClick={this.props.handleClick}
            aria-label={this.props.ariaLabel}
            tabIndex={0}
            onKeyPress={ buildHandleEnterKeyPress(this.props.handleClick) } 
            >
                {this.props.text} 
                {this.props.children}
            </div>
        )
    }
}

Button.defaultProps= {
    text : "",
    className : "",
    ariaLabel : "",
    style: {},
}

export default Button
