import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import { UserContext } from "../../App";
import RegisteredEvent from "../Register/RegisteredEvent";

const Dashboard = () => {
  const [events, setEvents] = useState([]);
  const [loggedInUser] = useContext(UserContext);

  useEffect(() => {
    fetch("http://localhost:5000/volunteer/registeredevents", {
      method: "POST",
      body: JSON.stringify({ email: loggedInUser.email }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((allEvents) => setEvents(allEvents))
      .catch((error) => alert("Data not found"));
  }, [loggedInUser.email]);

  const deleteEvent = (id) => {
    fetch("http://localhost:5000/volunteer/event/delete", {
      method: "DELETE",
      body: JSON.stringify({ id }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          alert("Event deleted");
          const remainingEvents = events.filter((event) => event._id !== id);
          setEvents(remainingEvents);
        } else {
          alert("Event deletion failed");
        }
      })
      .catch(() => alert("Something is wrong"));
  };

  return (
    <Container>
      <Row>
        {events.length ? (
          events.map((eventInfo) => (
            <RegisteredEvent
              key={eventInfo._id}
              eventInfo={eventInfo}
              deleteEvent={deleteEvent}
            />
          ))
        ) : (
          <h4>
            Volunteer Task List Empty. <Link to="/">Register Now</Link>
          </h4>
        )}
      </Row>
    </Container>
  );
};

export default Dashboard;
