import './App.css';
import React, {Component} from 'react';
import keyboard from './background.jpg';
import volunteer from './volunteer.jpg';
import about from './About.jpg';
import notepad from './Notepad.jpg';
import minesweeper from './Minesweeper.jpg';
import education from './Education.jpg'
import contact from './Contact.jpg';
import javaImg from './Java.png';
import androidImg from './Android.png';
import cImg from './C.png';
import cppImg from './C++.png';
import pythonImg from './Python.png';
import sqlImg from './SQL.png';
import javascriptImg from './Javascript.png';
import reactImg from './React.png';
import resume from './Resume.pdf';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import { Parallax } from 'react-parallax';

const styles = {
    background: {
        padding: '0px',
        width: '100vw',
        height: '100vh',
        maxWidth: '100%',
        zIndex: -1,
    },

    backgroundSection: {
        margin: '0px',
        padding: '0px',
        position: 'absolute',
        textAlign: 'center',
        flexDirection: 'column',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        backgroundColor: 'transparent',
        zIndex: 1,
        width: '100%',
        height: '100vh'
    },

    about: {
        padding: '0px',
        width: '100vw',
        height: '100vh',
        maxWidth: '100%',
        zIndex: -1,
    },

    aboutSection: {
        margin: '0px',
        paddingLeft: '100px',
        paddingRight: '100px',
        position: 'absolute',
        textAlign: 'center',
        flexDirection: 'column',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
        backgroundColor: 'white',
        zIndex: 1,
        width: '50%',
        height: '100vh'
    },

    skillSection: {
        margin: '0px',
        padding: '0px',
        position: 'relative',
        textAlign: 'center',
        flexDirection: 'column',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
        backgroundColor: '#ffcfbe',
        zIndex: 1,
        width: '100%',
        maxWidth: '100%',
        height: '100vh'
    },

    project: {
        position: 'absolute',
        margin: '0px',
        padding: '0px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
        maxWidth: '100%',
        zIndex: -1
    },

    projectSection: {
        margin: '0px',
        padding: '0px',
        position: 'relative',
        textAlign: 'center',
        flexDirection: 'column',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
        backgroundColor: '#cdcdcd',
        zIndex: 1,
        width: '100%',
        maxWidth: '100%',
        height: '100vh'
    },

    education: {
        padding: '0px',
        width: '100vw',
        height: '100vh',
        maxWidth: '100%',
        zIndex: -1
    },

    educationSection: {
        margin: '0px',
        padding: '0px',
        position: 'absolute',
        textAlign: 'center',
        flexDirection: 'column',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
        backgroundColor: '#f2f7fb',
        zIndex: 1,
        width: '50%',
        height: '100vh'
    },

    volunteer: {
        padding: '0px',
        width: '100vw',
        height: '100vh',
        maxWidth: '100%',
        zIndex: -1
    },

    volunteerSection: {
        margin: '0px',
        padding: '50px',
        position: 'absolute',
        textAlign: 'center',
        flexDirection: 'column',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
        backgroundColor: 'white',
        zIndex: 1,
        width: '55%',
        height: '100vh',
        right: '0%'
    },

    contact: {
        padding: '0px',
        width: '100vw',
        height: '100vh',
        maxWidth: '100%',
        zIndex: -1
    },

    contactSection: {
        margin: '0px',
        padding: '0px',
        position: 'absolute',
        textAlign: 'center',
        flexDirection: 'column',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
        backgroundColor: '#d2beff',
        zIndex: 1,
        width: '50%',
        height: '100vh'
    },

    carouselBackground: {
        backgroundColor: '#cdcdcd',
        width: '100%'
    },

    skillsRow: {
        flexDirection: 'row',
        display: 'flex'
    },

    skillsCard: {
        margin: '20px',
        padding: '20px',
        objectFit: 'cover',
    },

    dividerWhite: {
        width: '100%',
        height: '50px'
    },

    dividerBlue: {
        width: '100%',
        backgroundColor: '#f2f7fb',
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
                <div style={{background: 'black'}}>
                    <div style={styles.backgroundSection}>
                        <h1>Hi. I'm Kevin.</h1>
                        <h2>I’m a Computer Engineering Student.</h2>
                        <h2>You may check out more about me and my projects below.</h2>
                    </div>
                    <Parallax blur={{min: -20, max: 20}} bgImage={keyboard}>
                        <div style={styles.background}/>
                    </Parallax>
                </div>

                <div style={styles.dividerWhite}/>

                {/* About */}
                <div>
                    <div style={styles.aboutSection}>
                        <h1>A brief summary about me</h1>
                        <h5>
                            My name is Kevin Dang, I am currently
                            a second-year Computer Engineering
                            student. I have had an interest in working
                            with computers and it has led me
                            to have a passion for programming.
                        </h5>
                    </div>
                    <Parallax blur={{min: -5, max: 5}} bgImage={about} strength={200}>
                        <div style={styles.about}/>
                    </Parallax>
                </div>

                <div style={styles.dividerWhite}/>

                {/* Skills */}
                <div>
                    <div style={styles.skillSection}>
                        <h1>My Skills</h1>
                        <div style={styles.skillsRow}>
                            <Card style={styles.skillsCard}>
                                <Card.Img src={javaImg}/>
                                <Card.Title>Java</Card.Title>
                            </Card>
                            <Card style={styles.skillsCard}>
                                <Card.Img src={androidImg}/>
                                <Card.Title>Android</Card.Title>
                            </Card>
                            <Card style={styles.skillsCard}>
                                <Card.Img src={cImg}/>
                                <Card.Title>C</Card.Title>
                            </Card>
                            <Card style={styles.skillsCard}>
                                <Card.Img src={cppImg}/>
                                <Card.Title>C++</Card.Title>
                            </Card>
                        </div>
                        <div style={styles.skillsRow}>
                            <Card style={styles.skillsCard}>
                                <Card.Img src={pythonImg}/>
                                <Card.Title>Python</Card.Title>
                            </Card>
                            <Card style={styles.skillsCard}>
                                <Card.Img src={sqlImg}/>
                                <Card.Title>SQL</Card.Title>
                            </Card>
                            <Card style={styles.skillsCard}>
                                <Card.Img src={javascriptImg}/>
                                <Card.Title>JavaScript</Card.Title>
                            </Card>
                            <Card style={styles.skillsCard}>
                                <Card.Img src={reactImg}/>
                                <Card.Title>React</Card.Title>
                            </Card>
                        </div>
                    </div>
                </div>

                {/* Projects */}
                <div>
                    <div style={styles.projectSection}>
                        <h1>Projects</h1>

                        <Carousel variant="dark" height={700}>
                            <Carousel.Item>
                                <img src={notepad}/>
                                <Carousel.Caption>
                                    <h2>Notepad</h2>
                                    <p>
                                        An Android notepad app for Android devices.
                                        The notepad allows you to create and store multiple
                                        notes.
                                    </p>
                                    <p>
                                        Each note is encrypted with a password, a
                                        password is required to decrypt each note.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img src={minesweeper}/>
                                <Carousel.Caption>
                                    <h2>Minesweeper</h2>
                                    <p>
                                        A simple minesweeper game made using JavaFX.
                                        The rules are the same as minesweeper,
                                    </p>
                                    <p>
                                        you must find all the tiles that don’t have
                                        mines and avoid the tiles with mines
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>

                    </div>
                </div>

                <div style={styles.dividerBlue}/>

                {/* Education */}
                <div>
                    <div style={styles.educationSection}>
                        <h1>Education</h1>
                        <h2>Sheridan College</h2>
                        <p>
                            I am currently a second-year Computer Engineering
                            Technology student at Sheridan College.
                        </p>
                        <p>2020 - Present</p>
                        <h3>Relevant Courses</h3>
                        <p>C Programming</p>
                        <p>Computer Architecture</p>
                        <p>Database Design and Implementation</p>
                        <p>Java Programming</p>
                        <p>Linux/Unix Operating Systems</p>
                    </div>
                    <Parallax bgImage={education} strength={-300}>
                        <div style={styles.education}/>
                    </Parallax>
                </div>

                <div style={styles.dividerBlue}/>

                <div style={styles.dividerWhite}/>

                {/* Volunteer */}
                <div>
                    <div style={styles.volunteerSection}>
                        <h1>Volunteer Experience</h1>
                        <h2>Youth Program Volunteer | City of Brampton</h2>
                        <h2>Summer 2018 | Brampton, ON</h2>
                        <p>
                            Organized activities and cooperated with city
                            staff in managing indoor and outdoor activities such as
                            crafts, cooking, fishing, and sports at a summer camp.
                        </p>
                        <br/>
                        <h2>CYC Volunteer | TRCA</h2>
                        <h2>Summer 2017 | Brampton, ON</h2>
                        <p>
                            Assisted in restoration work, roadside cleanup, and
                            maintenance at camps, community farm, and field centres
                            as a Conservation Youth Corps Volunteer for the Toronto
                            and Region Conservation Authority.
                        </p>
                    </div>
                    <Parallax blur={{min: 15, max: -15}} bgImage={volunteer} strength={500}>
                        <div style={styles.volunteer}/>
                    </Parallax>
                </div>

                <div style={styles.dividerWhite}/>

                <div style={styles.dividerPurple}/>

                {/* Contact */}
                <div>
                    <div style={styles.contactSection}>
                        <h1>Contact</h1>
                        <h5>dankevin@sheridancollege.ca</h5>
                        <h5><a href="https://github.com/KevinDang12">GitHub</a></h5>
                        <h5><a href="https://www.linkedin.com/in/kevin-dang-comptech/">LinkedIn</a></h5>
                        <h5><a href={resume} target = "_blank">Resume</a></h5>
                    </div>
                    <Parallax blur={{min: 8, max: -8}} bgImage={contact} strength={-250}>
                        <div style={styles.contact}/>
                    </Parallax>
                </div>
            </div>
        );
    }
}

export default App;