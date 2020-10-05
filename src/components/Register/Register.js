import React, { useState, useEffect, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { UserContext } from "../../App";

const Register = () => {
  const [loggedInUser] = useContext(UserContext);
  const { eventId } = useParams();
  const [event, setEvent] = useState({});
  const history = useHistory();
  const { register, handleSubmit, reset, errors } = useForm();

  useEffect(() => {
    fetch(`http://localhost:5000/events/${eventId}`)
      .then((res) => res.json())
      .then((event) => setEvent(event))
      .catch((error) => error && alert("Data not found"));
  }, [eventId]);

  const onSubmit = (data, e) => {
    e.preventDefault();
    const { fullname, email, date, description } = data;
    const newEvent = {
      fullname,
      email,
      date,
      description,
      event,
    };

    fetch("http://localhost:5000/volunteer/registration", {
      method: "POST",
      body: JSON.stringify(newEvent),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((insertResult) => {
        if (insertResult) {
          history.push("/dashboard");
          reset();
        }
      })
      .catch((error) => alert("Something is wrong."));
  };
  return (
    <div className="login mt-1">
      <h2>Register as a Volunteer</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="fullname"
          defaultValue={loggedInUser.name}
          ref={register({ required: true })}
          placeholder="Full Name"
          className="form-control"
          readOnly
        />
        {errors.fullname && (
          <span className="text-danger">* This field is required</span>
        )}
        <br />

        <input
          name="email"
          defaultValue={loggedInUser.email}
          ref={register({ required: true })}
          placeholder="Email"
          className="form-control"
          readOnly
        />

        {errors.email && (
          <span className="text-danger">* This field is required</span>
        )}
        <br />
        <input
          name="date"
          type="date"
          ref={register({ required: true })}
          placeholder="Date"
          className="form-control"
        />

        {errors.date && (
          <span className="text-danger">* This field is required</span>
        )}
        <br />
        <input
          name="description"
          ref={register({ required: true })}
          placeholder="Description"
          className="form-control"
          defaultValue={event.name}
        />

        {errors.description && (
          <span className="text-danger">* This field is required</span>
        )}
        <br />
        <input
          name="eventname"
          ref={register({ required: true })}
          placeholder="Event Name"
          className="form-control"
          defaultValue={event.name}
          readOnly
        />

        {errors.task && (
          <span className="text-danger">* This field is required</span>
        )}
        <input
          type="submit"
          className="btn btn-primary mt-5 d-block w-100"
          value="Registration"
        />
      </form>
    </div>
  );
};

export default Register;
