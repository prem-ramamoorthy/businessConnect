import './FooterStyle.css'

function Footer() {
    return (
        <div className="fot">
            <div className="member">
                <footer className="footer">
                    <div className="footer-bg"></div>
                    <div className="container">
                        <div className="footer-content">
                            <div className="footer-section">
                                <div className="footer-logo">
                                    <div className="logo-container">
                                        <div className="logo-placeholder">
                                            <img src="/logo.png" alt="Sengunthar in Business Logo" className="logo-image"
                                                style={{
                                                    display: 'block',
                                                    marginLeft: 'auto',
                                                    marginRight: 'auto',
                                                    maxWidth: '65px',
                                                    maxHeight: '65px',
                                                    objectFit: 'contain',
                                                    transform: 'scale(1)'
                                                }} />
                                        </div>
                                    </div>
                                    <h4>Sengunthar in Business (SIB) - Erode</h4>
                                </div>
                                <p>Empowering Business Excellence Through Unity</p>
                                <div className="social-links">
                                    <a href="#" className="social-link" target="_blank">
                                        <span className="social-icon">📘</span>
                                        <span>Facebook</span>
                                    </a>
                                    <a href="#" className="social-link" target="_blank">
                                        <span className="social-icon">💼</span>
                                        <span>LinkedIn</span>
                                    </a>
                                    <a href="#" className="social-link" target="_blank">
                                        <span className="social-icon">🐦</span>
                                        <span>Twitter</span>
                                    </a>
                                </div>
                            </div>
                            <div className="footer-section">
                                <h4>Quick Links</h4>
                                <div className="footer-links">
                                    <a href="/index.html#home" className="footer-link">Home</a>
                                    <a href="/index.html#about" className="footer-link">About Us</a>
                                    <a href="/index.html#verticals" className="footer-link">Business Verticals</a>
                                    <a href="/index.html#leadership" className="footer-link">Leadership Team</a>
                                    <a href="/index.html#contact" className="footer-link">Contact Us</a>
                                </div>
                            </div>
                            <div className="footer-section">
                                <h4>Business Info</h4>
                                <div className="footer-info">
                                    <p><strong>138</strong> Active Members</p>
                                    <p><strong>15</strong> Business Verticals</p>
                                    <p><strong>35+</strong> Years of Excellence</p>
                                    <p><strong>Est.</strong> 1990s</p>
                                </div>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <div className="footer-divider"></div>
                            <p>&copy; 2025 Sengunthar in Business (SIB) - Erode. All rights reserved. | Designed with Excellence
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer