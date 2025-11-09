import React from "react";
import PageBanner from "../../PageBanner";
import ContactUs from "./Contact_us";
import Map from "./map";
const Contact = () => {
  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="Contact Us"
        image="https://cdn.pixabay.com/photo/2018/06/09/13/41/czech-republic-3464435_1280.jpg"
      />
      <ContactUs />
      <Map/>
    </>
  );
};

export default Contact;
