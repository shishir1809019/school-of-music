import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import "./Service.css";

const Service = (props) => {
  const { name, fee, description, url } = props.service;
  return (
    <div>
      <Col>
        <Card className="service-main">
          <Card.Img
            style={{
              width: "400px",
              height: "350px",
              margin: "auto",
              padding: "10px",
            }}
            variant="top"
            src={url}
          />
          <Card.Body>
            <Card.Title>{name}</Card.Title>

            <Card.Text>Fee: {fee}TK/month</Card.Text>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
          <Button variant="info">
            <i class="fas fa-cart-plus"></i> Add to Cart
          </Button>
        </Card>
      </Col>
    </div>
  );
};

export default Service;
