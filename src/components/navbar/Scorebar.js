import React from 'react'

export default () => {
    return (
        <nav>
            <div class="nav-wrapper">
                <span className='brand-logo'>My Clicky Game</span>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><span className='NavContent'>Current Score: </span></li>
                    <li><span className='NavContent'>High Score: </span></li>
                </ul>
            </div>
        </nav>
    )
}
