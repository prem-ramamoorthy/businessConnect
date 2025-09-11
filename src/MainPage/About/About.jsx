import './AboutStyle.css'

function About() {
    return (
        <section id="about" className="about">
            <div className="container">
                <div className="section-header">
                    <div className="section-tag">About Us</div>
                    <h2 className="section-title">Fostering Growth & Unity</h2>
                    <p className="section-subtitle">Building bridges between tradition and innovation in business excellence</p>
                </div>
                <div className="about-content">
                    <div className="timeline-item-container">
                        <div className="timeline-item">
                            <h3>குறிக்கோள் (Vision)</h3>
                            <p className="tamil">நமது சமுதாய மக்கள், சமூக ரீதியாகவும், பொருளாதார ரீதியாகவும் முன்னேற
                                உதவுவதையும், வளர்ச்சி அடைவதையும் நாங்கள் நோக்கமாக கொண்டுள்ளோம்.</p>
                            <p className="en">We strive to support the community's progress and prosperity through comprehensive social and economic development programs</p>
                        </div>
                        <div className="timeline-image">
                            <img src="/assets/vision.jpg" alt="Our Vision" />
                        </div>
                    </div>
                    <div className="timeline-item-container">
                        <div className="timeline-item">
                            <h3>நோக்கம் (Mission)</h3>
                            <p className="tamil">கல்வி, திறன் மேம்பாடு, தொழில் வாய்ப்புகள் மற்றும் வலுவான உறவுப்
                                பிணைப்புகளை உருவாக்குதல் மூலம் நம் சமுதாய மக்களின் வளர்ச்சியை உறுதி செய்வதே நமது
                                அமைப்பின் நோக்கமாகும்</p>
                            <p className="en">The mission of our organization is to ensure the growth of our community
                                people through education, skill development, business opportunities, and by creating
                                strong relationship bonds.</p>
                        </div>
                        <div className="timeline-image">
                            <img src="/assets/mission.jpg" alt="Our Mission" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
