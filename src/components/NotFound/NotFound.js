import React from "react";
import img from "../../images/404.jpg";

const NotFound = () => {
  return (
    <div style={{ background: "#f5f5f5" }}>
      <img className="w-25 m-4" src={img} alt="" />
    </div>
  );
};

export default NotFound;
