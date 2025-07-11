import React from 'react';
import '../assets/css/home.css';
import logo from '../assets/images/logo.png';
import { Row, Col, Container, Button } from 'react-bootstrap';
import fb from '../assets/images/logos_facebook.png';
import insta from '../assets/images/skill-icons_instagram.png';
import twit from '../assets/images/prime_twitter.png';
import { Link } from 'react-router-dom';
import { CiMail } from "react-icons/ci";
import { LuPhone, LuMapPinCheckInside } from "react-icons/lu";
import { MdOutlineFileDownload } from "react-icons/md";

function Footer() {
  return (
    <>
      <div className="footer py-5">
        <Container>
          <Row className='d-flex'>
            {/* Logo and Description */}
            <Col xs={12} md={4} className="text-center text-md-start mb-4 mb-md-0">
              <img src={logo} className='pb-3' alt="logo" width="100px" />
              <p>
                Ariha Foods delivers honest, wholesome bakery products crafted with care—offering 
                everything from fluffy buns to decadent brownies, all made fresh with vegetarian ingredients and zero compromises.
              </p>
              <div className="d-flex flex-column flex-md-row gap-2 justify-content-center justify-content-md-start">
                <Button className='yellowbutton'>
                  <MdOutlineFileDownload className="me-2" />
                  Be Our Franchisee
                </Button>
                <Button className='yellowbutton'>
                  <MdOutlineFileDownload className="me-2" />
                  Download Brochure
                </Button>
              </div>
            </Col>

            {/* Quick Links */}
            <Col xs={12} md={2} className="text-center text-md-start mb-4 mb-md-0">
              <h5 className='fw-semibold pb-2 text-uppercase'>Quick Links</h5>
              <p><Link to="/">Home</Link></p>
              <p><Link to="/shop">Shop</Link></p>
              <p><Link to="/about">About Us</Link></p>
              <p><Link to="/contact">Contact Us</Link></p>
            </Col>

            {/* Categories */}
            <Col xs={12} md={2} className="text-center text-md-start mb-4 mb-md-0">
              <h5 className='fw-semibold pb-2 text-uppercase'>Categories</h5>
              <p><Link to="/">Brownies</Link></p>
              <p><Link to="/service">Buns & Loaves</Link></p>
              <p><Link to="/contact">Muffins</Link></p>
              <p><Link to="/contact">Pizza Bases</Link></p>
            </Col>

            {/* Get in Touch */}
            <Col xs={12} md={4} className="text-center text-md-start">
              <h5 className='fw-semibold pb-2 text-uppercase'>Get in Touch</h5>
              <div className='d-flex justify-content-center justify-content-md-start pb-2'>
                <LuPhone size={24} className='me-2' /> +91 98844 55605
              </div>
              <div className='d-flex justify-content-center justify-content-md-start pb-2'>
                <CiMail size={24} className='me-2' /> arihafoods@gmail.com
              </div>
              <div className='d-flex justify-content-center justify-content-md-start pb-2 text-center text-md-start'>
                <LuMapPinCheckInside size={24} className='me-2' /> MIG 156B, 6th Main Rd,<br />
                West, Nolambur, Mogappair, <br />
                Chennai, Tamil Nadu, 600037
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="footer_bootom text-center py-3">
        <span>© Copyright 2025 The Rainbow media. All rights reserved</span>
      </div>
    </>
  );
}

export default Footer;
