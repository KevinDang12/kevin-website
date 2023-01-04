import './App.css';
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

const styles = {
    dividerWhite: {
        width: '100%',
        height: '50px'
    },

    dividerBlue: {
        width: '100%',
        backgroundColor: '#f2f7fb',
        height: '50px'
    },

    dividerGray: {
        width: '100%',
        backgroundColor: '#cdcdcd',
        height: '50px'
    },

    dividerLightBlue: {
        width: '100%',
        backgroundColor: '#9fdcdc',
        height: '50px'
    },

    dividerPurple: {
        width: '100%',
        backgroundColor: '#d2beff',
        height: '50px'
    },
}

class App extends Component {
    render() {
        return (
            <div>
                <Home/>

                <div style={styles.dividerWhite}/>
                <About/>
                <div style={styles.dividerWhite}/>

                <div style={styles.dividerLightBlue}/>
                <Work/>
                <div style={styles.dividerLightBlue}/>

                <Skills/>

                <div style={styles.dividerGray}/>
                <Projects/>
                <div style={styles.dividerGray}/>

                <div style={styles.dividerBlue}/>
                <Education/>
                <div style={styles.dividerBlue}/>

                <div style={styles.dividerPurple}/>
                <Contact/>
            </div>
        );
    }
}

export default App;