import React from "react";

const PageBanner = ({ title, subtitle, image, path }) => {
  return (
    <section
      className="page-banner d-flex align-items-center text-white"
      style={{backgroundImage: `url(${image})`,}}
    >
      <div className="container">
        <div className="content">
          <h1 className="fw-bold display-4"></h1>
          <p className="mt-3">
            <span className="text-light opacity-75">Home</span>/{" "}
            <span className="fw-semibold">{subtitle || title}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
