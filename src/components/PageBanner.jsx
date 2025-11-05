import React from "react";

const PageBanner = () => {
  return (
    <section
      className="page-banner d-flex align-items-center text-white"
      style={{ backgroundImage: "url(${image})" }}
    >
      <div className="container">
        <div className="content">
          <h1 className="fw-bold display-4"></h1>
          <p className="mt-3"></p>
          <span className="text-light opacity-75">Home</span>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
