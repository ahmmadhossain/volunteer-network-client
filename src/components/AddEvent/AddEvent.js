import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddEvent = () => {
  const { register, handleSubmit, errors, reset } = useForm();
  const onSubmit = (data) => {
    const { title: name, description, date } = data;

    const newEvent = {
      name,
      description,
      date,
    };

    fetch("http://localhost:5000/events/add", {
      method: "POST",
      body: JSON.stringify(newEvent),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          alert("Event created successfully");
          reset();
        } else {
          alert("Event creation failed");
        }
      })
      .catch(() => alert("Something is wrong"));
  };

  return (
    <Container className="md-4">
      <h4>Add Event</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="title"
          ref={register({ required: true })}
          className="form-control mb-4"
          placeholder="Event Title"
        />
        {errors.title && (
          <span className="text-danger">This field is required</span>
        )}
        <br />
        <input
          name="description"
          ref={register({ required: true })}
          className="form-control mb-4"
          placeholder="Event Description"
        />
        {errors.description && (
          <span className="text-danger">This field is required</span>
        )}
        <br />
        <input
          name="date"
          type="date"
          ref={register({ required: true })}
          className="form-control mb-4"
          placeholder="Date"
        />
        {errors.date && (
          <span className="text-danger">This field is required</span>
        )}
        <br />
        <input type="submit" className="btn btn-primary" />
      </form>
    </Container>
  );
};

export default AddEvent;
