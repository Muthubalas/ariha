import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FiMapPin } from "react-icons/fi";
import { IoBagHandleOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import Modal from 'react-bootstrap/Modal';
import { useCart } from '../pages/context/Cart';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import logo from '../assets/images/logo.png';
import { BsTelephone,BsWhatsapp, BsPlus, BsDash } from "react-icons/bs";

function Header() {
  const { cartItems, getTotalItems, updateCartItem } = useCart();
  const [showCart, setShowCart] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const handleClose = () => setShowCart(false);
  const handleShow = () => setShowCart(true);
  const handleRazorpayPayment = () => {
    const totalAmount = cartItems.reduce(
  (total, item) => total + item.quantity * item.price,
  0
);
  const options = {
    key: "YOUR_TEST_KEY_ID", // From dashboard
   amount: totalAmount * 100, // ₹500.00 in paise
    currency: "INR",
    name: "Ariha Foods",
    description: "Order Payment",
    image: "/logo.png",
    handler: function (response) {
      alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
    },
    prefill: {
      name: customerName,
        contact: customerPhone
    },
    theme: {
      color: "#6E9556"
    }
  };

  const rzp = new window.Razorpay(options);
  rzp.open();
};

  const imgpath = "http://localhost:5000";
  return (
    <>
      {/* Fixed Header */}
      <div style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1050, backgroundColor: '#fff' }}>



       
        <div className="py-2 shadow-sm border-bottom bg-white">
  <Container>
    <Row className="align-items-center justify-content-between">
      {/* Address */}
      <Col xs={12} md="auto" className="text-center text-md-start mb-2 mb-md-0">
        <FiMapPin size={20} className="me-2" />
        MIG 156B, 6th Main Rd, West, Nolambur, Mogappair, Chennai, Tamil Nadu, 600037
      </Col>

      {/* Social Icons */}
      <Col xs={12} md="auto" className="d-flex justify-content-center justify-content-md-end">
        <div className="social d-flex">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="me-3 text-dark">
            <FaFacebookF size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="me-3 text-dark">
            <FaInstagram size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="me-3 text-dark">
            <FaLinkedinIn size={20} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-dark">
            <FaYoutube size={20} />
          </a>
        </div>
      </Col>
    </Row>
  </Container>
</div>

        {/* 🔷 Main Top Row: Logo | Search | Cart | Profile */}
        <Container className="py-2">
          <Row className="align-items-center">
            <Col xs={6} md={3} className="text-center text-md-start mb-2 mb-md-0">
              <a href="/">
                <img src={logo} alt="logo" width="100px" />
              </a>
            </Col>

            <Col xs={12} md={6} className="mb-2 mb-md-0">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search products..."
                  className="me-2"
                />
                <Button className='search'>Search</Button>
              </Form>
            </Col>

            <Col xs={6} md={3} className="text-end">
              <div onClick={handleShow} style={{ position: 'relative', display: 'inline-block', cursor: 'pointer' }}>
                <IoBagHandleOutline size={24} />
                {getTotalItems() > 0 && (
                  <span style={{
                    position: 'absolute',
                    top: '-8px',
                    right: '-10px',
                    backgroundColor: 'red',
                    color: 'white',
                    borderRadius: '50%',
                    padding: '2px 6px',
                    fontSize: '12px',
                    minWidth: '20px',
                    textAlign: 'center',
                  }}>
                    {getTotalItems()}
                  </span>
                )}
              </div>
            </Col>

        
          </Row>
        </Container>

        {/* 🔻 Navigation Menu Row: Menu Left | Phone Right */}
        <Navbar expand="lg" className="border-top border-bottom">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/" className='header'>Home</Nav.Link>
                <Nav.Link href="/shop" className='header'>Shop</Nav.Link>
                <Nav.Link href="/about" className='header'>About Us</Nav.Link>
                <Nav.Link href="/contact" className='header'>Contact Us</Nav.Link>
                <Nav.Link href="/blog" className='header'>Blog</Nav.Link>
              </Nav>
           <div className="d-none d-lg-flex align-items-center fw-bold text-nowrap text-white">
  <BsTelephone size={16} className="me-2" />
  +919884455605
</div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      {/* 🔲 Cart Modal */}

  <Modal show={showCart} onHide={handleClose} size="lg">
      
      <Modal.Body style={{ backgroundColor: '#6E9556', color: 'white',borderTopLeftRadius:'20px',borderTopRightRadius:'20px'}}>
          <Button
      variant="light"
      size="sm"
      onClick={handleClose}
      style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        borderRadius: '50%',
        width: '30px',
        height: '30px',
        padding: 0,
      }}
    >
      &times;
    </Button>
  <div className="text-center mb-3">
    <BsWhatsapp size={24} className="bg-white text-success rounded-circle p-1" />
    <h5 className="mt-2 mb-0">Shopping Cart</h5>
    <hr className="border-white opacity-100" />
  </div>

 {cartItems.map((item) => (
  <div
    key={item._id}
    className="d-flex align-items-center justify-content-between mb-3"
    style={{ gap: '10px' }}
  >
    {/* Image */}
    <img
      src={`${imgpath}${item.product_image}` || 'https://via.placeholder.com/40'}
      alt={item.name}
      className="rounded"
      style={{ width: '50px', height: '50px', objectFit: 'cover' }}
    />

    {/* Name and Quantity */}
    <div className="flex-grow-1 ms-2">
      <div style={{ fontSize: '14px', fontWeight: 500 }}>{item.name}</div>
    </div>

    {/* Quantity Controls */}
    <div className="d-flex align-items-center">
      <Button
        size="sm"
        variant="light"
        className="text-dark p-1"
        onClick={() => updateCartItem(item._id, 'quantity', Math.max(1, item.quantity - 1))}
      >
        <BsDash />
      </Button>
      <span className="mx-2">{item.quantity}</span>
      <Button
        size="sm"
        variant="light"
        className="text-dark p-1"
        onClick={() => updateCartItem(item._id, 'quantity', item.quantity + 1)}
      >
        <BsPlus />
      </Button>
    </div>
 {/* Price */}
    <div className="fw-bold text-end" style={{ minWidth: '60px' }}>
      ₹{item.price}
    </div>
 
  </div>
))}
 
        

      

  {/* Footer Branding and Total */}
  <div className="d-flex justify-content-between align-items-center mt-4">
    <img
      src={logo}
      alt="Ariha Foods"
      style={{ height: '30px' }}
    /> 
    <div className="fw-bold fs-5">Total ₹{cartItems.reduce((total, item) => total + item.quantity * item.price, 0)}</div>
  </div>
   {/* Customer Details Form */}
  <Row className='mt-2' id='formrazor'>
    <Col md={6} sm={12}>
      <Form.Group className="mb-3">
            <Form.Label style={{ color: 'white' }}>Customer Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
          </Form.Group>
    </Col>
    <Col md={6} sm={12}>
        <Form.Group className="mb-3">
            <Form.Label style={{ color: 'white' }}>Phone Number</Form.Label>
            <Form.Control type="tel" placeholder="Enter your phone number" value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)} />
          </Form.Group>
    </Col>
  </Row>

  <p className="mt-2 small"
   onClick={() => {
      const messageLines = cartItems.map(
        (item, index) =>
          `${index + 1}. ${item.name} × ${item.quantity} = ₹${item.quantity * item.price}`
      );
      const grandTotal = cartItems.reduce(
        (total, item) => total + item.quantity * item.price,
        0
      );
      const finalMessage =
        `Welcome to Ariha Foods\n\n` +
  `Customer Name: ${customerName}\n` +
  `Phone Number: ${customerPhone}\n\n` +
  `Order Details:\n${messageLines.join('\n')}\n\n` +
  `Grand Total: ₹${grandTotal}`;
      const whatsappURL = `https://wa.me/919047373960?text=${encodeURIComponent(finalMessage)}`;
      window.open(whatsappURL, '_blank');
    }}
  >
    <strong>Note:</strong> Place your orders through WhatsApp <BsWhatsapp />
  </p>
</Modal.Body>

     <Modal.Footer style={{ backgroundColor: '#6E9556', borderTop: 'none',borderBottomLeftRadius:'20px',borderBottomRightRadius:'20px'}}>
  <Button
    variant="light"
    className="w-100 fw-bold text-dark rounded-pill"
   onClick={handleRazorpayPayment}
  >
    ORDER NOW
  </Button>
</Modal.Footer>

      </Modal>

    </>
  );
}

export default Header;
