import React from 'react';
import MediaQuery from 'react-responsive';
import Carousel from 'react-bootstrap/Carousel';
import notepad from '../resources/Notepad.jpg';
import minesweeper from '../resources/Minesweeper.jpg';

const styles = {

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
    zIndex: -1,
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
    minHeight: '80vh',
  },

  carouselCaptionStyle: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    maxWidth: '100%',
  },
};

/**
 * The Projects Page
 * @return {JSX.Element} Projects Page
 */
export default function Projects() {
  return (
    <div>
      <div style={styles.projectSection}>
        <h1 style={{paddingBottom: '20px'}}>Projects</h1>

        <Carousel variant="dark" height={700} style={{width: '100%'}}>
          <Carousel.Item interval={8000}>
            <img src={minesweeper} style={{maxWidth: '100%'}} alt={''}/>
            <Carousel.Caption style={styles.carouselCaptionStyle}>
              <h2 data-testid={'minesweeper'}>Project #1: Minesweeper</h2>
              <MediaQuery minWidth={769}>
                <p>
                    A minesweeper game created using
                    React and Node.js; it is hosted on AWS.
                </p>
                <p data-testid={'para'}>
                    It also includes a backend server
                    that allows users to save their
                    minesweeper games and access it
                    on different devices.
                </p>
              </MediaQuery>
              <p>
                                You can find the minesweeper web game <a data-testid={'minesweeperlink'} href="http://www.kevindang12.com/minesweeper" target="_blank" rel="noreferrer">here</a>.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={8000}>
            <img src={notepad} style={{maxWidth: '100%'}} alt={''}/>
            <Carousel.Caption style={styles.carouselCaptionStyle}>
              <h2 data-testid={'notepad'}>Project #2: Notepad</h2>
              <MediaQuery minWidth={769}>
                <p>
                    An Android notepad app for Android devices.
                    The notepad allows you to create
                    and store multiple notes.
                </p>
                <p>
                    Each note is encrypted with a password, a
                    password is required to decrypt each note.
                </p>
              </MediaQuery>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
