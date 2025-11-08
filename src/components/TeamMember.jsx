import { section } from "framer-motion/client";
import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import {team} from "../data/team"; 
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

const TeamMember = () => {
  return (
     <section className="py-5 team-section bg-light ">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold">Team Members</h2>
          <p className="text-muted">
            Meet our talented and dedicated professionals
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          speed={1000}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
        >
          {team.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="text-center p-3">
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-circle shadow-lg mb-3 team-img"
                />
                <h6 className="fw-bold">{member.name}</h6>
                <p className="text-muted">{member.role}</p>
                <div className="d-flex justify-content-center gap-3 mt-3">
                  {member.social.facebook && (
                    <a href={member.social.facebook} className="social-icon facebook">
                      <FaFacebookF />
                    </a>
                  )}
                  {member.social.x && (
                    <a href={member.social.x} className="social-icon twitter">
                      <FaXTwitter />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} className="social-icon linkedin">
                      <FaLinkedinIn />
                    </a>
                  )}
                  {member.social.instagram && (
                    <a href={member.social.instagram} className="social-icon instagram">
                      <FaInstagram />
                    </a>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default TeamMember;
