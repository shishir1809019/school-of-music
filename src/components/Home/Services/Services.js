import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Service from "../../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  //load fake data
  useEffect(() => {
    fetch("servicesDb.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="mx-auto text-center">
      <h3 className="my-3">Our Services</h3>
      <Row xs={1} md={2} className="g-4 container w-75 mx-auto">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </Row>
    </div>
  );
};

export default Services;
