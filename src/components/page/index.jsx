import React from "react";
import HeroSlider from "../hero_slider";
import PopularCategories from "../Popular_categories";
import Product from "../product";
import Testimonial from "../testimonial";

const IndexPage = () => {
  return (
    <>
      <HeroSlider />
      <PopularCategories />
      <Product />
      <Testimonial />
    </>
  );
};

export default IndexPage;
