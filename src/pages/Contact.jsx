// import React, { useState } from 'react';
// import { Col, Container, Form, Row } from 'react-bootstrap';
// import * as emailjs from '@emailjs/browser'; 
// import image from '../assets/images/photo.webp';
// import { LuPhone } from "react-icons/lu";

// function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     email: '',
//     service: '',
//     message: '',
//   });

//   const [validated, setValidated] = useState(false);
//   const [sending, setSending] = useState(false);
//   const [sent, setSent] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const form = e.currentTarget;

//     if (form.checkValidity() === false) {
//       e.stopPropagation();
//       setValidated(true);
//       return;
//     }

//     setValidated(true);
//     setSending(true);

//     emailjs
//       .send(
//         'service_r2h273n',
//         'template_nhoy05f',
//         formData,
//         'cTHXHzBfD_w8wvixJ'
//       )
//       .then(() => {
//         setSent(true);
//         setSending(false);
//         alert('Message sent successfully!');
//         setFormData({ name: '', phone: '', email: '', service: '', message: '' });
//         setValidated(false);
//         console.log('Sending data:', formData);
//       })
//       .catch((error) => {
//         setSending(false);
//         alert('Failed to send. Please try again.');
//         console.error(error);
//       });
//   };

//   return (
//     <Container className="text-center my-5">
//       <h1>Contact us</h1>
//       <div className="form my-5">
//         <Form noValidate validated={validated} onSubmit={handleSubmit} className="text-start">
//           <Row>
//             <Col md={6} xs={12}>
//               <Form.Group className="mb-3">
//                 <Form.Label className="pb-3">Full Name*</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Your Name"
//                   required
//                 />
//               </Form.Group>
//             </Col>
//             <Col md={6} xs={12}>
//               <Form.Group className="mb-3">
//                 <Form.Label className="pb-3">Email*</Form.Label>
//                 <Form.Control
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="name@example.com"
//                   required
//                 />
//               </Form.Group>
//             </Col>
//           </Row>
//           <Row>
//             <Col md={6} xs={12}>
//               <Form.Group className="mb-3">
//                 <Form.Label className="pb-3">Phone number*</Form.Label>
//                 <Form.Control
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="Your Phone no"
//                   required
//                 />
//               </Form.Group>
//             </Col>
//             <Col md={6} xs={12}>
//               <Form.Group className="mb-3">
//                 <Form.Label className="pb-3">Product name</Form.Label>
//                 <Form.Select
//                   name="service"
//                   value={formData.service}
//                   onChange={handleChange}
//                   required
//                 >
//                   <option value="">Open this select menu</option>
//                   <option value="1">One</option>
//                   <option value="2">Two</option>
//                   <option value="3">Three</option>
//                 </Form.Select>
//               </Form.Group>
//             </Col>
//           </Row>
//           <Row>
//             <Col md={12} xs={12}>
//               <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//                 <Form.Label>Example textarea</Form.Label>
//                 <Form.Control
//                   as="textarea"
//                   rows={5}
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                 />
//               </Form.Group>
//             </Col>
//           </Row>
//           <Row>
//             <Col md={4} xs={12}>
//               <button className="send px-4 py-3" disabled={sending}>
//                 {sending ? 'Sending...' : 'Send Message'}
//               </button>
//             </Col>
//           </Row>
//         </Form>
//       </div>
//       <Row>
//         <Col md={4} xs={12}>
//         <img src={image} alt="image"  width="100%"
//         height="100%"/>
//         </Col>
//            <Col md={1} xs={12}>
//         </Col>
//          <Col md={7} xs={12} className='text-start'>
//          <h1 className='fw-semibold'>We'd love to talk about how we can work together.</h1>
//          <p className='py-3'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to 
// been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
// import { LuPhone } from 'react-icons/lu';

// <div className="col-6 col-md-6 p-3 my-3 shadow-sm rounded d-flex align-items-center" style={{ backgroundColor: '#fff' }}>
//   <span style={{ backgroundColor: '#F4F4F4', padding: '8px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//     <LuPhone size={24} color="black" />
//   </span>
//   <span className="ms-3 fw-bold">+91 7305821333</span>
// </div>
// <div className="gmap">
 
//    <iframe
//         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3844001187704!2d80.21240307454717!3d13.011175614010478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267245a3ed16f%3A0xe21d6ed23645a3c1!2sRainbow%20Media!5e0!3m2!1sen!2sin!4v1749536959456!5m2!1sen!2sin"
//         width="100%"
//         height="100%"
//         style={{ border: 0}}
//         allowFullScreen=""
//         loading="lazy"
//         referrerPolicy="no-referrer-when-downgrade"
//         title="Google Map"
//       />
// </div>


//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Contact;


import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import * as emailjs from '@emailjs/browser'; 
import image from '../assets/images/photo.webp';
import { LuPhone } from "react-icons/lu";
import { BsGeoAltFill, BsEnvelopeFill, BsTelephoneFill } from 'react-icons/bs';
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
        'template_nhoy05f',
        formData,
        'cTHXHzBfD_w8wvixJ'
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
        <Form noValidate validated={validated} onSubmit={handleSubmit} className="text-start">
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
        <p className="mb-0 fw-semibold">arihainfoods@gmail.com</p>
      </div>

      <hr />

      {/* Phone */}
      <div className="text-center">
            <BsTelephoneFill className="text-success fs-2 mb-2" />
        <p className="mb-0 fw-semibold">+91 98844 55605</p>
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
</Form>
     </div>
    </Container>
  );
}
export default Contact;
