import React from "react";
import { Card, Col } from "react-bootstrap";

const Teacher = (props) => {
  const { name, url, description } = props.teacher;
  return (
    <div>
      <Col>
        <Card className="service-main">
          <Card.Img
            className="img-fluid"
            style={{
              height: "300px",
              margin: "auto",
              padding: "10px",
            }}
            variant="top"
            src={url}
          />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Teacher;
