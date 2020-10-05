import React from "react";
import { Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Events.css";

const EventDetails = ({ event }) => {
  const { _id, name, image } = event;
  return (
    <Col md={3} className="mt-5 task">
      <Link to={`/volunteerregister/${_id}`}>
        <Image src={image} className="rounded w-100 task-img" />
        <h6 className="task-name">{name}</h6>
      </Link>
    </Col>
  );
};

export default EventDetails;
