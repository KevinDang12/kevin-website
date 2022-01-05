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
import CardGroup from 'react-bootstrap/CardGroup'
import { Parallax } from 'react-parallax';
import MediaQuery from 'react-responsive'

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
        minHeight: '100vh'
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
        width: '100%',

    },

    skillsCard: {
        margin: '10px',
        padding: '20px',
        objectFit: 'cover',
    },

    cardRow: {
        display: 'flex',
        flexFlow: 'row wrap',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
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

    aboutSectionSmall: {
        margin: '0px',
        paddingLeft: '50px',
        paddingRight: '50px',
        textAlign: 'center',
        flexDirection: 'column',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
        backgroundColor: 'white',
        width: '100%',
        minHeight: '50vh'
    },

    educationSectionSmall: {
        margin: '0px',
        padding: '0px',
        textAlign: 'center',
        flexDirection: 'column',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
        backgroundColor: '#f2f7fb',
        zIndex: 1,
        width: '100%',
        minHeight: '50vh'
    },

    volunteerSectionSmall: {
        margin: '0px',
        paddingLeft: '10px',
        paddingRight: '10px',
        textAlign: 'center',
        flexDirection: 'column',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
        backgroundColor: 'white',
        zIndex: 1,
        width: '100%',
        minHeight: '50vh',
    },

    contactSectionSmall: {
        margin: '0px',
        padding: '0px',
        textAlign: 'center',
        flexDirection: 'column',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
        backgroundColor: '#d2beff',
        zIndex: 1,
        width: '100%',
        minHeight: '50vh'
    },

    smallSkillImage: {
        width: '100px',
        height: '100px',
        alignItems: 'center',
        justifyContent: 'center',
        objectFit: 'cover',
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
                    <MediaQuery minWidth={800}>
                        <div style={styles.aboutSection}>
                            <h1>A Brief Summary about Me</h1>
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
                    </MediaQuery>
                    <MediaQuery maxWidth={800}>
                        <div style={styles.aboutSectionSmall}>
                            <h1>A Brief Summary about Me</h1>
                            <h5>
                                My name is Kevin Dang, I am currently
                                a second-year Computer Engineering
                                student. I have had an interest in working
                                with computers and it has led me
                                to have a passion for programming.
                            </h5>
                        </div>
                    </MediaQuery>
                </div>

                <div style={styles.dividerWhite}/>

                {/* Skills */}
                <div>
                    <MediaQuery minWidth={800}>
                        <div style={styles.skillSection}>
                            <h1>My Skills</h1>
                            <div>
                                <CardGroup style={styles.cardRow}>
                                    <Card style={styles.skillsCard}>
                                        <Card.Img src={javaImg}/>
                                        <Card.Text>Java</Card.Text>
                                    </Card>
                                    <Card style={styles.skillsCard}>
                                        <Card.Img src={androidImg}/>
                                        <Card.Text>Android</Card.Text>
                                    </Card>
                                    <Card style={styles.skillsCard}>
                                        <Card.Img src={cImg}/>
                                        <Card.Text>C</Card.Text>
                                    </Card>
                                    <Card style={styles.skillsCard}>
                                        <Card.Img src={cppImg}/>
                                        <Card.Text>C++</Card.Text>
                                    </Card>
                                </CardGroup>
                            </div>

                            <div>
                                <CardGroup style={styles.cardRow}>
                                    <Card style={styles.skillsCard}>
                                        <Card.Img src={pythonImg}/>
                                        <Card.Text>Python</Card.Text>
                                    </Card>
                                    <Card style={styles.skillsCard}>
                                        <Card.Img src={sqlImg}/>
                                        <Card.Text>SQL</Card.Text>
                                    </Card>
                                    <Card style={styles.skillsCard}>
                                        <Card.Img src={javascriptImg}/>
                                        <Card.Text>JavaScript</Card.Text>
                                    </Card>
                                    <Card style={styles.skillsCard}>
                                        <Card.Img src={reactImg}/>
                                        <Card.Text>React</Card.Text>
                                    </Card>
                                </CardGroup>
                            </div>
                        </div>
                    </MediaQuery>

                    <MediaQuery maxWidth={800}>
                        <div style={styles.skillSection}>
                            <h1>My Skills</h1>
                            <div style={styles.cardRow}>
                                <Card style={styles.skillsCard}>
                                    <Card.Img src={javaImg} style={styles.smallSkillImage}/>
                                    <Card.Text>Java</Card.Text>
                                </Card>
                                <Card style={styles.skillsCard}>
                                    <Card.Img src={androidImg} style={styles.smallSkillImage}/>
                                    <Card.Text>Android</Card.Text>
                                </Card>
                                <Card style={styles.skillsCard}>
                                    <Card.Img src={cImg} style={styles.smallSkillImage}/>
                                    <Card.Text>C</Card.Text>
                                </Card>
                                <Card style={styles.skillsCard}>
                                    <Card.Img src={cppImg} style={styles.smallSkillImage}/>
                                    <Card.Text>C++</Card.Text>
                                </Card>
                                <Card style={styles.skillsCard}>
                                    <Card.Img src={pythonImg} style={styles.smallSkillImage}/>
                                    <Card.Text>Python</Card.Text>
                                </Card>
                                <Card style={styles.skillsCard}>
                                    <Card.Img src={sqlImg} style={styles.smallSkillImage}/>
                                    <Card.Text>SQL</Card.Text>
                                </Card>
                                <Card style={styles.skillsCard}>
                                    <Card.Img src={javascriptImg} style={styles.smallSkillImage}/>
                                    <Card.Text>JavaScript</Card.Text>
                                </Card>
                                <Card style={styles.skillsCard}>
                                    <Card.Img src={reactImg} style={styles.smallSkillImage}/>
                                    <Card.Text>React</Card.Text>
                                </Card>
                            </div>
                        </div>
                    </MediaQuery>
                </div>

                {/* Projects */}
                {/*<div>*/}
                {/*    <div style={styles.projectSection}>*/}
                {/*        <h1>Projects</h1>*/}

                {/*        <Carousel variant="dark" height={700}>*/}
                {/*            <Carousel.Item interval={8000}>*/}
                {/*                <img src={notepad}/>*/}
                {/*                <Carousel.Caption>*/}
                {/*                    <h2>Project #1: Notepad</h2>*/}
                {/*                    <p>*/}
                {/*                        An Android notepad app for Android devices.*/}
                {/*                        The notepad allows you to create and store multiple*/}
                {/*                        notes.*/}
                {/*                    </p>*/}
                {/*                    <p>*/}
                {/*                        Each note is encrypted with a password, a*/}
                {/*                        password is required to decrypt each note.*/}
                {/*                    </p>*/}
                {/*                </Carousel.Caption>*/}
                {/*            </Carousel.Item>*/}

                {/*            <Carousel.Item interval={8000}>*/}
                {/*                <img src={minesweeper}/>*/}
                {/*                <Carousel.Caption>*/}
                {/*                    <h2>Project #2: Minesweeper</h2>*/}
                {/*                    <p>*/}
                {/*                        A simple minesweeper game made using JavaFX.*/}
                {/*                        The rules are the same as minesweeper,*/}
                {/*                    </p>*/}
                {/*                    <p>*/}
                {/*                        you must find all the tiles that don’t have*/}
                {/*                        mines and avoid the tiles with mines*/}
                {/*                    </p>*/}
                {/*                </Carousel.Caption>*/}
                {/*            </Carousel.Item>*/}
                {/*        </Carousel>*/}

                {/*    </div>*/}
                {/*</div>*/}

                <div style={styles.dividerBlue}/>

                {/* Education */}
                <div>
                    <MediaQuery minWidth={800}>
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
                    </MediaQuery>
                    <MediaQuery maxWidth={800}>
                        <div style={styles.educationSectionSmall}>
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
                    </MediaQuery>
                </div>

                <div style={styles.dividerBlue}/>

                <div style={styles.dividerWhite}/>

                {/* Volunteer */}
                <div>
                    <MediaQuery minWidth={800}>
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
                    </MediaQuery>
                    <MediaQuery maxWidth={800}>
                        <div style={styles.volunteerSectionSmall}>
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
                    </MediaQuery>
                </div>

                <div style={styles.dividerWhite}/>

                <div style={styles.dividerPurple}/>

                {/* Contact */}
                <div>
                    <MediaQuery minWidth={800}>
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
                    </MediaQuery>
                    <MediaQuery maxWidth={800}>
                        <div style={styles.contactSectionSmall}>
                            <h1>Contact</h1>
                            <h5>dankevin@sheridancollege.ca</h5>
                            <h5><a href="https://github.com/KevinDang12">GitHub</a></h5>
                            <h5><a href="https://www.linkedin.com/in/kevin-dang-comptech/">LinkedIn</a></h5>
                            <h5><a href={resume} target = "_blank">Resume</a></h5>
                        </div>
                    </MediaQuery>
                </div>
            </div>
        );
    }
}

export default App;