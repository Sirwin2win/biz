import React from "react";

const Greeting = () => {
  const hrs = new Date().getHours();
  // const day = new Date().getDay()
  if (hrs < 12) {
    return (
      <>
        <p>Good Morning</p>
      </>
    );
  } else if (hrs <= 15) {
    return <p>Good afternoon</p>;
  } else if (hrs <= 20) {
    return <p>Good evening</p>;
  } else {
    return <p>Good night</p>;
  }
};

export default Greeting;
