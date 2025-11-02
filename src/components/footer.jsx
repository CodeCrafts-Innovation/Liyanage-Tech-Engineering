import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import {
  FaFacebook,
  FaFax,
  FaInstagram,
  FaLocationArrow,
  FaPhone,
  FaTelegram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import {
  FaCableCar,
  FaLandMineOn,
  FaLocationDot,
  FaPhoneFlip,
  FaXTwitter,
} from "react-icons/fa6";
import googlePlayBadge from "../assets/playstore.png";
import appStoreBadge from "../assets/app_store.png";
import {
  FaCcVisa,
  FaCcMastercard,
  FaPaypal,
  FaCcAmex,
  FaCcDiscover,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-colors text-white py-5">
      <Container>
        <Row>
          <img src="src/assets/logo.png" alt="" className="footer-logo" />
          {/* Column 1: About us & Contact Details*/}
          <Row>
            <Col md={3}>
              <h4 className="mt-4 mb-3">About Us</h4>
              <p className="footer-p">
                We Specialize in Delivering High-quality Technology and
                Engineering Solutions.
              </p>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="#"
                    className="footer-link-primary text-decoration-none"
                  >
                    <FaPhone />
                  </a>{" "}
                  076 54 27 956
                </li>
                <li>
                  <a
                    href="#"
                    className="footer-link-primary text-decoration-none"
                  >
                    <FaFax />
                  </a>{" "}
                  033 433 433 8
                </li>
                <li>
                  <a
                    href="#"
                    className="footer-link-primary text-decoration-none"
                  >
                    <FaLocationDot />
                  </a>{" "}
                  No. 191/D Wathumulla, Udugampola, Gampaha.
                </li>
              </ul>
            </Col>

            {/* Column 2: Useful Link*/}
            <Col md={3}>
              <h4 className="mt-4 mb-3">Useful Links</h4>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="#"
                    className="footer-link-primary text-decoration-none"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="footer-link-primary text-decoration-none"
                  >
                    Showrooms
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="footer-link-primary text-decoration-none"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="footer-link-primary text-decoration-none"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </Col>

            {/* Column 3: Categories (Part 2) */}
            <Col md={3}>
              <h4 className="mt-4">Categories</h4>
              <ul className="list-unstyled ">
                <li>
                  <a
                    href="#"
                    className="footer-link-primary text-decoration-none li-text"
                  >
                    Bandsaw
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="footer-link-primary text-decoration-none"
                  >
                    Wood-Mizer Machine
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="footer-link-primary text-decoration-none"
                  >
                    Cinnoman Machine
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="footer-link-primary text-decoration-none"
                  >
                    Blade Sharpping Machine
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="footer-link-primary text-decoration-none"
                  >
                    Wood Lathe Machine
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="footer-link-primary text-decoration-none"
                  >
                    Accessories
                  </a>
                </li>
              </ul>
            </Col>

            {/* Column 4: Subscribe & Download App */}
            <Col md={3}>
              <h4 className="mt-4">Subscribe Us</h4>
              <div className="social-icons mb-4">
                <a href="#" className="social-icon facebook">
                  <FaFacebook />
                </a>
                <a href="#" className="social-icon twitter">
                  <FaXTwitter />
                </a>

                <a href="#" className="social-icon instagram">
                  <FaInstagram />
                </a>
                <a href="#" className="social-icon youtube">
                  <FaYoutube />
                </a>
                <a href="#" className="social-icon whatsapp">
                  <FaWhatsapp />
                </a>
              </div>

              <h5 className="mt-5">Download App on Mobile</h5>
              <div>
                <a href="" className="me-2">
                  <img
                    src={googlePlayBadge}
                    alt="Get it on Google Play"
                    height={40}
                  />
                </a>
                <a href="#">
                  <Image
                    src={appStoreBadge}
                    alt="Download on the App Store"
                    height={40}
                  />
                </a>
              </div>
            </Col>
          </Row>

          <hr className="my-4" />

          {/* Sub-footer: Copyright & Payment */}
          <Row className="align-items-center">
            <Col>
              <p className="mb-md-0 footer-p">
                <small>
                  LIYANAGE TECH ENGINEERING © 2025 CREATED BY CODECRAFTS
                  INNOVATIONS.
                </small>
              </p>
            </Col>
            <Col md={6} className="text-md-end payment-icons">
              <img src="src/assets/payments.png" alt="" />
            </Col>
          </Row>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
