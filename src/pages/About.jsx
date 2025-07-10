import React from 'react'
import '../assets/css/home.css';
import {Container,Row,Col} from 'react-bootstrap';
import aboutlogo from '../assets/images/aboutlogo.webp';
function About() {
  return (
    <>
    <Container className='aboutbanner'>
        <Row>
              <Col xs={12} md={6}>
              <img src={aboutlogo} alt="logo" width='100%' height='90%'/>
             </Col>
            <Col xs={12} md={6}>
<h2  className='pb-3 fw-semibold'>Science-Backed. Technology-Driven</h2>
<p className='paracolor' >We aren’t just bakers—we’re innovators.
Ariha Foods operates with three applied patents, including:</p>
<ul className='list-unstyled'>
<li className="mb-3">
  <div className="d-flex align-items-center mb-1">
    <span
      className="me-3 d-flex justify-content-center align-items-center"
      style={{
        width: "24px",
        height: "24px",
        borderRadius: "50%",
      backgroundColor:"#FBF503",
        color: "black",
        fontSize: "14px"
      }}
    >
      <i className="fas fa-check"></i>
    </span>
    <span className="fs-5 paracolor parafont">Freshly Baked Everyday</span>
  </div>
</li>
</ul>
            </Col>
           
        </Row>
    </Container>
    <Container className='my-5'>
        <Row>
            <Col xs={12} md={6}>
<h2 className='pb-3 fw-semibold'>Our Vision</h2>
<p>To be the leading professional hair care brand, trusted by salons and individuals worldwide 
    for premium-quality hair care solutions that promote healthy and radiant hair.</p>
            </Col>
             <Col xs={12} md={6}>
            <h2  className='pb-3 fw-semibold'>Our Mission</h2>
            <ul>
                <li className='pb-2'>To develop high-performance hair care products tailored to different hair types and concerns.</li>
                <li className='pb-2'>To ensure our products are free from harsh chemicals such as parabens, sulfates, and phthalates, prioritizing hair health and sustainability.</li>
                <li className='pb-2'>To provide salons and professionals with reliable, results-driven formulas that enhance their services.</li>
                <li className='pb-2'>To continuously innovate and improve our formulas to meet evolving hair care needs.</li>

            </ul>
             </Col>
        </Row>
           <Row className='mt-5'>
            <Col xs={12} md={12}>
             <h2  className='pb-3 fw-semibold'>Our Aim</h2>
             <p>Our goal is to empower individuals with healthier, more beautiful hair by providing professional-grade solutions that restore, nourish, and enhance hair health. We believe in creating products that combine innovation,
                 sustainability, and efficiency, ensuring the best experience for both salons and end consumers.</p>
            </Col>
            </Row>
             <Row className='mt-5'>
            <Col xs={12} md={12}>
             <h2  className='pb-3 fw-semibold'>Our Commitment to Quality</h2>
             <p>At Hair Zeal Professional, we uphold the highest standards in product formulation, ensuring that each ingredient is carefully selected for its effectiveness and safety. Our products undergo rigorous testing to meet professional standards, delivering proven results without compromise.</p>
            </Col>
            </Row>
             <Row className='mt-5'>
            <Col xs={12} md={12}>
             <h2  className='pb-3 fw-semibold'>Join the Hair Zeal Community</h2>
             <p>Whether you're a salon professional, hairstylist, or a beauty enthusiast, Hair Zeal Professional is here to transform the way you experience hair care. Let’s redefine hair health together!</p>
            </Col>
            </Row>
            <Row className='mt-5'>
                <div className="button d-flex justify-content-center">
<button className='me-2 py-2 '>Shop</button>
<button className='ms-2 py-2'>Contact us</button>
                </div>

            </Row>
    </Container>
    </>
  )
}

export default About