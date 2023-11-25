import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';


const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Here, you would need to implement your email sending logic
        // using a server-side script or service
        console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

        // Clear input fields after submission
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <section className='contact' id='contact'>
            <h1>Contact <span>Me!</span></h1>
            <Container>
                <Form method='post' onSubmit={handleSubmit}>
                    <Row>
                        <Col sm className='con'>
                            <Form.Group>
                                <Form.Label> <h3>Name</h3> </Form.Label>
                                <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
                            </Form.Group>
                        </Col>
                        <Col sm className='con'>
                            <Form.Group>
                                <Form.Label><h3>Email</h3></Form.Label>
                                <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Form.Group>
                            <Form.Label><h3>Message</h3></Form.Label>
                            <Form.Control as="textarea" rows={4} value={message} onChange={(e) => setMessage(e.target.value)} />
                        </Form.Group>
                    </Row>
                    <div className="btn-container">
                        <Button variant="outline-info">SUBMIT</Button>
                    </div>

                </Form>
            </Container>
        </section>
    );
}

export default Contact;
