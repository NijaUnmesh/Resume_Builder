import React from "react";
import "./Footer.css";

const Footer = ({ marginTop }) => {
  return (
    <footer className="footer p-5" style={{ marginTop: marginTop }}>
      <h3>Contact Us</h3>
      <h6 className="mt-4"><i class="fa-solid fa-envelope"></i>rbuilder@gmail.com</h6>
      <h6><i class="fa-solid fa-mobile-screen"></i>9898989898</h6>
      <h4 className="mt-4">Connect with Us</h4>
      <div className="d-flex justify-content-center g-5">
        <h4 className="mx-1"><i class="fa-brands fa-whatsapp"></i></h4>
        <h4 className="mx-1"><i class="fa-brands fa-instagram"></i></h4>
        <h4 className="mx-1"><i class="fa-brands fa-square-linkedin" style={{ backgroundColor: "#350463" }}></i></h4>
      </div>
      <h6  className="mt-3 "  style={{ fontStyle: "italic" }}>Designed & built with ❤️ using React</h6>
    </footer>
  );
};

export default Footer;
