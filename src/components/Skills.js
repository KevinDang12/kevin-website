import React, {Component} from 'react';
import MediaQuery from "react-responsive";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import javaImg from "../resources/Java.png";
import androidImg from "../resources/Android.png";
import cImg from "../resources/C.png";
import cppImg from "../resources/C++.png";
import pythonImg from "../resources/Python.png";
import sqlImg from "../resources/SQL.png";
import javascriptImg from "../resources/Javascript.png";
import reactImg from "../resources/React.png";

const styles = {
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

    smallSkillImage: {
        width: '100px',
        height: '100px',
        alignItems: 'center',
        justifyContent: 'center',
        objectFit: 'cover',
    },
}

class Skills extends Component {
    render() {
        return (
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
        )
    }
}

export default Skills;