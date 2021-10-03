import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="bg-dark footer-main container-fluid text-light">
      <h3 className="pt-5">School Of Music</h3>
      <i className="fab fa-facebook-square"></i>
      <i className="fab fa-google-plus-square"></i>
      <i className="fab fa-instagram-square"></i>
      <p className="copyright-text mt-5 pt-5">
        &copy; 2021 School of Music – All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
