import './ProjectsStyle.css';
import Card from './Card/Card.js';

import 'aos/dist/aos.css';
import AOS from 'aos';

import React, { useEffect } from 'react';

function Projects() {
    useEffect(() => {
        AOS.init({ duration: 500, easing: 'ease' });
    }, []);
    return (
        <div className="Projects" id="Projects">
            <h2 data-aos="fade-up">Projects</h2>
            <div>
                <Card name="Chess" index="1"
                    link="https://github.com/tomz197/Chess"
                    technologies={['HTML', 'CSS', 'JS']}
                    text="Classical chess where you can play classical game of chess with all rules.">
                </Card>
                <Card name="Paint" index="2"
                    link="https://github.com/tomz197/Paint"
                    technologies={['Python']}
                    text="Paint application where you can paint.">
                </Card>
                <Card name="Simulation" index="3"
                    link="https://github.com/tomz197/pixel-simulation"
                    technologies={['Python']}
                    text="Small game where you can simulate things like sand, water, stone, fire, smoke and so on.">
                </Card>
                <Card name="Writing4U" index="4"
                    link="https://github.com/tomz197/writing4U"
                    technologies={['Python']}
                    text="This will recreate real writing witch variable speed, mistakes and custom shortcuts. It will run secretly on background.">
                </Card>
            </div>
        </div >
    );
}

export default Projects;