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
        padding: '10px',
        width: '190px',
        height: '215px',
        objectFit: 'cover',
        alignItems: 'center',
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

    skillImage: {
        objectFit: 'scale-down',
        margin: 'auto',
    },

    smallSkillImage: {
        width: '90%',
        height: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        objectFit: 'scale-down',
        marginTop: '5%',
        marginBottom: '5%',
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
                                    <Card.Img src={javaImg} style={styles.skillImage}/>
                                    <Card.Text style={styles.text}>Java</Card.Text>
                                </Card>
                                <Card style={styles.skillsCard}>
                                    <Card.Img src={androidImg} style={styles.skillImage}/>
                                    <Card.Text style={styles.text}>Android</Card.Text>
                                </Card>
                                <Card style={styles.skillsCard}>
                                    <Card.Img src={cImg} style={styles.skillImage}/>
                                    <Card.Text style={styles.text}>C</Card.Text>
                                </Card>
                                <Card style={styles.skillsCard}>
                                    <Card.Img src={cppImg} style={styles.skillImage}/>
                                    <Card.Text style={styles.text}>C++</Card.Text>
                                </Card>
                            </CardGroup>
                        </div>

                        <div>
                            <CardGroup style={styles.cardRow}>
                                <Card style={styles.skillsCard}>
                                    <Card.Img src={pythonImg} style={styles.skillImage}/>
                                    <Card.Text style={styles.text}>Python</Card.Text>
                                </Card>
                                <Card style={styles.skillsCard}>

                                    <Card.Img src={sqlImg} style={styles.skillImage}/>
                                    <Card.Text style={styles.text}>SQL</Card.Text>

                                </Card>
                                <Card style={styles.skillsCard}>
                                    <Card.Img src={javascriptImg} style={styles.skillImage}/>
                                    <Card.Text style={styles.text}>JavaScript</Card.Text>
                                </Card>
                                <Card style={styles.skillsCard}>
                                    <Card.Img src={reactImg} style={styles.skillImage}/>
                                    <Card.Text style={styles.text}>React</Card.Text>
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
                                <Card.Img src={javaImg}/>
                                <Card.Text style={styles.text}>Java</Card.Text>
                            </Card>
                            <Card style={styles.skillsCard}>
                                <Card.Img src={androidImg}/>
                                <Card.Text style={styles.text}>Android</Card.Text>
                            </Card>
                            <Card style={styles.skillsCard}>
                                <Card.Img src={cImg} style={styles.smallSkillImage}/>
                                <Card.Text style={styles.text}>C</Card.Text>
                            </Card>
                            <Card style={styles.skillsCard}>
                                <Card.Img src={cppImg} style={styles.smallSkillImage}/>
                                <Card.Text style={styles.text}>C++</Card.Text>
                            </Card>
                            <Card style={styles.skillsCard}>
                                <Card.Img src={pythonImg} style={styles.smallSkillImage}/>
                                <Card.Text style={styles.text}>Python</Card.Text>
                            </Card>
                            <Card style={styles.skillsCard}>
                                <Card.Img src={sqlImg} style={styles.smallSkillImage}/>
                                <Card.Text style={styles.text}>SQL</Card.Text>
                            </Card>
                            <Card style={styles.skillsCard}>
                                <Card.Img src={javascriptImg} style={styles.smallSkillImage}/>
                                <Card.Text style={styles.text}>JavaScript</Card.Text>
                            </Card>
                            <Card style={styles.skillsCard}>
                                <Card.Img src={reactImg} style={styles.smallSkillImage}/>
                                <Card.Text style={styles.text}>React</Card.Text>
                            </Card>
                        </div>
                    </div>
                </MediaQuery>
            </div>
        )
    }
}

export default Skills;