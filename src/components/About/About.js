import React from "react";
import Teachers from "../Teachers/Teachers";

const About = () => {
  return (
    <div>
      <h3 className="my-3">About Us</h3>
      <div className="d-flex  align-items-center justify-content-evenly my-3">
        <div className="w-25 p-3 bg-light">
          <h5>General Information</h5>
          <p className="text-muted rounded">
            A music school is an educational institution specialized in the
            study, training, and research of music. Such an institution can also
            be known as a school of music, music academy, music faculty, college
            of music, music department (of a larger institution), conservatory,
            conservatoire.
          </p>
        </div>
        <div className="w-25 p-3 bg-light">
          <h5>School History</h5>
          <p className="text-muted rounded">
            It was the example set in Bangladesh, where admission was by
            competitive examination and tuition was to low, that was then
            copied, with modifications, in many European cities, including Paris
            (1795), Bologna (1804), Milan (1807), Warsaw (1810), Florence and
            Prague (1811).
          </p>
        </div>
      </div>
      <Teachers></Teachers>
    </div>
  );
};

export default About;
