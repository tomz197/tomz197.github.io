import './SkillsStyle.css';

import 'aos/dist/aos.css';
import AOS from 'aos';

import React, { useEffect } from 'react';

function Skills() {
    useEffect(() => {
        AOS.init({ duration: 500, easing: 'ease' });
    }, []);
    return (
        <div className="Skills" id="Skills">
            <h2 data-aos="fade-up">Skills</h2>
            <div>
                <div>
                    <ul className="left">
                        <li data-aos="fade-right">JavaScript</li>
                        <li data-aos="fade-right">React JS</li>
                        <li data-aos="fade-right">HTML</li>
                        <li data-aos="fade-right">CSS</li>
                    </ul>
                </div>
                <div>
                    <ul className="right">
                        <li data-aos="fade-left" data-aos-delay="200">Python</li>
                        <li data-aos="fade-left" data-aos-delay="200">C/C++</li>
                        <li data-aos="fade-left" data-aos-delay="200">MySQL</li>
                        <li data-aos="fade-left" data-aos-delay="200">Node JS</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Skills;