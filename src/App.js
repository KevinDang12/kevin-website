import './App.css';
import React, {Component} from 'react';
import keyboard from './background.jpg';
import volunteer from './volunteer.jpg';
import about from './About.jpg';
import notepad from './Notepad.jpg';
import education from './Education.jpg'
import contact from './Contact.jpg';

const styles = {
    background: {
        position: 'absolute',
        margin: '0px',
        padding: '0px',
        backgroundImage: `url(${keyboard})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
        zIndex: -1
    },

    about: {
        position: 'absolute',
        margin: '0px',
        padding: '0px',
        backgroundImage: `url(${about})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
        zIndex: -1
    },

    skills: {
        margin: '0px',
        padding: '0px',
        position: 'relative',
        color: 'white',
        backgroundColor: 'orange',
        zIndex: 1,
        width: '100%',
        height: '100%',
    },

    project: {
        position: 'absolute',
        margin: '0px',
        padding: '0px',
        backgroundImage: `url(${notepad})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
        zIndex: -1
    },

    education: {
        position: 'absolute',
        margin: '0px',
        padding: '0px',
        backgroundImage: `url(${education})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
        zIndex: -1
    },

    volunteer: {
        position: 'absolute',
        margin: '0px',
        padding: '0px',
        backgroundImage: `url(${volunteer})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
        zIndex: -1
    },

    contact: {
        position: 'absolute',
        margin: '0px',
        padding: '0px',
        backgroundImage: `url(${contact})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
        zIndex: -1
    },

    header: {
        margin: '0px',
        padding: '0px',
        position: 'relative',
        color: 'white',
        backgroundColor: 'orange',
        zIndex: 1,
        width: '50%',
        height: '100vh',
    }
}

class App extends Component {

    render() {
        return (
            <div>
                <div>
                    <div style={styles.background}>

                    </div>
                    <div style={styles.header}>
                        <h1>Hi. I'm Kevin.</h1>
                        <h2>I’m a Computer Engineering Student.</h2>
                        <h2>You may check out more about me and my projects below.</h2>
                    </div>
                </div>

                {/* About */}
                <div>
                    <div style={styles.about}>

                    </div>
                    <div style={styles.header}>
                        <h1>A brief summary about me</h1>
                        <h2>My name is Kevin Dang, I am currently
                            a second-year Computer Engineering
                            student. I have had an interest in working
                            with computers and it has led me
                            to have a passion for programming.
                        </h2>
                    </div>
                </div>

                {/* Skills */}
                <div>
                    <div style={styles.skills}>
                        <h1>My Skills</h1>
                        <li>Java</li>
                        <li>Android</li>
                        <li>C</li>
                        <li>C++</li>
                        <li>Python</li>
                        <li>SQL</li>
                        <li>JavaScript</li>
                        <li>React</li>
                    </div>
                </div>

                {/* Projects */}
                <div>
                    <h1>Projects</h1>
                    <button>Notepad</button>
                    <button>Minesweeper</button>
                </div>

                <div>
                    <div style={styles.project}>

                    </div>
                    <div  style={styles.header}>
                        <p>
                            A simple minesweeper game made using JavaFX.
                            The rules are the same as minesweeper, you must
                            find all the tiles that don’t have mines and avoid the
                            tiles with mines
                        </p>
                        <p>
                            An Android notepad app for android devices.
                            The notepad allows you to create and store multiple
                            notes. Each note is encrypted with a password, a
                            password is required to decrypt each note.
                        </p>
                    </div>
                </div>

                {/* Education */}
                <div>
                    <div style={styles.education}>

                    </div>
                    <div  style={styles.header}>
                        <h1>Education</h1>
                        <h2>Sheridan College</h2>
                        <p>
                            I am currently a second-year Computer Engineering
                            Technology student at Sheridan College.
                        </p>
                        <p>2020 - Present</p>
                        <h3>Relevant Courses</h3>
                        <li>C Programming</li>
                        <li>Computer Architecture</li>
                        <li>Database Design and Implementation</li>
                        <li>Java Programming</li>
                        <li>Linux/Unix Operating Systems</li>
                    </div>
                </div>

                {/* Volunteer */}
                <div>
                    <div style={styles.volunteer}>

                    </div>
                    <div style={styles.header}>
                        <h1>Volunteer Experience</h1>
                        <h2>Youth Program Volunteer | City of Brampton</h2>
                        <h2>July 2018 | August 2018 | Brampton, ON</h2>
                        <h3>- Organized activities and cooperated with city
                            staff in managing indoor and outdoor activities such as
                            crafts, cooking, fishing, and sports at a summer camp
                        </h3>

                        <h2>CYC Volunteer | TRCA</h2>
                        <h2>July 2017 | August 2017 | Brampton, ON</h2>
                        <h3>- Assisted in restoration work, roadside cleanup, and
                            maintenance at camps, community farm, and field centres
                        </h3>
                    </div>
                </div>

                {/* Contact */}
                <div>
                    <div style={styles.contact}>

                    </div>
                    <div style={styles.header}>
                        <h1>Contact</h1>
                        <h2>Email</h2>
                        <h2>GitHub</h2>
                        <h2>LinkedIn</h2>
                        <h2>Resume</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;