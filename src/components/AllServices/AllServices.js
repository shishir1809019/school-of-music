import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Service from "../Service/Service";

const AllServices = () => {
  const [allServices, setAllServices] = useState([]);

  // load fake data from local db
  useEffect(() => {
    fetch("allServicesDb.json")
      .then((res) => res.json())
      .then((data) => setAllServices(data));
  }, []);
  return (
    <div>
      <h2 className="my-4 fw-bold">Our all services</h2>
      <Row xs={1} md={3} className="g-4 container  mx-auto">
        {allServices.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </Row>
    </div>
  );
};

export default AllServices;
