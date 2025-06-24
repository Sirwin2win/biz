import React from "react";
import man1 from "../images/man1.avif";
import man2 from "../images/man2.avif";
import man3 from "../images/man3.avif";
import woman1 from "../images/woman1.avif";
import woman2 from "../images/woman2.avif";
import "./Style.css";

const Team = () => {
  return (
    <div className="container">
      <h2 className="text-primary text-center my-5">Meet Our Team Members</h2>
      <div className="row my-5 ms-4">
        <div className="col-sm-4 mb-5">
          <img src={man3} className="team" alt="" />
          <div className="pos">
            <h4>John Doe</h4>
            <p className="men">MD</p>
          </div>
        </div>
        <div className="col-sm-4 mb-5">
          <img src={woman2} className="team" alt="" />
          <div className="pos">
            <h4>John Doe</h4>
            <p className="men">MD</p>
          </div>
        </div>
        <div className="col-sm-4 mb-5">
          <img src={man2} className="team" alt="" />
          <div className="pos">
            <h4>John Doe</h4>
            <p className="men">MD</p>
          </div>
        </div>
        <div className="col-sm-4 mb-5">
          <img src={woman1} className="team" alt="" />
          <div className="pos">
            <h4>John Doe</h4>
            <p className="men">MD</p>
          </div>
        </div>
        <div className="col-sm-4 mb-5">
          <img src={man1} className="team" alt="" />
          <div className="pos">
            <h4>John Doe</h4>
            <p className="men">MD</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
