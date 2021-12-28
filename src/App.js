import './App.css';
import React, {Component} from 'react';
import keyboard from './background.jpg';

class App extends Component {
    render() {

    const styles = {
        background: {
            backgroundImage: `url(${keyboard})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh'
        },
        header1: {
            padding: '400px',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white'
        }
    }

        return (
            <div style={styles.background}>
                <div style={styles.header1}>
                    <h1>Hi. I'm Kevin.</h1>
                    <h2>I’m a Computer Engineering Student.</h2>
                    <h2>You may check out more about me and my projects below.</h2>
                </div>
            </div>
        );
    }
}

export default App;