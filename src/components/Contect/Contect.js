import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './contect.css';
import Social from './Social';

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const [notDone, setNotDone] = useState(false);
  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setDone(false);
    setNotDone(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Validate form
    if (!formData.from_name || !formData.reply_to || !formData.message) {
      setNotDone(true);
      return;
    }

    // Send email via EmailJS
    emailjs
      .sendForm(
        'service_niilndo', // Replace with your own service ID
        'template_6z5idye', // Replace with your template ID
        form.current,
        'VOBt6Akm1LhI5CZG-' // Replace with your public key
      )
      .then(
        (result) => {
          console.log('Email sent:', result.text);
          setDone(true);
          setFormData({ from_name: '', reply_to: '', message: '' }); // Clear form
        },
        (error) => {
          console.error('Email error:', error.text);
          setNotDone(true);
        }
      );
  };

  return (
    <Container style={{ paddingTop: '100px' }}>
      <Row>
        <Col className="c-left">
          <h1>Get in Touch</h1>
          <h1 className="yellow">Contact me</h1>
        </Col>
        <Col className="c-right">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="from_name"
              className="user"
              placeholder="Name"
              onChange={handleChange}
              value={formData.from_name}
            />
            <input
              type="email"
              name="reply_to"
              className="user"
              placeholder="Email"
              onChange={handleChange}
              value={formData.reply_to}
            />
            <textarea
              name="message"
              className="user"
              placeholder="Message"
              onChange={handleChange}
              value={formData.message}
            />
            {notDone && (
              <span className="not-done">
                Please fill all the input fields correctly.
              </span>
            )}
            <Button type="submit" className="button" disabled={done}>
              {done ? 'Sent' : 'Send'}
            </Button>
            {done && (
              <span className="done">
                Thanks for contacting me! If this was a test, the form works
                perfectly. For serious queries, I’ll respond soon. You can also
                reach me on LinkedIn.
              </span>
            )}
          </form>
        </Col>
      </Row>
      <Social />
    </Container>
  );
};

export default Contact;
