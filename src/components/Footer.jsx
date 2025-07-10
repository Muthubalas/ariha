import React from 'react'
import '../assets/css/home.css';
import logo from '../assets/images/logo.png';
import{Row,Col,Container,Button}  from 'react-bootstrap';
import fb from '../assets/images/logos_facebook.png';
import insta from '../assets/images/skill-icons_instagram.png';
import twit from '../assets/images/prime_twitter.png';
import { Link } from 'react-router-dom';
import { CiMail } from "react-icons/ci";
import { LuPhone,LuMapPinCheckInside } from "react-icons/lu";
import { MdOutlineFileDownload } from "react-icons/md";
function Footer() {
  return (
    <>
    <div className="footer py-5">
        <Container>
            <Row className='d-flex'>
                  <Col xs={12} md={4} >
                    
                       <img src={logo} className='pb-3' alt="logo" width="100px" />
                       <p>Ariha Foods delivers honest, wholesome bakery products crafted with care—offering 
                        everything from fluffy buns to decadent brownies, all made fresh with vegetarian ingredients and zero compromises.</p>
              <div className="d-flex gap-3">
      <Button className='yellowbutton'>
        <MdOutlineFileDownload className="me-2" />
        Be Our Franchisee
      </Button>
      <Button className='yellowbutton'>
        <MdOutlineFileDownload  className="me-2" />
       Download Brochure
      </Button>
    </div>
                 </Col>
             
                 <Col xs={12} md={2} >
                 <h5 className='fw-semibold pb-2 text-uppercase'> QUICK LINK</h5>
                 <p><Link to="/">Home</Link></p>
                          <p><Link to="/service">Shop</Link></p>
                           <p><Link to="/contact">About Us</Link></p>
                           <p><Link to="/contact">Contact</Link></p>
                 </Col>
                       <Col xs={12} md={2} >
                         <h5 className='fw-semibold pb-2 text-uppercase'> PRODUCTS</h5>
               <p><Link to="/">Home</Link></p>
                          <p><Link to="/service">Shop</Link></p>
                           <p><Link to="/contact">About Us</Link></p>
                           <p><Link to="/contact">Contact</Link></p>
                 </Col>
                     <Col xs={12} md={4}>
                <h5 className='fw-semibold pb-2 text-uppercase'> Reach us</h5>
                <div className='d-flex justify-content-start pb-2'>
<CiMail size={24} className=' me-2 '/>rainbowmedia1123@gmail.com
                </div>
                 <div className='d-flex justify-content-start pb-2'>
<LuPhone size={24} className=' me-2 '/>+91 73058 21333
                </div>
                 <div className='d-flex justify-content-start pb-2'>
<LuMapPinCheckInside size={24} className=' me-2 '/>Old.No. 83, New no.112, <br></br>2nd floor, Anna salai,<br></br> Guindy, Chennai-600032<br></br>
Landmark: Before street of Klase hotel
                </div>
                   </Col> 
            </Row>
        </Container>
    </div>
    <div className="footer_bootom text-center py-3">
<span>© Copyright 2025 The Rainbow media. All rights reserved</span>
    </div>
    </>
  )
}

export default Footer