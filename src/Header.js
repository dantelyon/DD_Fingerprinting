import React from 'react';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="Header">
                    <h1 className="Header-title"><span onClick={this.props.showTable}>Mirror-FP</span></h1>
                    <div className="Header-buttons">
                        <span className="Header-button" onClick={this.props.showAbout}>About</span>
                        <a className="Header-button" href="https://github.com/" rel="noreferrer noopener" target="_blank">Github</a>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header