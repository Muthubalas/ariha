


import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import * as emailjs from '@emailjs/browser'; 
import image from '../assets/images/photo.webp';
import { LuPhone } from "react-icons/lu";
import { BsGeoAltFill, BsEnvelopeFill, BsTelephoneFill } from 'react-icons/bs';
emailjs.init('JGE8YzhrZvPoiqxKt');

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [validated, setValidated] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
useEffect(() => {
  emailjs.init('JGE8YzhrZvPoiqxKt');
}, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    setValidated(true);
    setSending(true);

    emailjs
      .send(
        'service_ogarmcr',
        'template_9dw56kg',
        formData,
        'JGE8YzhrZvPoiqxKt'
      )
      .then(() => {
        setSent(true);
        setSending(false);
        alert('Message sent successfully!');
        setFormData({ name: '', phone: '', email: '', message: '' });
        setValidated(false);
        console.log('Sending data:', formData);
      })
      .catch((error) => {
        setSending(false);
        alert('Failed to send. Please try again.');
        console.error(error);
      });
  };

  return (
    <Container className="text-center my-5">
      <h1>Contact us</h1>
      <div className="form my-5">
       
         <Row className="my-5 align-items-stretch">
  {/* Left Side - Contact Info */}
   <Col md={4} xs={12} className="mb-4 ">
    <div className="p-4 bg-white rounded shadow text-start h-100 d-flex flex-column justify-content-center">
      {/* Location */}
      <div className="mb-4 text-center">
         <BsGeoAltFill className="text-success fs-2 mb-2" />
        <p className="mb-1 fw-semibold">MIG 156B, 6th Main Rd, West,</p>
        <p className="mb-1 fw-semibold">Nolambur, Mogappair, Chennai,</p>
        <p className="mb-0 fw-semibold">Tamil Nadu, 600037</p>
      </div>

      <hr />

      {/* Email */}
      <div className="mb-4 text-center">
           <BsEnvelopeFill className="text-success fs-2 mb-2" />
        <p className="mb-0 fw-semibold">wecare@arihafoods.com</p>
      </div>

      <hr />

      {/* Phone */}
      <div className="text-center">
            <BsTelephoneFill className="text-success fs-2 mb-2" />
        <p className="mb-0 fw-semibold">+91 9884455605</p>
      </div>
    </div>
  </Col>

  {/* Right Side - Your Existing Form */}
  <Col md={8} xs={12}>
    <div className="form shadow p-4">
      <h2>Just Say Hello!</h2>
      <p className='py-3'>Do you fancy saying hi to me or you want to get started with your project and you need my help? Feel free to contact me.</p>
      <Form noValidate validated={validated} onSubmit={handleSubmit} className="text-start">
        <Row>
          <Col md={6} xs={12}>
            <Form.Group className="mb-3">
              <Form.Label className="pb-3">Full Name*</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </Form.Group>
          </Col>
          <Col md={6} xs={12}>
            <Form.Group className="mb-3">
              <Form.Label className="pb-3">Email*</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12} xs={12}>
            <Form.Group className="mb-3">
              <Form.Label className="pb-3">Phone number*</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone no"
                required
              />
            </Form.Group>
          </Col>
        
        </Row>
        <Row>
          <Col md={12} xs={12}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={4} xs={12}>
            <button className="send px-5 py-3" disabled={sending}>
              {sending ? 'Sending...' : 'Send Message'}
            </button>
          </Col>
        </Row>
      </Form>
    </div>
  </Col>
</Row>

     </div>
    </Container>
  );
}
export default Contact;
