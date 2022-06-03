import './ContactStyle.css';

import React, { useState, useEffect } from 'react';

import 'aos/dist/aos.css';
import AOS from 'aos';

function Contact() {
    const [mailClass, setMailClass] = useState("");
    const [formClass, setFormClass] = useState("");
    const [correct, setCorrect] = useState("hidden");
    const [mail, setMail] = useState("");
    const [message, setMessage] = useState("");

    const handleInput = (event) => {
        setMail(event.target.value);
        if (mailClass !== '') {
            setMailClass('');
        }
    }

    const handleSubmit = async (event) => {
        const regex =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        event.preventDefault();
        if (!regex.test(mail)) {
            console.log("wrong mail");
            setMailClass('incorrectMail');
            return;
        }
        fetch('http://localhost:8080/message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({ e_mail: mail, message: message }),
        })
            .then(response => response.json())
            .then(data => {
                if (data.error)
                    return;
                console.log('Success:', data);
                setFormClass('hide-form')
                setTimeout(() => { setCorrect('show'); event.target.reset(); }, 500);
                setTimeout(() => { setCorrect('hide-form') }, 3000);
                setTimeout(() => { setFormClass('show-form') }, 3500);
                setTimeout(() => { setCorrect('hide') }, 3500);
            })
            .catch((error) => {
                console.error('Error:', error);
                return;
            });
    }
    useEffect(() => {
        AOS.init({ duration: 500, easing: 'ease' });
    }, []);
    return (
        <div className="contact" id="Contact">
            <h2 data-aos="fade-up">Contact</h2>
            <form
                onSubmit={handleSubmit}
            >
                <div className={"form " + formClass}>
                    <div className={mailClass}>
                        <label data-aos="fade-up" htmlFor="email">Email:</label>
                        <input data-aos="fade-up" data-aos-delay="200" type="email" name="email" onChange={handleInput} required />
                    </div>
                    <div>
                        <label data-aos="fade-up" htmlFor="Message">Message:</label>
                        <textarea data-aos="fade-up" data-aos-delay="200" name="message" onChange={(e) => setMessage(e.target.value)} required />
                    </div>
                    <div>
                        <button data-aos="fade-up" data-aos-delay="300" type="submit"><span>Send</span></button>
                    </div>
                </div>
                <div className="submited">
                    <div className={correct + ""}>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                            <circle className="path circle" fill="none" stroke="white" strokeWidth="6" strokeMiterlimit="10" cx="65.1" cy="65.1" r="62.1" />
                            <polyline className="path check" fill="none" stroke="white" strokeWidth="6" strokeLinecap="round" strokeMiterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 " />
                        </svg>
                        <p className="success">Form send</p>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Contact;