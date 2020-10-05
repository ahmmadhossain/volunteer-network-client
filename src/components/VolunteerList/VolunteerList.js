import React from "react";
import "./VolunteerList.css";

const VolunteerList = ({ volunteer, deleteEvent }) => {
  const { _id, fullname, email, date, event } = volunteer;
  const { name } = event;

  return (
    <tr>
      <td>{fullname}</td>
      <td>{email}</td>
      <td>{new Date(date).toDateString()}</td>
      <td>{name}</td>
      <td>
        <img
          onClick={() => deleteEvent(_id)}
          src="/resources/logos/trash-29.png"
          class="rounded mx-auto d-block"
          id="delete"
          alt="..."
        ></img>
      </td>
    </tr>
  );
};

export default VolunteerList;
