import React from "react";
import { Button } from "react-bootstrap";
import img from "../../../images/headerImg.jpg";
import "./Header.css";

const Header = () => {
  return (
    <div className="row header-main ">
      <div className="col-md-6 d-flex align-items-center justify-content-center">
        <div className="text-start ">
          <h1 className="text-start fw-bold">
            Practical teaching, learning <br /> and Social Development
          </h1>
          <p className="text-muted mb-4">
            The simple and enjoyable act of making music with your child
            naturally <br /> fosters important social and emotional skills...
          </p>
          <Button variant="info">Learn More</Button>
        </div>
      </div>
      <div className="col-md-6 d-flex align-items-center justify-content-center">
        <img className="img-fluid" src={img} alt="" />
      </div>
    </div>
  );
};

export default Header;
