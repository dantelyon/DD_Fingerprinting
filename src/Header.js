import React from 'react';
import './Header.css';

function Header() {
    return <div className="Header">
        <h1 className="Header-title"><a href="">Mirror-FP</a></h1>
        <div className="Header-buttons">
            <a className="Header-button" href="">About</a>
            <a className="Header-button" href="">Github</a>
        </div>
    </div>
}

export default Header