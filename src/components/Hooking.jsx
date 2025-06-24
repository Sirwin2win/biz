import React, { useState, useEffect } from "react";

const Hooking = () => {
  const [color, setColor] = useState("");
  const [name, setName] = useState("");
  const [arr, setArr] = useState([]);
  const [obj, setObj] = useState({
    name: "Mary Doe",
    email: "marydoe@gmail.com",
    age: 27,
  });
  const [min, setMin] = useState(0);
  const [products, setProducts] = useState([]);
  const fruits = ["Apple", "Cherry", "Orange"];
  //   const greet = function () {
  //     alert("Hello everyone");
  //   };
  useEffect(() => {
    setInterval(() => {
      setMin(new Date().getMinutes());
    }, 1000);
  });

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
    // setProducts(json);
  }, [products]);

  return (
    <div>
      <div className="row">
        {products.map((product) => (
          <div className="col-sm-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src={product.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h1>{min}</h1>
      <h1 style={{ color: color }}>{color}</h1>
      <h1 style={{ backgroundColor: color, color: "white" }}>{name}</h1>
      {/* <h1>{arr.map((v = <p>{v}</p>))}</h1> */}
      <h1>
        {arr.map((v) => (
          <p>{v}</p>
        ))}
      </h1>
      <p>{obj.name}</p>
      <p>{obj.email}</p>
      <p>{obj.age}</p>
      <button
        onClick={() => {
          setColor("green");
        }}
      >
        Red
      </button>
      <button
        onClick={() => {
          setName("Peter Doe");
        }}
      >
        Name
      </button>
      <button
        onClick={() => {
          setArr(fruits);
        }}
      >
        Array Info
      </button>
      {/* <button
        onClick={() => {
          setObj(person);
        }}
      >
        Object Info
      </button> */}
    </div>
  );
};

export default Hooking;
