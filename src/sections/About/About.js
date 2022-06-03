import './AboutStyle.css';
import React, { useState, useEffect, useRef } from 'react';

function About() {
    const myRef = useRef();
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset - myRef.current.offsetTop);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    });
    return (
        <div className="about" id="About" ref={myRef}>
            <h2 style={{ transform: `translate(${(offsetY) * 1.5}px, -50%)` }}>About</h2>
            <p>I want to learn and expand my knowledge of web development. Solving
                hard and komplex problems was never a problem for me same as
                learning new stuff for solving those problems. I am communicative,
                temporary, docile and have no problem working in team.</p>
        </div>
    );
}

export default About;