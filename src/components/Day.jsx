import React from "react";
import Monday from "./Monday";
import Tuesday from "./Tuesday";

const Day = () => {
  const days = new Date().getDay();
  switch (days) {
    case 0:
      return <p>Sunday</p>;
      break;
    case 1:
      return <Monday />;
      break;
    case 2:
      return <Tuesday />;
      break;
    case 3:
      return <p>Wednesday</p>;
      break;
    case 4:
      return <p>Thursday</p>;
      break;
    case 5:
      return <p>Friday</p>;
      break;
    case 6:
      return <p>Saturday</p>;
      break;

    default:
      return <h1>No Match</h1>;
  }
};

export default Day;
