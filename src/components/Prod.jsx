import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Prod = () => {
  const [prod, setProd] = useState({ products: [] });
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => setProd(json));
  }, []);
  return (
    <div>
      <div className="row mt-5">
        {prod.products.map((product) => (
          // {products.data.map((product) => (
          <div className="col-sm-4 mb-3" key={product.id}>
            <div className="card" style={{ width: "18rem" }}>
              {/* {console.log(product)} */}
              {/* {product.images.map((v) => (
                <img src={v} alt={v} />
              ))} */}
              <img
                src={product.thumbnail}
                className="card-img-top"
                alt={product.title}
              />
              <div className="card-body">
                <h5 className="card-title">{product.category}</h5>
                <h5 className="card-title">{product.title}</h5>
                {/* <p className="card-text">{product.description}</p> */}
                <div className="row">
                  <p className="col">
                    Rating
                    {/* <FcRating />:{product.rating.rate}{" "} */}
                  </p>
                  <p className="col">
                    Count
                    {/* <FaEye />:{product.rating.count}{" "} */}
                  </p>
                  <p className="col">${product.price}</p>
                </div>

                <Link to={`${product.id}`} className="btn btn-primary">
                  Go somewhere
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prod;
