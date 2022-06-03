import './FooterStyle.css';

function Footer() {
    return (
        <footer>
            <div>
                <div className="personal">
                    <h4>Tomáš Žifčák</h4>
                    <p>+421 944 995 915</p>
                    <p>tomas.zifcak197@gmail.com</p>
                </div>
                <div className="social">
                    <ul>
                        <li><a href="https://github.com/tomz197">Github</a></li>
                        <li><a href="https://www.instagram.com/tom_z__/">Instagram</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;