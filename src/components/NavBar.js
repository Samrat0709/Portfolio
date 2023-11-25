import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {



    return (
        <div>
            <Navbar expand="lg" className="navbar fixed-top navbar-custom" >
                <Container>
                    <Navbar.Brand href="#home" id='brand'>Port<span>folio</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" id='toggle'/>
                    <Navbar.Collapse  id="basic-navbar-nav">
                        <Nav className="me-auto nav-items" >
                            <Nav.Link id='nav-links' href="#home">HOME</Nav.Link>
                            <Nav.Link id='nav-links' href="#about">ABOUT</Nav.Link>
                            <Nav.Link id='nav-links' href="#skills">SKILLS</Nav.Link>
                            <Nav.Link id='nav-links' href="#projects">PROJECTS</Nav.Link>
                            <Nav.Link id='nav-links' href="#contact">CONTACT</Nav.Link>
                            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    )
}

export default NavBar
