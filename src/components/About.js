import React from 'react';
import {Parallax} from "react-parallax";
import MediaQuery from "react-responsive";
import about from "../resources/About.jpg";

const styles = {
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
}

export default function About() {
    return (
        <div>
            <MediaQuery minWidth={769}>
                <div style={styles.aboutSection}>
                    <h1 data-testid="aboutHeader">A Brief Summary about Me</h1>
                    <h5>
                        My name is Kevin Dang, I am currently
                        a third-year Computer Engineering Technology
                        student. I have had an interest in working
                        with computers for a long time and it has led me
                        to have a passion for programming.
                    </h5>
                </div>
                <Parallax blur={{min: -5, max: 5}} bgImage={about} strength={200}>
                    <div style={styles.about}/>
                </Parallax>
            </MediaQuery>

            <MediaQuery maxWidth={768}>
                <div style={styles.aboutSectionSmall}>
                    <h1 data-testid="aboutHeaderMobile">A Brief Summary about Me</h1>
                    <h5>
                        My name is Kevin Dang, I am currently
                        a third-year Computer Engineering Technology
                        student. I have had an interest in working
                        with computers for a long time and it has led me
                        to have a passion for programming.
                    </h5>
                </div>
            </MediaQuery>
        </div>
    )
}