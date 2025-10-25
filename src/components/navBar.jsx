import React from "react";

import {
  Container,
  Row,
  Col,
  Nav,
  Navbar,
  Form,
  InputGroup,
  Button,
} from "react-bootstrap";
import {
  FaPhoneAlt,
  FaShoppingCart,
  FaUser,
  FaHeart,
  FaExchangeAlt,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

const NavBar = () => {
  return (
    <>
      {/* Top Bar */}
      <div
        className="border-bottom py-2 small text-muted gap-4 px-5"
        style={{ backgroundColor: "#f3f3f3" }}
      >
        <Container
          fluid
          className="d-flex justify-content-between align-items-center "
        >
          <div className="px-5">
            <span className="ms-3 hover-link fw-bold">About Us</span>
            <span className="ms-3 hover-link fw-bold">Shop</span>
            <span className="ms-3 hover-link fw-bold">Contact</span>
            <span className="ms-3 hover-link fw-bold">FAQ</span>
          </div>

          <div className="d-flex align-items-center px-5 gap-4">
            <a
              href="tel:+94765427956"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black me-3"
              style={{ textDecoration: "none" }}
            >
              <FaPhoneAlt size={18} className="me-3" />
              <span className="fw-bold">(+94) 76 542 7956</span>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black "
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black "
            >
              <FaFacebook size={18} />
            </a>
            <a
              href="mailto:liyanagetechengineering@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black"
            >
              <FaEnvelope size={18} />
            </a>
            <a
              href="https://wa.me/94765427956"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black"
            >
              <FaWhatsapp size={18} />
            </a>
          </div>
        </Container>
      </div>

      {/* Main Header */}
      <Navbar expand="lg" className="custom-navbar shadow-sm py-0 px-4">
        <Container fluid className="px-5">
          {/* Logo */}
          <Navbar.Brand href="#" className="fw-bold fs-4 px-5 ">
            <img src="src/assets/logo.png" alt="" />
          </Navbar.Brand>

          {/* Search Bar */}
          <Form className="mx-auto flex-grow-1" style={{ maxWidth: "600px" }}>
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Search for Product"
                aria-label="Search"
                className="rounded-pill ps-3"
                
              />
              
            </InputGroup>
          </Form>

          {/* Icons */}
          <div className="d-flex align-items-center gap-4">
            <Button className="btn-custom rounded-pill px-3 py-3">
              <FaUser title="Login" className="fs-5 me-2" /> Sign Up / Sign
              In
            </Button>
            <Button className="sub-btn-custom rounded-pill px-3 py-3">
              <FaShoppingCart title="Shopping Cart" className="fs-5 me-2" />Rs. 0.00
            </Button>
          </div>
        </Container>
      </Navbar>

      {/* Category Bar */}
      <div className="bg-light py-2 border-top border-bottom small">
        <Container className="d-flex gap-4 flex-wrap ">
          <span>🪑 Wood mizer Machine</span>          
          <span>🪑 Cinnoman Cutting Machine</span>
          <span>🪑 Cinnoman Powder Machine</span>
          <span>🪑 Bandsaw Machine</span>
          <span>🪑 Accessories</span>

        </Container>
      </div>
    </>
  );
};

export default NavBar;
