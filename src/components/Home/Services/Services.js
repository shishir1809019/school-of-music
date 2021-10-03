import React from "react";
import { Row } from "react-bootstrap";
import Service from "../../Service/Service";

const Services = () => {
  // fake data
  const services = [
    {
      id: 1,
      name: "Flute Learning",
      fee: 1000,
      description:
        "Learning the flute is not difficult, but it can be if you do not maintain your focus or dedicate the right amount of time to practicing what you learn.",
      url: "https://www.musicgeek.net/wp-content/uploads/2020/06/dave-francis-oFsbu0XX5gw-unsplash.jpg",
    },
    {
      id: 2,
      name: "Drum Learning",
      fee: 1000,
      description:
        "Learning the flute is not difficult, but it can be if you do not maintain your focus or dedicate the right amount of time to practicing what you learn.",
      url: "https://www.roland.com/RolandComSite/media/uk/images/articles/HD-3.jpg",
    },
    {
      id: 3,
      name: "Guitar Learning",
      fee: 800,
      description:
        "Learning the flute is not difficult, but it can be if you do not maintain your focus or dedicate the right amount of time to practicing what you learn.",
      url: "https://m.media-amazon.com/images/I/61AHZhBdhyL.jpg",
    },
    {
      id: 4,
      name: "Tabla Learning",
      fee: 1200,
      description:
        "Learning the flute is not difficult, but it can be if you do not maintain your focus or dedicate the right amount of time to practicing what you learn.",
      url: "https://images-na.ssl-images-amazon.com/images/I/71jDaMCbGrL._AC_SL1500_.jpg",
    },
  ];
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
