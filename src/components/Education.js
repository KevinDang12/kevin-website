import React from 'react';
import {Parallax} from "react-parallax";
import MediaQuery from "react-responsive";
import education from "../resources/Education.jpg";

const styles = {
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
}

export default function Education() {
    return (
        <div>
            <MediaQuery minWidth={769}>
                <div style={styles.educationSection}>
                    <h1 data-testid="educationHeader">Education</h1>
                    <h2>Sheridan College</h2>
                    <p>
                        I am currently a third-year Computer Engineering
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
            <MediaQuery maxWidth={768}>
                <div style={styles.educationSectionSmall}>
                    <h1 data-testid="educationHeaderMobile">Education</h1>
                    <h2>Sheridan College</h2>
                    <p>
                        I am currently a third-year Computer Engineering
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
    )
}