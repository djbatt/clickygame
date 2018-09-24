import React from 'react'

export default (props) => {
    return (
        <nav>
            <div className="nav-wrapper">
                <span className='brand-logo'>My Clicky Game</span>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><span className='NavContent'>Current Score: {props.score}</span></li>
                    <li><span className='NavContent'>High Score: {props.highScore}</span></li>
                </ul>
            </div>
        </nav>
    )
}
