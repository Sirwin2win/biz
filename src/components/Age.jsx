import React from "react";

const Age = () => {
  const age = 75;

  if (age < 30) {
    return <p>You're a child</p>;
  } else if (age <= 70) {
    return <p>You're an adult</p>;
  } else {
    return <p>You're retired</p>;
  }
};

export default Age;
