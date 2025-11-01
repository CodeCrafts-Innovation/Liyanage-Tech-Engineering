import React from "react";
import { Carousel, Button } from "react-bootstrap";
import { slides } from "../data/nav"; 
// const HeroSlider = () => {
//   return (
//     <Carousel fade interval={4000} controls indicators>
//       {slides.map((slide, index) => (
//         <Carousel.Item key={index}>
//           <div
//             className="d-flex flex-column flex-md-row align-items-center justify-content-between"
//             style={{
//               height: "100vh",
//               backgroundColor: slide.bgColor,
//               padding: "0 6%",
//             }}
//           >
//             {/* Left Content */}
//             {/* <div className="text-center text-md-start mb-4 mb-md-0">
//               <p className="fw-medium mb-2">
//                 {slide.desc.split(slide.category)[0]}
//                 <span className="text-warning fw-bold">{slide.category}</span>
//                 {slide.desc.split(slide.category)[1]}
//               </p>
//               <h1 className="fw-bold display-5">{slide.title}</h1>

//               <h3 className="fw-bold mb-4 d-flex align-items-center justify-content-center justify-content-md-start">
//                 by{" "}
//                 <img
//                   src={slide.authorImg}
//                   alt={slide.by}
//                   className="rounded-circle mx-2"
//                 />
//                 {slide.by}
//               </h3>

//               <div className="d-flex align-items-center justify-content-center justify-content-md-start">
//                 <Button variant="dark" className="rounded-pill px-4 py-2 me-3">
//                   Shop Now
//                 </Button>
//                 <h3 className="fw-bold mb-0">{slide.price}</h3>
//               </div>
//             </div> */}

//             {/* Right Image */}
//             <div className="d-none d-md-block">
//               <img
//                 src={slide.image}
//                 alt={slide.title}
//                 className="img-fluid rounded"
//                 style={{ maxHeight: "80vh" }}
//               />
//             </div>
//           </div>
//         </Carousel.Item>
//       ))}
//     </Carousel>
//   );
// };
const HeroSlider = () => {
  return (
    <Carousel fade interval={4000} controls indicators>
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <img
            src={slide.image}
            className="d-block w-100"
            alt={`slide-${index}`}
            style={{
              height: "70vh", // full viewport height
              objectFit: "cover",
            }}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HeroSlider;
