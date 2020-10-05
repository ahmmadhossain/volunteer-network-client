import React from "react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import Switch from "react-bootstrap/esm/Switch";
import { Col, Container, Image, Row } from "react-bootstrap";
import AddEvent from "../AddEvent/AddEvent";
import AddEvents from "../AddEvent/AddEvents";
import VolunteerLists from "../VolunteerList/VolunteerLists";
import "./Admin.css";

const Admin = () => {
  return (
    <div id="admin">
      <Container>
        <Router>
          <Row>
            <Col md={3}>
              <ul>
                <li>
                  <Link to="/admin/volunteerlist">
                    <Image src="/resources/logos/users-alt1.png" />
                    Volunteer register list
                  </Link>
                </li>
                <li>
                  <Link to="/admin/addevent">
                    <Image src="/resources/logos/plus1.png" />
                    Add Event
                  </Link>
                </li>
                {/* <li>
                  <Link to="/admin/addevents">
                    <Image src="/resources/logos/users-alt1.png" />
                    Import Events
                  </Link>
                </li> */}
              </ul>
            </Col>
            {/* </Row>
          <Row> */}
            <Col md={9}>
              <Switch>
                <Route exact path="/admin">
                  <VolunteerLists />
                </Route>
                <Route exact path="/admin/volunteerlist">
                  <VolunteerLists />
                </Route>
                <Route exaxct path="/admin/addevent">
                  <AddEvent />
                </Route>
                <Route exaxct path="/admin/addevents">
                  <AddEvents />
                </Route>
              </Switch>
            </Col>
          </Row>
        </Router>
      </Container>
    </div>
  );
};

export default Admin;
