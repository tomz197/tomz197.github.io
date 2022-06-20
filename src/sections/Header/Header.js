import './HeaderStyle.css';
import CV from './CV.pdf';

import React, { useState, useEffect } from 'react';

function Header() {
    const [sidebarClass, setSidebarClass] = useState("hideSidebar");
    const [navbarClass, setNavbarClass] = useState("hidenav");
    let scroll = window.pageYOffset
    const handleScroll = () => {
        if (scroll > window.pageYOffset && window.pageYOffset !== 0) {
            setNavbarClass("showNav");
        } else {
            setNavbarClass("hideNav");
        }
        scroll = window.pageYOffset;
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    });
    const handleSidebar = () => {
        setSidebarClass((sidebarClass === "hideSidebar") ? "showSidebar" : "hideSidebar")
    }

    return (
        <div id="Header">
            <div className="header">
                <div className="nav"><h2><a href="#Header" id="name">Žifčák</a></h2></div>
                <div className="nav">
                    <ul>
                        <li className="navLink"><a href="#About">About</a></li>
                        <li className="navLink"><a href="#Projects">Projects</a></li>
                        <li className="navLink"><a href="#Contact">Contact</a></li>
                        <li><a href={CV} target="blank"><span>DownloadCV</span></a></li>
                        <li onClick={handleSidebar} className="burgerButton open"></li>
                    </ul>
                </div>
                <div className={"collapsableBG " + sidebarClass}></div>
            </div>
            <div className={"header fixedNav " + navbarClass}>
                <div className="nav"><h2><a href="#Header" id="name">Žifčák</a></h2></div>
                <div className="nav">
                    <ul>
                        <li className="navLink"><a href="#About">About</a></li>
                        <li className="navLink"><a href="#Projects">Projects</a></li>
                        <li className="navLink"><a href="#Contact">Contact</a></li>
                        <li><a href={CV} target="blank"><span>DownloadCV</span></a></li>
                        <li onClick={handleSidebar} className="burgerButton open"></li>
                    </ul>
                </div>
            </div>
            <div className={"collapsableBG " + sidebarClass}></div>
            <div className={"collapsable " + sidebarClass}>
                <span onClick={handleSidebar} className="burgerButton close"></span>
                <ul>
                    <li><a onClick={handleSidebar} href="#About">About</a></li>
                    <li><a onClick={handleSidebar} href="#Projects">Projects</a></li>
                    <li><a onClick={handleSidebar} href="#Contact">Contact</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;