import React from 'react';
import MediaQuery from 'react-responsive';
import Carousel from 'react-bootstrap/Carousel';
import notepad from '../resources/Notepad.jpg';
import minesweeper from '../resources/Minesweeper.jpg';
import * as projectsText from './text/projectsText';

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
        <h1 style={{paddingBottom: '20px'}}>{projectsText.TITLE}</h1>

        <Carousel variant="dark" height={700} style={{width: '100%'}}>

          <Carousel.Item interval={8000}>
            <img src={notepad} style={{maxWidth: '100%'}} alt={''}/>
            <Carousel.Caption style={styles.carouselCaptionStyle}>
              <h2 data-testid={'notepad'}>{projectsText.PROJECT_TWO}</h2>
              <MediaQuery minWidth={769}>
                <p>{projectsText.DESCRIPTION_TWO[0]}</p>
                <p>{projectsText.DESCRIPTION_TWO[1]}<a href={projectsText.NOTEPAD_LINK}>here</a></p>
              </MediaQuery>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={8000}>
            <img src={minesweeper} style={{maxWidth: '100%'}} alt={''}/>
            <Carousel.Caption style={styles.carouselCaptionStyle}>
              <h2 data-testid={'minesweeper'}>{projectsText.PROJECT_ONE}</h2>
              <MediaQuery minWidth={769}>
                {projectsText.DESCRIPTION_ONE.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </MediaQuery>
              <p>
                {projectsText.LOCATE_MINESWEEPER}<a
                  data-testid={'minesweeperlink'}
                  href={projectsText.LINK}
                  target="_blank"
                  rel="noreferrer">
                  {projectsText.HERE}
                </a>
              </p>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
      </div>
    </div>
  );
}
