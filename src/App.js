import React from 'react';
import './App.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  const [msg, setMsg] = useState([]);
  const [createForm, setCreateForm] = useState({
    person: '',
    email: '',
    text: '',
  });

  const updateCreateFormField = (e) => {
    const { name, value } = e.target;

    setCreateForm({
      ...createForm,
      [name]: value,
    });
  };

  const createMsg = async (e) => {
    e.preventDefault();

    try {
      // Create the note
      const res = await axios.post('http://localhost:8000/msg', createForm);

      if (Array.isArray(res.data.msg)) {
        // Assuming res.data.msg is an array, append it to the msg state
        setMsg([...msg, ...res.data.msg]);
      }

      // Clear form state
      setCreateForm({ person: '', email: '', text: '' });
    } catch (error) {
      console.error('Error creating note:', error);
    }
  };

  return (
    <div className="page">
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <div>
        <section className="contact" id="contact">
          <h1>Contact <span>Me!</span></h1>
          <Container>
            <Form method="post" onSubmit={createMsg}>
              <Row>
                <Col sm className="con">
                  <Form.Group>
                    <Form.Label> <h3>Name</h3> </Form.Label>
                    <Form.Control
                      type="text"
                      name="person"
                      value={createForm.person}
                      onChange={updateCreateFormField}
                    />
                  </Form.Group>
                </Col>
                <Col sm className="con">
                  <Form.Group>
                    <Form.Label><h3>Email</h3></Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={createForm.email}
                      onChange={updateCreateFormField}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Form.Group>
                  <Form.Label><h3>Message</h3></Form.Label>
                  <Form.Control
                    as="textarea"
                    name="text"
                    rows={4}
                    value={createForm.text}
                    onChange={updateCreateFormField}
                  />
                </Form.Group>
              </Row>
              <div className="submit btn-container">
                <Button type="submit" variant="outline-info">SUBMIT</Button>
              </div>
            </Form>
          </Container>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
