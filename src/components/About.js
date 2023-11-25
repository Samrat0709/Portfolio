import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import abt from '../images/about.jpeg'
const About = () => {
    return (
        <section className='about' id='about'>
            <Container>
                <Row>
                    <Col sm className='abt-container'>
                        <Image src={abt} fluid className='abt' />
                    </Col>
                    <Col sm className='txt-container'>
                        <div className="txt">
                            <h1>About <span>Me</span></h1>
                            <h2 >Frontend Webdeveloper</h2>
                            <p>I'm pusruing B.Tech from CoochBehar Government Engineering College, Coochbehar. I'm a 2nd Year student in Mechanical Engineering Department. Mechanical Engineering student with an immense interest in coding and Development.</p>
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default About
