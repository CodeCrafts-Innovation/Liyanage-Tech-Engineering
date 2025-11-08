import { section } from "framer-motion/client";
import { div } from "framer-motion/m";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
const AboutUsDetails = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="row g-0">
          <div className="col-12 col-lg-6 d-flex align-items-stretch">
            <div className="w-100 h-10 overflow-hidden">
              <img
                src="src/assets/about1.jpg"
                alt=""
                className="img-fluid w-100 h-100 object-fit-cover"
                style={{ minHeight: "350px" }}
              />
            </div>
          </div>
          <div className="col-12 col-lg-6 p-5">
            <p
              className="text-uppercase fw-bold"
              style={{
                color: "#d9534f",
                letterSpacing: "2px",
                fontSize: "0.85rem",
              }}
            >
              Seemingly elegant design
            </p>
            <h1 className="display-6 fw-bold mb-4">About our online store</h1>
            <p className="text-secondary">
              Risus suspendisse a orci penatibus a felis suscipit consectetur
              vestibulum sodales dui cum ultricies lacus interdum.
            </p>
            <p className="text-secondary">
              One morning, when Gregor Samsa woke from troubled dreams, he found
              himself transformed in his bed into a horrible vermin. He lay on
              his armour-like back, and if he lifted his head a little he could
              see his brown belly, slightly domed and divided by arches into
              stiff.
            </p>
            <p className="text-secondary">
              Dictumst per ante cras suscipit nascetur ullamcorper in nullam
              fermentum condimentum torquent iaculis reden posuere potenti
              viverra condimentum dictumst id tellus suspendisse convallis
              condimentum.
            </p>

            <div className="mt-5 pt-3 border-top">
              <div className="d-flex justify-content-between align-items-center">
                <p
                  className="mb-0 text-secondary"
                  style={{ fontSize: "0.9rem" }}
                >
                  Developed by **Xtemos Studio** @ 2025.
                </p>
                <div className="d-flex gap-3">
                  <a href="#" className="text-dark">
                    <FaFacebookF size={18} />
                  </a>
                  <a href="#" className="text-dark">
                    <FaTwitter size={18} />
                  </a>
                  <a href="#" className="text-dark">
                    <FaInstagram size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsDetails;
