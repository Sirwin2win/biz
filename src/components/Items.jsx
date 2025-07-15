import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../features/productReducer";
import { FcRating } from "react-icons/fc";
import { FaEye } from "react-icons/fa";

const Items = () => {
  const { data: products, status } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, []);
  console.log(products);
  return (
    <>
      <h3 className="text-primary text-center pb-5">New Arrivals</h3>
      <div className="row">
        {products.map((product) => (
          <div className="col-sm-4 mb-3" key={product.id}>
            <div className="card" style={{ width: "18rem" }}>
              {console.log(product)}
              <img
                src={product.image}
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
                    <FcRating />:{product.rating.rate}{" "}
                  </p>
                  <p className="col">
                    Count
                    <FaEye />:{product.rating.count}{" "}
                  </p>
                  <p className="col">${product.price}</p>
                </div>

                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Items;
