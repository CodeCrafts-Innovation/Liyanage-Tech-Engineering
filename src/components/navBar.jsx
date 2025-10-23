import React from "react";
import { Container, Row, Col, Nav, Navbar, Form, InputGroup, Button } from "react-bootstrap";
import { FaPhoneAlt, FaShoppingCart, FaUser, FaHeart, FaExchangeAlt, FaFacebook, FaInstagram, FaWhatsapp, FaVoicemail, FaMailBulk, FaMailchimp, FaAmilia } from "react-icons/fa";

const NavBar = () => {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-dark border-bottom py-2 small text-muted">
        <Container fluid className="d-flex justify-content-between align-items-center">
          <div className="text-white">
            <span className="ms-3">About Us</span> |{" "}
            <span className="ms-3">Shop</span> |{" "}
            <span className="ms-3">Contact</span> |{" "}
            <span className="ms-3">FAQ</span>
          </div>

          <div className="d-flex align-items-center">
            <a href="tel:+94765427956" target="_blank" rel="noopener noreferrer" className="text-white me-3"> <FaPhoneAlt size={20} /></a>
            <a href="tel:+94765427956" target="_blank" rel="noopener noreferrer" className="text-white me-3"> <FaInstagram size={20} /></a>
            <a href="tel:+94765427956" target="_blank" rel="noopener noreferrer" className="text-white me-3"> <FaFacebook size={20} /></a>
            <a href="tel:+94765427956" target="_blank" rel="noopener noreferrer" className="text-white me-3"> <FaHeart size={20} /></a>
            <a href="tel:+94765427956" target="_blank" rel="noopener noreferrer" className="text-white me-3"> <FaWhatsapp size={20} /></a>
          </div>
        </Container>
      </div>

      {/* Main Header
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-5">
        <a class="navbar-brand" href="#">
          Liyanage Tech Engineering
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li className="nav-item active">
              <a className="nav-link" href="">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                Shop
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav> */}
    </>
  );
};

export default NavBar;
