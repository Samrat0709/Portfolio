import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaPhp, FaBootstrap, FaReact } from 'react-icons/fa';
import { Card } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Skills = () => {
    return (
        <section className="skills" id='skills' >
            <div >
                <h1>My <span>Skills</span></h1>
                <Container className='container'>

                    <Row>
                        <Col sm >
                            <Card className="cards" id='card'>
                                <Card.Body>
                                    <FaHtml5 className="skill" />
                                    <Card.Title>
                                        <h2>HTML</h2>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm>
                            <Card className="cards " id='card' >
                                <Card.Body>
                                    <FaCss3 className="skill" />
                                    <Card.Title>
                                        <h2>CSS</h2>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm>
                            <Card className="cards " id='card'>
                                <Card.Body>
                                    <FaJs className="skill" />
                                    <Card.Title>
                                        <h2>JS</h2>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm>
                            <Card className="cards " id='card'>
                                <Card.Body>
                                    <FaPhp className="skill" />
                                    <Card.Title>
                                        <h2>PHP</h2>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm>
                            <Card className="cards " id='card'>
                                <Card.Body>
                                    <FaReact className="skill" />
                                    <Card.Title>
                                        <h2>React</h2>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm>
                            <Card className="cards " id='card'>
                                <Card.Body>
                                    <FaBootstrap className="skill" />
                                    <Card.Title>
                                        <h2>Bootstrap</h2>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div >
        </section>

    );
}

export default Skills;
