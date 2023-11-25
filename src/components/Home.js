
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import myImage from '../images/my-image.jpg';
import Image from 'react-bootstrap/Image';
import React from 'react';
const Home = () => {
  return (
    <section className='home' id='home'>
      <Container>
        <Row>
          <Col sm={7}>
            <Row className="details">
              <div>
                <h2>Hello, it's Me</h2>
                <h1>Samrat Mondal</h1>
                <h2>And I'm a <span>Frontend developer</span></h2>
                <p>I'm an Mechanical Engineering student with an immense interest in coding and Development.</p>
              </div>
            </Row>
            <Row className="social">
              <div>
                <div className="social-icons">
                  <div className="items">
                    <a href="https://www.facebook.com/profile.php?id=100072260381918" target="_blank" rel="noopener noreferrer">
                      <FaFacebook className="icon facebook" />
                    </a>
                  </div>
                  <div className="items">
                    <a href="https://twitter.com/Samratmondal070" target="_blank" rel="noopener noreferrer">
                      <FaTwitter className="icon twitter" />
                    </a>
                  </div>
                  <div className="items">
                    <a href="https://www.instagram.com/samrat_07.exe/" target="_blank" rel="noopener noreferrer">
                      <FaInstagram className="icon instagram" />
                    </a>
                  </div>
                  <div className="items">
                    <a href="https://www.linkedin.com/in/samrat-mondal-a677321ba/" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="icon linkedin" />
                    </a>
                  </div>
                  <div className="items">
                    <a href="https://github.com/Samrat0709" target="_blank" rel="noopener noreferrer">
                      <FaGithub className="icon GitHub" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="cv">
                <Button variant="outline-info" onClick={() => window.open("https://drive.google.com/file/d/10gr4uL70cmvmzg3mQTF7PCTe9In6Vvgw/view?usp=sharing", "_blank")}>
                  DOWNLOAD CV
                </Button>
              </div>
            </Row>
          </Col>
          <Col sm={5} className='img-container'>
            <Image src={myImage} fluid className='dp' />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Home
