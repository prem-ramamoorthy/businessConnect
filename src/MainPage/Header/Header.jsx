import React, { useState } from 'react';
import './HeaderStyle.css';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header" id="header">
            <nav className="navbar">
                <div className="container">
                    <div className="nav-brand">
                        <div className="logo-container">
                            <img
                                src="/logo.png"
                                alt="Sengunthar in Business Logo"
                                className="logo-image"
                            />
                        </div>
                        <div className="brand-info">
                            <span className="brand-text">Sengunthar in Business</span>
                            <span className="brand-location">Erode</span>
                        </div>
                    </div>

                    <div className="nav-menu desktop-menu">
                        <a href="#home" className="nav-link" data-text="Home">Home</a>
                        <a href="/members/index.html" className="nav-link" data-text="Members">Members</a>
                        <a href="#about" className="nav-link" data-text="About">About</a>
                        <a href="#verticals" className="nav-link" data-text="Business Verticals">Business Verticals</a>
                        <a href="#leadership" className="nav-link" data-text="Leadership">Leadership</a>
                        <a href="#contact" className="nav-link" data-text="Contact">Contact</a>
                    </div>

                    <div className="burger-menu" onClick={toggleMenu}>
                        <span className={`burger-line ${isMenuOpen ? 'active' : ''}`}></span>
                        <span className={`burger-line ${isMenuOpen ? 'active' : ''}`}></span>
                        <span className={`burger-line ${isMenuOpen ? 'active' : ''}`}></span>
                    </div>

                    <div className={`mobile-dropdown ${isMenuOpen ? 'open' : ''}`}>
                        <a href="#home" className="mobile-nav-link" onClick={toggleMenu}>Home</a>
                        <a href="/members/index.html" className="mobile-nav-link" onClick={toggleMenu}>Members</a>
                        <a href="#about" className="mobile-nav-link" onClick={toggleMenu}>About</a>
                        <a href="#verticals" className="mobile-nav-link" onClick={toggleMenu}>Business Verticals</a>
                        <a href="#leadership" className="mobile-nav-link" onClick={toggleMenu}>Leadership</a>
                        <a href="#contact" className="mobile-nav-link" onClick={toggleMenu}>Contact</a>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
