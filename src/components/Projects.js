import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Weather from '../images/weather.jpeg';
import imageSearch from '../images/imageSearch.jpeg';
import movie from '../images/movie.jpeg';
import ticTac from '../images/ticTac.jpeg';
import eCom from '../images/ecom.jpeg';
import age from '../images/age.jpeg'
const Projects = () => {
    return (
        <section className='projects' id='projects'>
            <h1>My <span>Projects</span></h1>
            <Container>
                <Row >
                    <Col sm className='pro'>
                        <Card className='project-card'>
                            <div className='image-container'>
                                <Card.Img src={Weather} alt='Project' className='project-image' />
                                <div className='overlay'></div>
                                <div className='button-container'>
                                    <a href="https://samrat0709.github.io/Weather/" target="_blank">
                                        <Button variant='primary'>Weather App</Button></a>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col sm className='pro'>
                    <Card className='project-card'>
                            <div className='image-container'>
                                <Card.Img src={imageSearch} alt='Project' className='project-image' />
                                <div className='overlay'></div>
                                <div className='button-container'>
                                    <a href="https://samrat0709.github.io/ImageSearch/" target="_blank">
                                        <Button variant='primary'>Image Search</Button></a>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col sm className='pro'>
                    <Card className='project-card'>
                            <div className='image-container'>
                                <Card.Img src={movie} alt='Project' className='project-image' />
                                <div className='overlay'></div>
                                <div className='button-container'>
                                    <a href="https://github.com/Samrat0709/Movie-Search" target="_blank">
                                        <Button variant='primary'>Movie Search</Button></a>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Row >
                    <Col sm className='pro'>
                        <Card className='project-card'>
                            <div className='image-container'>
                                <Card.Img src={ticTac} alt='Project' className='project-image' />
                                <div className='overlay'></div>
                                <div className='button-container'>
                                    <a href="https://samrat0709.github.io/TicTacToe/" target="_blank">
                                        <Button variant='primary'>Tic Tac Toe</Button></a>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col sm className='pro'>
                    <Card className='project-card'>
                            <div className='image-container'>
                                <Card.Img src={eCom} alt='Project' className='project-image' />
                                <div className='overlay'></div>
                                <div className='button-container'>
                                    <a href="https://github.com/Samrat0709/PRODUCT" target="_blank">
                                        <Button variant='primary'>e Commerce</Button></a>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col sm className='pro'>
                    <Card className='project-card'>
                            <div className='image-container'>
                                <Card.Img src={age} alt='Project' className='project-image' />
                                <div className='overlay'></div>
                                <div className='button-container'>
                                    <a href="https://samrat0709.github.io/AgeCalculator/" target="_blank">
                                        <Button variant='primary'>Age Calculator</Button></a>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Projects;
