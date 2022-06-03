import './CardStyle.css';

import 'aos/dist/aos.css';
import AOS from 'aos';

import React, { useEffect } from 'react';

function Card(props) {
    useEffect(() => {
        AOS.init({ duration: 500, easing: 'ease' });
    }, []);
    return (
        <div data-aos="fade-up" className="card" id={'card' + props.index} onClick={() => window.open(props.link, '_blank')}>
            <div>
                <h2>{props.name}</h2>
                <h4>Used technologies</h4>
                <ul>{props.technologies.map((x, i) => <li key={i}>{x}</li>)}</ul>
                <p>{props.text}</p>
            </div>
        </div>
    );
}

export default Card;