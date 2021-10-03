import React from "react";
import img from "../../../images/headerImg.jpg";
import "./Header.css";

const Header = () => {
  return (
    <div className="row header-main ">
      <div className="col-md-6 d-flex align-items-center justify-content-center">
        <h1 className="fw-bold">
          Practical teaching, learning <br /> and Social Development
        </h1>
      </div>
      <div className="col-md-6 d-flex align-items-center justify-content-center">
        <img className="img-fluid" src={img} alt="" />
      </div>
    </div>
  );
};

export default Header;
