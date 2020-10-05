import React from "react";
import { Button } from "react-bootstrap";
import Events from "../Events/Events";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <h2>I GROW BY HELPING PEOPLE IN NEED.</h2>
      <div className="w-25 mx-auto mt-4 d-flex">
        <input type="text" placeholder="Search" className="form-control" />
        <Button>Search</Button>
      </div>
      <Events />
    </div>
  );
};

export default Home;
