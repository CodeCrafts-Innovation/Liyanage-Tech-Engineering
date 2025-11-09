import React from "react";
import {
  FaMobileAlt,
  FaEnvelope,
  FaCommentDots,
  FaShippingFast,
  FaMapMarkerAlt,
} from "react-icons/fa";

const ContactUs = () => {
  const ContactItem = ({ icon: Icon, title, content }) => (
    <div className="col-6 mb-4">
      <div className="d-flex flex-column align-items-center align-items-lg-start text-center text-lg-start">
        <div className="mb-2 icon-custom">
          <Icon size={25} />
        </div>
        {/* Content */}
        {title && <p className="mb-0 fw-bold">{title}</p>}
        {content.map((line, index) => (
          <p key={index} className="mb-0 text-secondary detail-text">
            {line}
          </p>
        ))}
      </div>
    </div>
  );

  return (
    <div className="py-4 bg-white">
      <div className="container py-5">
        <div className="row">
          {/* ========================================= */}
          {/* LEFT COLUMN: CONTACT FORM */}
          {/* ========================================= */}
          <div className="col-12 col-lg-6 pe-lg-5 mb-5 mb-lg-0">
            <h2
              className="text-uppercase fw-bold mb-4 main-title"
            >
              Send us an email
            </h2>

            <form>
              {/* Name and Email Row */}
              <div className="row mb-3">
                {/* Name */}
                <div className="col-12 col-md-6 mb-3 mb-md-0">
                  <label
                    htmlFor="yourName"
                    className="form-label text-secondary detail-text"
                  >
                    Your Name
                  </label>
                  <input type="text" className="form-control" id="yourName" />
                </div>
                {/* Email */}
                <div className="col-12 col-md-6">
                  <label
                    htmlFor="yourEmail"
                    className="form-label text-secondary detail-text"
                  >
                    Your Email
                  </label>
                  <input type="email" className="form-control" id="yourEmail" />
                </div>
              </div>

              {/* Phone Number and Company Row */}
              <div className="row mb-3">
                {/* Phone */}
                <div className="col-12 col-md-6 mb-3 mb-md-0">
                  <label
                    htmlFor="phoneNumber"
                    className="form-label text-secondary detail-text"
                  >
                    Phone Number
                  </label>
                  <input type="tel" className="form-control" id="phoneNumber" />
                </div>
                {/* Company */}
                <div className="col-12 col-md-6">
                  <label
                    htmlFor="company"
                    className="form-label text-secondary detail-text"
                  >
                    Company
                  </label>
                  <input type="text" className="form-control" id="company" />
                </div>
              </div>

              {/* Message Area */}
              <div className="mb-4">
                <label
                  htmlFor="yourMessage"
                  className="form-label text-secondary detail-text"
                >
                  Your Message
                </label>
                <textarea
                  className="form-control"
                  id="yourMessage"
                  rows="9"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn text-white px-5 py-2 fw-bold btn-custom"
              >
                ASK A QUESTION
              </button>
            </form>
          </div>

          {/* ========================================= */}
          {/* RIGHT COLUMN: FAQ AND CONTACT INFO */}
          {/* ========================================= */}
          <div className="col-12 col-lg-6 ps-lg-5">
            <h2 className="text-uppercase fw-bold mb-4 main-title">
              Frequently asked questions
            </h2>

            {/* FAQ Paragraphs */}
            <p className="text-secondary mb-4 contact-content">
              Massa inceptos porta a pretium a consectetur phasellus suspendisse
              ridiculus ipsum senectus lobortis euismod ut blandit sodales justo{" "}
              <span className="fw-bold text-dark">ligula ullamcorper</span>{" "}
              egestas nulla. Fames parturient vulputate ullamcorper faucibus
              urna at nunc ridiculus quis.
            </p>
            <p className="text-secondary mb-5 contact-content">
              Sagittis posuere id nam quis{" "}
              <span className="fw-bold text-dark">ullamcorper vestibulum</span>{" "}
              a facilisi at elit hendrerit scelerisque sodales nam dis orci non
              aliquet justo ligula ullamcorper egestas nulla enim.
            </p>

            <hr />

            {/* CONTACT US SECTION */}
            <h3
              className="text-uppercase fw-bold mt-4 mb-4 main-title"
            >
              Contact us
            </h3>

            <div className="row g-4">
              {/* Phone & Email */}
              <ContactItem
                icon={FaMobileAlt}
                content={["Hotline: 076 54 27 956", "Tel: 033 433 433 8","Email: liyanagetengineering@gmail.com"]}
              />

              {/* Support Forum */}
              <ContactItem
                icon={FaCommentDots}
                title="Support forum"
                content={["for over 24h"]}
              />

              {/* Shipping */}
              <ContactItem
                icon={FaShippingFast}
                content={["Transportation Service", "for all orders."]}
              />

              {/* Address */}
              <ContactItem
                icon={FaMapMarkerAlt}
                content={["Address: No 191/D, Wathumulla", "Udugampala, Gampaha"]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
