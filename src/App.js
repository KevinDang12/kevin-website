import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Sirt from './components/Sirt';
import Teach from './components/Teach';
import Research from './components/Research';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Chatbot from './components/chatbot/Chatbot';

const styles = {
  dividerWhite: {
    width: '100%',
    height: '50px',
  },

  dividerBeige: {
    width: '100%',
    backgroundColor: '#d8d8b2',
    height: '50px',
  },

  dividerBlue: {
    width: '100%',
    backgroundColor: '#f2f7fb',
    height: '50px',
  },

  dividerRed: {
    width: '100%',
    backgroundColor: '#f3abab',
    height: '100px',
  },

  dividerLightBlue: {
    width: '100%',
    backgroundColor: '#9fdcdc',
    height: '50px',
  },

  dividerLightGreen: {
    width: '100%',
    backgroundColor: '#90ee90',
    height: '50px',
  },

  dividerPurple: {
    width: '100%',
    backgroundColor: '#d2beff',
    height: '50px',
  },
};

/**
 * The Web Portfolio which contains all the components
 * @return {JSX.Element} Web Portfolio
 */
function App() {
  return (
    <div>
      <Header/>

      <section id="home">
        <Home/>
      </section>

      <div style={styles.dividerWhite}/>

      <section id="about">
        <About/>
      </section>

      <div style={styles.dividerWhite}/>

      <div style={styles.dividerBeige}/>
        <Sirt/>
      <div style={styles.dividerBeige}/>

      <div style={styles.dividerLightGreen}/>

      <section id="work">
        <Research/>
      </section>

      <div style={styles.dividerLightGreen}/>

      <div style={styles.dividerLightBlue}/>
        <Teach/>
      <div style={styles.dividerLightBlue}/>

      <section id="skills">
        <Skills/>
      </section>

      <section id="projects">
        <div style={styles.dividerRed}/>
      </section>

      <Projects/>

      <div style={styles.dividerRed}/>

      <div style={styles.dividerBlue}/>

      <section id="education">
        <Education/>
      </section>

      <div style={styles.dividerBlue}/>

      <div style={styles.dividerPurple}/>

      <section id="contact">
        <Contact/>
      </section>

      <Chatbot />
    </div>
  );
}

export default App;
