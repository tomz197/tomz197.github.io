import './AboutStyle.css';
import React, { useEffect, useRef } from 'react';

function About() {
    const myRef = useRef();
    const parent = useRef();

    const data = {
        ease: 0.1,
        current: 0,
        previous: 0,
        rounded: 0,
    };

    useEffect(() => {
        requestAnimationFrame(() => smoothScrollingHandler());
    });

    const smoothScrollingHandler = () => {
        data.current = window.scrollY;
        data.previous += (data.current - data.previous) * data.ease;
        data.rounded = (Math.round(data.previous * 100) / 100) - parent.current.offsetTop;

        myRef.current.style.transform = `translate(${(data.rounded) * 1.5}px, -50%)`

        requestAnimationFrame(() => smoothScrollingHandler());
    };
    return (
        <div className="about" id="About" ref={parent}>
            <h2 ref={myRef} >About</h2>
            <p>I want to learn and expand my knowledge of web development. Solving
                hard and komplex problems was never a problem for me same as
                learning new stuff for solving those problems. I am communicative,
                temporary, docile and have no problem working in team.</p>
        </div>
    );
}

export default About;