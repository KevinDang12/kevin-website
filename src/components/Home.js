import React, {Component} from 'react';
import {Parallax} from "react-parallax";
import keyboard from "../resources/background.jpg";

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
    }
}

class Home extends Component {
    render() {
        return (
            <div style={{background: 'black'}}>
                <div style={styles.backgroundSection}>
                    <h1 data-testid="header">Hi. I'm Kevin.</h1>
                    <h2>I’m a Computer Engineering Student.</h2>
                    <h2>You may check out more about me and my projects below.</h2>
                </div>
                <Parallax blur={{min: -20, max: 20}} bgImage={keyboard}>
                    <div style={styles.background}/>
                </Parallax>
            </div>
        )
    }
}

export default Home;