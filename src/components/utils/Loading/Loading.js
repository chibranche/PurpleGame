// Copyright © FINANCE SECURITY GmbH - All rights reserved.

import React from 'react'

import './Loading.css'

import loadingGif from "./loading-gif.gif"

function Loading() {
    return (
        <div className="loading-animation-container">
            <img src={loadingGif} alt="loading..."/>
        </div>
    )
}

export default Loading
