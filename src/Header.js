import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header-container">
            <div className="header-wrapper">
                <h1 className="header-title">React Scoreboard</h1>
                <h2 className="header-subtitle">Compare your React Score</h2>
            </div>
        </header>
    )
}

export default Header;
