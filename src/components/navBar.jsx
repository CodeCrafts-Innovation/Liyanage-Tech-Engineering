import React from "react";

const navBar = () => {
  return (
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
    </nav>
  );
};

export default navBar;
