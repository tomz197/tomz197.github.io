import './App.css';
import LandingPage from './sections/LandingPage/LandingPage.js';
import About from './sections/About/About.js';
import Contact from './sections/Contact/Contact.js';
import Header from './sections/Header/Header.js';
import Projects from './sections/Projects/Projects.js';
import Skills from './sections/Skills/Skills.js';
import Footer from './sections/Footer/Footer.js';
import Interests from './sections/Interests/Interests.js';


function App() {

  return (
    <div className="App" style={{ overflowX: 'hidden' }}>
      <Header className="header"></Header>
      <LandingPage id="LandingPage"></LandingPage>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Interests></Interests>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
