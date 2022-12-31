import React, {Component} from 'react';
import {Parallax} from "react-parallax";
import MediaQuery from "react-responsive";
import resume from "../resources/Resume.pdf";
import contact from "../resources/Contact.jpg";

const styles = {
    contact: {
        padding: '0px',
        width: '100vw',
        height: '50vh',
        maxWidth: '100%',
        zIndex: -1,
    },

    contactSection: {
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
        height: '50vh'
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
}

class Contact extends Component {
    render() {
        return (
            <div>
                <MediaQuery minWidth={800}>
                    <div style={styles.contactSection}>
                        <h1>Contact</h1>
                        <h5>dankevin@sheridancollege.ca</h5>
                        <table>
                            <tr>
                                <td>
                                    <h5><a href="https://github.com/KevinDang12">GitHub</a></h5>
                                </td>
                                <td>
                                    <h5><a href="https://www.linkedin.com/in/kevin-dang-comptech/">LinkedIn</a></h5>
                                </td>
                                <td>
                                    <h5><a href={resume} target = "#">Resume</a></h5>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <Parallax blur={{min: 10, max: -25}} bgImage={contact} strength={-250}>
                        <div style={styles.contact}/>
                    </Parallax>
                </MediaQuery>

                <MediaQuery maxWidth={800}>
                    <div style={styles.contactSectionSmall}>
                        <h1>Contact</h1>
                        <h5>dankevin@sheridancollege.ca</h5>
                        <table>
                            <tr>
                                <td>
                                    <h5><a href="https://github.com/KevinDang12">GitHub</a></h5>
                                </td>
                                <td>
                                    <h5><a href="https://www.linkedin.com/in/kevin-dang-comptech/">LinkedIn</a></h5>
                                </td>
                                <td>
                                    <h5><a href={resume} target = "#">Resume</a></h5>
                                </td>
                            </tr>
                        </table>
                    </div>
                </MediaQuery>
            </div>
        )
    }
}

export default Contact;