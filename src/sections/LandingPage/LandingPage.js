import './LandingPageStyle.css';
import React, { useState, useEffect } from 'react';

function LandingPage() {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    });
    return (
        <div className="LandingPage" id="LandingPage">
            <div className="LandingPageContent" style={{ transform: `translateY(${offsetY * 0.25}px)` }}>
                <h2>Tomáš Žifčák</h2>
                <h1>Frontend developer</h1>
                <div>
                    <a className="btn-lignt" href="#Projects">Projects</a>
                    <a href="CONTACT"><span>CONTACT</span></a>
                </div>
            </div >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
            >
                <path
                    fill="#ffffff"
                    fillOpacity="1"
                    d="M0,224L80,224C160,224,320,224,480,213.3C640,203,800,181,960,181.3C1120,181,1280,203,1360,213.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                ></path>
            </svg>
        </div >
    );
}

export default LandingPage;