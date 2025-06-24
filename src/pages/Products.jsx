import React, { useState } from "react";
import house from "../images/cute-kid-with-abacus-studio.jpg";
import laptop3 from "../images/laptop3.avif";
import phone2 from "../images/phone2.avif";
import shoe3 from "../images/shoe3.avif";
import camera4 from "../images/camera4.avif";
import bag4 from "../images/bag4.avif";
import Greeting from "../components/Greeting";
import Day from "../components/Day";
import Age from "../components/Age";
import FormData from "../components/FormData";
import Monday from "../components/Monday";

const Products = ({ fruits, arr }) => {
  var hr = new Date().getHours();
  var min = new Date().getMinutes();
  const dd = new Date().getDay();

  const square = function (n) {
    alert(n ** 2);
  };
  const a = 4;
  const b = 6;
  const age = 20;

  return (
    <div>
      {/* condition ? true : false */}
      {dd ? <Day /> : <p>No Match</p>}
      {b < a ? <p>Sure</p> : <p>False</p>}
      {b > a && <h3>Correct!</h3>}
      <Age />
      <FormData />
      <button
        onClick={() => {
          square(10);
        }}
        className="btn btn-primary"
      >
        Square
      </button>
      <h1 style={{ background: "fuchdia" }}>
        {hr}:{min}
      </h1>
      <Greeting />

      {fruits.map((v) => (
        <div key={v.id}>
          <p>{v.name}</p>
          <p>{v.age}</p>
          <p>{v.email}</p>
        </div>
      ))}
      {arr.map((v) => (
        <p>{v}</p>
      ))}
      <Monday />
      {/* New Arrivals Started */}
      {/* primary,danger,warning,info,secondary,light,dafault */}
      <div className="container">
        <h2 className="my-5 text-primary text-center">New Arrivals</h2>
        <div className="row mb-5 ms-4">
          <div className="col-sm-4 mb-5">
            <div className="card" style={{ width: "18rem" }}>
              <img src={laptop3} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card’s content.
                </p>
                <a href="#" className="btn btn-primary">
                  Add To Cart
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-4 mb-5">
            <div className="card" style={{ width: "18rem" }}>
              <img src={phone2} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card’s content.
                </p>
                <a href="#" className="btn btn-primary">
                  Add To Cart
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-4 mb-5">
            <div className="card" style={{ width: "18rem" }}>
              <img src={shoe3} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card’s content.
                </p>
                <a href="#" className="btn btn-primary">
                  Add To Cart
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-4 mb-5">
            <div className="card" style={{ width: "18rem" }}>
              <img src={camera4} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card’s content.
                </p>
                <a href="#" className="btn btn-primary">
                  Add To Cart
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-4 mb-5">
            <div className="card" style={{ width: "18rem" }}>
              <img src={bag4} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card’s content.
                </p>
                <a href="#" className="btn btn-primary">
                  Add To Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* New Arrivals Ended */}
    </div>
  );
};

export default Products;
