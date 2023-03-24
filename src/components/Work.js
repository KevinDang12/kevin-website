import React, {Component} from 'react';
import {Parallax} from "react-parallax";
import MediaQuery from "react-responsive";
import code from "../resources/code.png";

const styles = {
    work: {
        padding: '0px',
        width: '100vw',
        height: '100vh',
        maxWidth: '100%',
        zIndex: -1,
    },

    workSection: {
        margin: '0px',
        padding: '0px',
        position: 'absolute',
        textAlign: 'center',
        flexDirection: 'column',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
        backgroundColor: '#9fdcdc',
        zIndex: 1,
        width: '48%',
        height: '100vh',
        right: '0%'
    },

    workSectionSmall: {
        margin: '0px',
        paddingLeft: '10px',
        paddingRight: '10px',
        textAlign: 'center',
        flexDirection: 'column',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
        backgroundColor: '#9fdcdc',
        zIndex: 1,
        width: '100%',
        minHeight: '50vh',
    },
}

class Work extends Component {
    render() {
        return (
            <div>
                <MediaQuery minWidth={800}>
                    <div style={styles.workSection}>
                        <h1>Work Experience</h1>
                        <h2>Teaching Assistant</h2>
                        <h2>Sheridan College</h2>
                        <h2>September - December 2022</h2>
                        <ul className="text-align">
                            <li>
                                TA'd in three courses: Java (Object Oriented Programming), Computer Mathematics,
                                and front-end web development using HTML, CSS, and JavaScript
                            </li>
                            <li>
                                Assisted students in those courses by answering students' questions during lectures,
                                group reviews, and one-on-one sessions; hosted tutorials reviewing course concepts
                            </li>
                            <li>
                                Contributed to updating a Time-Management LibGuide on
                                the official Sheridan College website by adding new content and utilizing
                                HTML to add new functionality
                            </li>
                        </ul>
                    </div>
                    <Parallax bgImage={code} strength={450}>
                        <div style={styles.work}/>
                    </Parallax>
                </MediaQuery>

                <MediaQuery maxWidth={799}>
                    <div style={styles.workSectionSmall}>
                        <h1>Work Experience</h1>
                        <h2>Teaching Assistant</h2>
                        <h2>Sheridan College</h2>
                        <h2>September - December 2022</h2>
                        <ul className="text-align">
                            <li>
                                TA'd in three courses: Java (Object Oriented Programming), Computer Mathematics,
                                and front-end web development using HTML, CSS, and JavaScript
                            </li>
                            <li>
                                Assisted students in those courses by answering students' questions during lectures,
                                group reviews, and one-on-one sessions; hosted tutorials reviewing course concepts
                            </li>
                            <li>
                                Contributed to updating a Time-Management LibGuide on
                                the official Sheridan College website by adding new content and utilizing
                                HTML to add new functionality
                            </li>
                        </ul>
                    </div>
                </MediaQuery>
            </div>
        )
    }
}

export default Work;