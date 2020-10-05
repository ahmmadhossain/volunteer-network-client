import React from "react";
import { Button, Col, Image, Row } from "react-bootstrap";

const RegisteredEvent = ({ eventInfo, deleteEvent }) => {
  const { _id, date, event } = eventInfo;
  const { name, image } = event;

  return (
    <Col md={6} className="mb-5">
      <Row>
        <Col md={4} className="m-2 p-2">
          <Image src={image} className="rounded w-100" />
        </Col>
        <Col md={6} className="m-2 p-2">
          <h4>{name}</h4>
          <h6>{new Date(date).toDateString()}</h6>
          <Button variant="danger" onClick={() => deleteEvent(_id)}>
            Cancel
          </Button>
        </Col>
      </Row>
    </Col>
  );
};

export default RegisteredEvent;
