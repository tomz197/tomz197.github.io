import './InterestsStyle.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

import React, { useEffect } from 'react';

function Intrests() {
    useEffect(() => {
        AOS.init({ duration: 500, easing: 'ease' });
    }, []);
    return (
        <div className="Interests">
            <h2 data-aos="fade-up">Interests</h2>
            <p data-aos="fade-up">Programming is my main interest last few years. I chose it because I love sovling problem that comes as I'm creating websites and Apps of every type and teaching new stuff I need to solve those problems. My other interests are playing all kinds of sports and chess.</p>
        </div>
    );
}

export default Intrests;