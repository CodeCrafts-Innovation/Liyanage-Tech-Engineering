import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonials } from "../data/testimonials";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Testimonial = () => {
  return (
    <section className="py-5 testimonial-section">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-2">Our Testimonial</h2>
          <h6 className="fw-semibold">Our Client Saying!</h6>
        </div>

           <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            992: { slidesPerView: 2 },
          }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card p-4 rounded-3 shadow-sm bg-light">
                <p className="text-muted mb-4">
                  <i className="bi bi-quote fs-3 text-warning me-2"></i>
                  {t.review}
                </p>
                <hr />
                <div className="d-flex align-items-center mt-3">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="rounded-circle me-3"
                    width="60"
                    height="60"
                  />
                  <div>
                    <h6 className="fw-semibold mb-0">{t.name}</h6>
                    <p className="mb-1 text-secondary">{t.profession}</p>
                    <div>
                      {[...Array(t.rating)].map((_, i) => (
                        <i key={i} className="bi bi-star-fill text-warning"></i>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Arrows */}
        <div className="swiper-button-prev-custom">
          <i className="bi bi-arrow-left"></i>
        </div>
        <div className="swiper-button-next-custom">
          <i className="bi bi-arrow-right"></i>
        </div>
      </Container>
    </section>
  );
};

export default Testimonial;