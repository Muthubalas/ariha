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
import { BsTelephone } from "react-icons/bs";

function Header() {
  const { cartItems, getTotalItems, updateCartItem } = useCart();
  const [showCart, setShowCart] = useState(false);

  const handleClose = () => setShowCart(false);
  const handleShow = () => setShowCart(true);

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
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Product</th>
                  <th>Qty</th>
                  <th>Cost (₹)</th>
                  <th>Total (₹)</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>
                      <input
                        type="number"
                        value={item.quantity}
                        min="1"
                        style={{ width: "60px" }}
                        onChange={(e) =>
                          updateCartItem(item._id, "quantity", parseInt(e.target.value) || 1)
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={item.price}
                        min="0"
                        style={{ width: "80px" }}
                        onChange={(e) =>
                          updateCartItem(item._id, "price", parseFloat(e.target.value) || 0)
                        }
                      />
                    </td>
                    <td>{item.quantity * item.price}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
          {cartItems.length > 0 && (
            <h5 className="text-end">
              Grand Total: ₹{cartItems.reduce((total, item) => total + item.quantity * item.price, 0)}
            </h5>
          )}
        </Modal.Body>
        <Modal.Footer>
          {cartItems.length > 0 && (
            <Button
              variant="success"
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
                  `Welcome to HairZeal\n\nOrder Details:\n\n${messageLines.join("\n")}\n\nGrand Total: ₹${grandTotal}`;
                const whatsappURL = `https://wa.me/919047373960?text=${encodeURIComponent(finalMessage)}`;
                window.open(whatsappURL, '_blank');
              }}
            >
              Checkout on WhatsApp
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Header;
